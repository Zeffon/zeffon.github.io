---
slug: springboot-redis-keySpaceNotifyfication
title: SpringBoot项目中Redis键空间通知
authors: zeffon
tags: [java, redis]
date: 2020-07-22
---

当 redis 受到某些事件的影响，比如`键被删除delete`或是`键过期expired`，redis 会发布一个通知。而我们可以借助这个机制实现一个**消息队列**。

<!--truncate-->

## 前文

很多时候，我们的项目业务中，很多业务是要`主动触发`的。当这种机制不是由用户或者开发人员来触发的话，就需要程序来帮助我们来触发了。
首先，很多人想到的是定时器。通过在程序设置定时任务来主动触发某些业务任务的执行。当然，这是一个简单的方法。可是却只适合**单体应用**，并且是无法保障任务准确执行的。定时任务只是固定了某一个时间点，是无法适应我们多样的时间定时的。因此很多企业采用了消息中间件（比如**RocketMQ**）来解决这一问题。
其实，我们也可以选择 Redis 来解决这一问题。利用的是 Redis 的键空间通知功能。从严格意义上，Redis 这种机制并不属于**消息队列**，它只是利用了键相关的事件来触发任务。

> Redis 的键空间通知: 当 redis 受到某些事件的影响，比如`键被删除delete`或是`键过期expired`，redis 会发布一个通知。

redis 键空间通知是一种发布/订阅机制，有两种类型：
比如进行 删除操作 del key-value 中
key-space 返回的是操作的类型 del
key-event 返回的是事件中的 key 值

操作事件类型有删除 del、过期 expired x 表示、对列表操作也算 l 表示、对集合操作也算 s 表示
更多的在 redis.conf 中查询

## 正文

### 开启 Redis 键空间通知

redis 为了提供性能，默认是不开启 redis 键空间通知功能的
所以手动在配置文件 redis.conf 中的 `**notify-keyspace-events Ex**` 打开键空间通知过期事件
E 表示 key-event x 表示过 expired 过期

```conf
notify-keyspace-events Ex
```

**开启后由于未生效，需要重启一下 redis，重启后便开启了键空间通知功能**

### 进行订阅消息

在 redis 命令里使用命令订阅相关消息
注意 redis 是分数据库 0-15 的，注意到储存的位置
可以使用`select 数字`切换，默认是 0

```bash
# 进入本地redis命令行
$ redis-cli
127.0.0.1:6379> psubscribe __keyevent@0__:expired
Reading message... (press Ctrl-C to quit)
1) "psubscribe"
2) "__keyevent@0__:expired"
3) (integer) 1
```

**这样的话已在 Redis 内开启消息订阅了**

打开其它的 redis 命令行
设置一条 key 为 test，Value 为 testValue，有效期为 30s 的数据

```sh
127.0.0.1:6379> setex test 30  testValue
```

大概 30s 后，在之前的 redis 命令行就会打印出

```sh
127.0.0.1:6379> psubscribe __keyevent@0__:expired
Reading message... (press Ctrl-C to quit)
1) "psubscribe"
2) "__keyevent@0__:expired"
3) (integer) 1
4) "test"
```

### SpringBoot 项目应用键空间通知

#### 配置文件进行配置 redis

消息尽量别与实际数据库 0 冲突，可以放在其它的数据库中

```yml
spring:
  redis:
    localhost: localhost
    port: 6379
    password:
    database: 3
    listen-pattern: psubscribe __keyevent@3__:expired
```

#### 引进 Redis 依赖

```xml
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-redis</artifactId>
    </dependency>
```

#### 发布业务消息

```java
@RequestMapping("/redis")
@RestController
public class RedisTest {
    @Autowired
    private StringRedisTemplate redistemplate;

    @GetMapping("/send")
    public void sendToRedis(String id) {
        // 设置key为id，value随便(因为键空间通知返回的只有key)，过期时间30s
        try {
            redistemplate.opsForValue().set(id, "1", 30, TimeUnit.SECONDS);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

#### 订阅 redis 消息

1. 负责监听 redis 键空间通知的消息

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.connection.Message;
import org.springframework.data.redis.connection.MessageListener;
import org.springframework.stereotype.Component;

@Component
public class TopicMessageListener implements MessageListener {

    @Override
    public void onMessage(Message message, byte[] bytes) {
        byte[] body = message.getBody();  // 获取到过期的键
        byte[] channel = message.getChannel();  // 获取到监听订阅的类型(psubscribe __keyevent@3__:expired)

        String expiredKey = new String(body);
        String topic = new String(channel);

        // TODO
        // 获取到键空间的key之后，根据实际的业务进行相关的处理
    }
}
```

1. 配置 TopicMessageListener，使其生效

```java
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.listener.PatternTopic;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;
import org.springframework.data.redis.listener.Topic;

@Configuration
public class MessageListenerConfiguration {

    @Value("${spring.redis.listen-pattern}")
    public String pattern;

    @Bean
    public RedisMessageListenerContainer listenerContainer(RedisConnectionFactory redisConnection) {
        RedisMessageListenerContainer container = new RedisMessageListenerContainer();
        container.setConnectionFactory(redisConnection); // 设置连接信息
        Topic topic = new PatternTopic(this.pattern); // 设置监听主题

        container.addMessageListener(new TopicMessageListener(), topic); // 监听器和监听主题加入到监听容器中
        return container; // 将监听容器加入IoC容器中
    }
}
```
