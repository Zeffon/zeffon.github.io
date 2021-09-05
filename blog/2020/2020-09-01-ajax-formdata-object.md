---
slug: ajax-formdata-object
title: Ajax中formdata上传图片
authors: zeffon
tags: [js]
date: 2020-09-01
---

FormData 对象用以将数据编译成**键值对**，以便用`XMLHttpRequest`来发送数据。其主要用于发送表单数据，但亦可用于发送带键数据(keyed data)，而独立于表单使用。如果表单 enctype 属性设为`multipart/form-data`，则会使用表单的`submit()`方法来发送数据，从而，发送数据具有**同样形式**。

<!--truncate-->

## 前言

FormData 对象用以将数据编译成**键值对**，以便用`XMLHttpRequest`来发送数据。其主要用于发送表单数据，但亦可用于发送带键数据(keyed data)，而独立于表单使用。如果表单 enctype 属性设为`multipart/form-data`，则会使用表单的`submit()`方法来发送数据，从而，发送数据具有**同样形式**。

FormData 对象的字段类型可以是`String`、`Blob`, `File`。如果它的字段类型不是`Blob`也不是`File`，则会被转换成**字符串类**。比起普通的 AJAX,使用 FormData 的最大优点是可以异步上传一个`二进制文件`.

## 正文

### 表单提交

```html
<form enctype="multipart/form-data" id="form" method="post">
  <div>标题：<input type="text" id="title" name="title" /></div>
  <div>
    选择照片：<input
      type="file"
      id="photofile"
      name="photofile"
      value="选择照片"
      style="width:100%;border-radius:2px;background:rgba(0,0,0,0.2);color:#fff;"
    />
  </div>
  <div>
    <input
      type="submit"
      value="上传"
      name="btn"
      id="btn"
      class="btn"
      style="width:100%;background:rgba(0,0,0,0.4);color:#fff;"
    />
  </div>
</form>
```

**Form 的 enctype 属性:**
enctype 这个属性管理的是表单的 MIME 编码，它一共有三个属性：

| 值                                | 描述                                                       |
| --------------------------------- | ---------------------------------------------------------- |
| application/x-www-form-urlencoded | 在发送前编码所有字符（默认）                               |
| multipart/form-data               | 不对字符编码，用来制定传输数据的特殊类型，可图片、文件类型 |
| text/plain                        | 纯文本传输                                                 |

### Formdata 对象

1. 创建一个 FormData 对象实例，向实例化对象中添加文件字段

```javascript
let formData = new FormData(); // 创建对象实例
let title = document.getElementById("title");
let photo = document.getElementById("photofile"); // 获取HTML的input上文件
formData.append("title", title);
formData.append("photo", photo.files[0]); // 将文件添加到formdata对象中
// 或者根据form标签获取form标签内的参数
let formData = new FormData(document.getElementById("form"));
```

### 服务端接收

Java 来接受比较容易处理，只需将 request 参数进行相对应的强制类型取值，即可拿到 Ajax 传过来对应的参数值。

```java
@PostMapping("postPhoto")
public Map<String, String> postPhoto(HttpServletRequest request) {
    MultipartHttpServletRequest params = ((MultipartHttpServletRequest) request); // 强制类型转换
    MultipartFile file = params.getFile("photofile"); // 获取到二进制图片，也可以getFiles()获取到数组图片
    // 若是Ajax传过来不仅有图片还有普通参数，比如标题title时, 可通过如下获取
    String title = params.getParameter("title");
}
```
