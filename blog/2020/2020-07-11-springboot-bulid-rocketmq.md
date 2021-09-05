---
slug: springboot-bulid-rocketmq
title: SpringBoot项目构建RocketMQ
authors: zeffon
tags: [java, mq]
date: 2020-07-11
---

在 SpringBoot 项目中如何构建 RocketMQ 进行通信

<!--truncate-->

## 正文

官方提供的[简单案例](http://rocketmq.apache.org/docs/schedule-example/)

### 引进依赖进行相关配置

1. 在[maven 中央仓库](https://mvnrepository.com/artifact/org.apache.rocketmq/rocketmq-client)中找到适合版本，将其引进 SpringBoot 项目的 POM 文件中

```xml
<!-- https://mvnrepository.com/artifact/org.apache.rocketmq/rocketmq-client -->
<dependency>
    <groupId>org.apache.rocketmq</groupId>
    <artifactId>rocketmq-client</artifactId>
    <version>4.7.1</version>
</dependency>
```

2. 在配置文件进行配置

```yml
rocketmq:
  consumer:
    consumer-group: consumerGroup
  producer:
    producer-group: producerGroup
  namesrv-addr: 127.0.0.1:9876
```

### 生产者实例化

本来 ProducerSchedule 实例化后就进行 DefaultMQProducer 实例化
但是构造函数未完成初始化时，无法注入其它类的依赖
因为只有当它(数组类)初始化完成时，才可以注入其它类(对象类)的依赖
所以无法在构造函数中直接实例化 DefaultMQProducer
可以采用普通方法+`@PostConstruct`来实例化 DefaultMQProducer

> `**执行的先后 Construct -> @Autowired -> @PostConstruct**`

```java
import org.apache.rocketmq.client.exception.MQBrokerException;
import org.apache.rocketmq.client.exception.MQClientException;
import org.apache.rocketmq.client.producer.DefaultMQProducer;
import org.apache.rocketmq.client.producer.SendResult;
import org.apache.rocketmq.common.message.Message;
import org.apache.rocketmq.remoting.exception.RemotingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
@Component
public class ProducerSchedule {

    private DefaultMQProducer producer;

    @Value("${rocketmq.producer.producer-group}")
    private String producerGroup;

    @Value("${rocketmq.namesrv-addr}")
    private String namesrvAddr;

    public ProducerSchedule() {
        // 本来ProducerSchedule实例化后就进行DefaultMQProducer实例化
        // 但是构造函数未完成初始化时，无法注入其它类的依赖
        // 因为只有当它(数组类)初始化完成时，才可以注入其它类(对象类)的依赖
        // 所以无法在构造函数中直接实例化DefaultMQProducer
        // 可以采用普通方法+@PostConstruct来实例化DefaultMQProducer
    }

    @PostConstruct
    public void defaultMQProducer() {
        if (this.producer == null) {
            this.producer = new DefaultMQProducer(this.producerGroup);
            this.producer.setNamesrvAddr(this.namesrvAddr);
        }
        try {
            this.producer.start();
            System.out.println("---producer start---");
        } catch (MQClientException e) {
            e.printStackTrace();
        }
    }

    // 发送消息方法
    public String send(String topic, String messageText) throws Exception {
        Message message = new Message(topic, messageText.getBytes());
        // messageDelayLevel=1s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m 8m 9m 10m 20m 30m 1h 2h
        // 定时推送时间设置，如messageDelayLevel设置为4的话则表示30分钟后延迟触发
        message.setDelayTimeLevel(4);
        // 接受发送结果
        SendResult result = this.producer.send(message);
        return result.getMsgId();
    }
}
```

### 生产者发送消息

在某些已加入 IOC 容器的类中进行调用 ProducerSchedule 中的 send 方法进行发送消息

```java
@RequestMapping("/topic")
@RestController
public class TopicTest {
    @Autowired
    private ProducerSchedule producerSchedule;

    @GetMapping("/send")
    pubilc void sendMessageToMQ() throws Exception {
        producerSchedule.send("TopicTest", "This is a message"); // 第一个参数是主题，第二个是消息
    }
}
```

### 消费者监听

> `**CommandLineRunner接口用于应用程序启动时，初始化一些资源只会执行一次**`

```java
import org.apache.rocketmq.client.consumer.DefaultMQPushConsumer;
import org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyStatus;
import org.apache.rocketmq.client.consumer.listener.MessageListenerConcurrently;
import org.apache.rocketmq.client.exception.MQClientException;
import org.apache.rocketmq.common.message.Message;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;

@Component
// CommandLineRunner接口用于应用程序启动时，初始化一些资源只会执行一次
public class ConsumerSchedule implements CommandLineRunner {

    @Value("${rocketmq.consumer.consumer-group}")
    private String consumerGroup;

    @Value("${rocketmq.namesrv-addr}")
    private String namesrvAddr;

    public void messageListener() throws MQClientException {
        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer(consumerGroup);

        consumer.setNamesrvAddr(namesrvAddr);
        consumer.subscribe("TopicTest", "*"); // 监听主题的所有消息
        consumer.setConsumeMessageBatchMaxSize(1); // 一次消费几条消息
        // 注册消息监听(匿名类的写法)
        consumer.registerMessageListener((MessageListenerConcurrently) (messages, context) -> {
            for (Message message : messages) {
                System.out.println("消息：" + new String(message.getBody()));
            }
            return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
        });
        consumer.start();
    }

    @Override
    public void run(String... args) throws Exception {
        this.messageListener();
    }
}
```
