---
slug: java-api-docs
title: Java API自动生成文档
authors: zeffon
tags: [java]
date: 2019-10-17
---

Java API 文档自动生成有 swagger2 和 spring restdocs 两种受欢迎的工具。

<!--truncate-->

## Swagger2 的使用

### 介绍

`swagger2`通过配置，会提供了一个 url：`http://localhost:8080/v2/api-docs`，返回了所有 api 的信息。读取这个 url，将结果存储到`swagger.json`。利用 swagger2markup-maven-plugin 插件读取 swagger.json，生成一系列`adoc`文件。最后利用 asciidoctor-maven-plugin 插件将 index.adoc 文件转成`html`或`pdf`。

### 使用过程

1. 引进依赖包

```xml
	<!-- swagger工具包 -->
	<dependency>
		<groupId>io.springfox</groupId>
		<artifactId>springfox-swagger2</artifactId>
		<version>${swagger.version}</version>
	</dependency>
	<!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui -->
	<dependency>
		<groupId>io.springfox</groupId>
		<artifactId>springfox-swagger-ui</artifactId>
		<version>${swagger.version}</version>
	</dependency>
```

1. 在配置 application.yml 中，用于 SwaggerConfig 读取。这样可以控制是否开启(线上环境关闭)

```yml
swagger2:
  show: true
```

1. 配置 Swagger2（注意扫描的包的路径是否正确，否则会显示不了数据）

```java
@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Value("${swagger2.show}")
    private boolean swagger2Show;

    @Bean
    public Docket swaggerSpringMvcPlugin() {
        return new Docket(DocumentationType.SWAGGER_2)
                .enable(swagger2Show)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.zeffon.esave"))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("swagger-bootstrap-ui RESTful APIs")
                .version("1.0")
                .build();
    }
}
```

1. 在 API 类和方法上加注解

```java
@Api(value = "解锁日志")
@RestController
@RequestMapping("/log")
public class UnlockLogAPI {

    private final UnlockLogService unlockLogService;

    @Autowired
    public UnlockLogAPI(UnlockLogService unlockLogService) {
        this.unlockLogService = unlockLogService;
    }

    @GetMapping("/listUnlockLog")
    @ApiOperation(value = "获取用户全部解锁记录", notes = "全部解锁记录", tags = "日志")
    public ResultVOUtil listUnlockLog() {
        List<UnlockLogVO> unlockLog = unlockLogService.listUnlockLog();
        return ResultVOUtil.success(unlockLog);
    }
}
```

1. 实体类和其属性加注解

```java
@Data
@ApiModel(value = "开锁日志", description = "用户每次开锁的记录")
public class UnlockLog extends Base {
    @ApiModelProperty(example = "1", notes = "用户id")
    private Long uid;
}
```

1. 运行程序，在浏览器中打开`http://127.0.0.1:8081/esave/swagger-ui.html#/`

### 注解说明

| API | 作用范围 | 使用位置 |
| --- | -------- | -------- |

| [@ApiModel ](/ApiModel)
| 描述返回对象的意义 | 用在返回对象类上 |
| [@ApiModelProperty ](/ApiModelProperty)
| 对象属性 | 用在出入参数对象的字段上 |
| [@Api ](/Api)
| 协议集描述 | 用于 controller 类上 |
| [@ApiOperation ](/ApiOperation)
| 协议描述 | 用在 controller 的方法上 |
| [@ApiResponses ](/ApiResponses)
| Response 集 | 用在 controller 的方法上 |
| [@ApiResponse ](/ApiResponse)
| Response | 用在 [@ApiResponses ](/ApiResponses)
里边 |
| [@ApiImplicitParams ](/ApiImplicitParams)
| 非对象参数集 | 用在 controller 的方法上 |
| [@ApiImplicitParam ](/ApiImplicitParam)
| 非对象参数描述 | 用在 [@ApiImplicitParams ](/ApiImplicitParams)
的方法里边 |

## Spring REST Docs

### 介绍

1. Spring REST Docs 的目标替代 SpringFox Swagger，帮助自动化生成 RESTful 服务的文档。
2. 使用 Asciidoctor 编写的手写文档；Spring REST Docs 为 RESTful 服务生成准确且可读的文档。
3. 将手写文档与使用 Spring 测试生成的文档片段相结合。
4. 不受 Swagger 等工具生成的文档的限制。
5. 它可以生成准确，简洁和结构良好的 API 文档。
6. Spring REST Docs 支持测试驱动 Test Driven。
7. Spring REST Docs 支持 Spring MVC Test 框架，Spring WebFlux 的 WebTestClient 或 REST Assured 3 测试驱动。
8. Spring Boot 提供了注解@AutoConfigureRestDocs 简化文档开发。

### 使用过程（未完待续）

1. 引进依赖包

```xml
	<dependency>
		<groupId>org.springframework.restdocs</groupId>
		<artifactId>spring-restdocs-mockmvc</artifactId>
		<version>2.0.2.RELEASE</version>
		<scope>test</scope>
	</dependency>
```

### 注解说明

## 总结

1. Swagger2 的定位是和应用一起启动的`在线文档`，文档的浏览者可以很简单的填写表单并发起一个`真实`的请求，而 Spring REST Docs 更倾向于导出一份`离线文档`作为展示，并配合 curl、httpie 这种工具请求真实部署的服务。
2. Swagger2 最大的特点是`使用简单`，只需要在源码中增加一些描述性的注解即可完成整份文档，而使用 Spring REST Docs 的前提条件是需要在项目中对`API`进行`单元测试`。除了依赖，还需要严格的编写 Test 测试代码，保证测试代码通过。但是 Spring REST Docs 生成的文档比较符合于测试团队。

## 文献参考
