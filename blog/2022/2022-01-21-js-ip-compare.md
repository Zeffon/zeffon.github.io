---
slug: js-ip-compare
title: JS 字符串IP地址比较大小
authors: zeffon
tags: [js]
date: 2022-01-21 11:45
---

在日常开发中，比较大小这个问题是比较常见的，大多是比较数字的大小，而字符串比较大小一般是特殊字符串进行比较，比如开头都是字母的字符串、IP 地址、字符串时间等。对于字符串字母 和 字符串时间都比较好处理。字母会根据 ASCII 码进行大小比较，而字符串时间可以转化为 Date 时间格式进行比较。而字符串 IP 地址有啥好的处理方案？

<!--truncate-->

## IP 地址

IP 地址（这里指的是 IP V4）是一个 32 位的二进制数，通常被分割为 4 个“8 位[二进制](http://baike.baidu.com/view/18536.htm)数”（也就是 4 个字节）。IP 地址通常用“[点分十进制](http://baike.baidu.com/view/828066.htm)”表示成（a.b.c.d）的形式，其中，a,b,c,d 都是 0~255 之间的十进制整数。

例：点分十进 IP 地址（1.2.3.4），实际上是 32 位二进制数（00000001.00000010.0000011.00000100）。

## 讨论

直接将 ip 地址中 . 去掉，再将字符串转换为数字，不就解决了吗？

```javascript
const ipStr1 = "192.168.1.35";
const ipStr2 = "192.168.2.35";
const ipNum1 = parseInt(ipStr1.replaceAll(".", ""));
const ipNum2 = parseInt(ipStr2.replaceAll(".", ""));
console.log(ipNum1 > ipNum2); // false
```

这不是很好解决了吗？这是基于转换后的位数一样，要是不一样就无法使用了。

```javascript
const ipStr1 = "192.200.1.35";
const ipStr2 = "192.168.201.35";
const ipNum1 = parseInt(ipStr1.replaceAll(".", ""));
const ipNum2 = parseInt(ipStr2.replaceAll(".", ""));
console.log(ipNum1 > ipNum2); // false
```

没有考虑到所在段位的位数，导致这样比较无法准确获取结果，**所以这种方案是不可取的。**

## 解决

通过上述例子，我们可以知道，一个十进制的 IP（a.b.c.d）中，abcd 中每一位最多都是三位数。因此，我们可以用不同段的数值 乘以 ip 段内“单位”数，再各个之和，就是该 IP 的数值了。

那么我们怎么知道“单位”数呢？
从右到左：
d 是从第一个位数开始，单位自然是 1
c 是从第四个位数开始，单位自然是 1000
b 是从第四个位数开始，单位自然是 1000000
a 是从第四个位数开始，单位自然是 1000000000

```typescript
function ipToInt(ip) {
  const ipStrArr = ip.split(".");
  return (
    parseInt(ipStrArr[0]) * 1000000000 +
    parseInt(ipStrArr[1]) * 1000000 +
    parseInt(ipStrArr[2]) * 1000 +
    parseInt(ipStrArr[3])
  );
}
```

IP 地址中，abcd 中最小值是 0，最大值是 255，也就是 256 个数字。刚好是 16 的平方，转化为十六进制也就是两个位数。
那么“单位”数可以使用十六进制的数值来计算
从右到左：
d 是从第一个位数开始，单位自然是 1
c 是从第四个位数开始，单位自然是 0x100
b 是从第四个位数开始，单位自然是 0x10000
a 是从第四个位数开始，单位自然是 0x1000000

```typescript
function ipToInt(ip) {
  const ipStrArr = ip.split(".");
  return (
    parseInt(ipStrArr[0]) * 0x1000000 +
    parseInt(ipStrArr[1]) * 0x10000 +
    parseInt(ipStrArr[2]) * 0x100 +
    parseInt(ipStrArr[3])
  );
}
```

也可以用按位计算

> #### 左位移运算符
>
> 左移位运算符为 **<<**，其运算规则是：按二进制形式把所有的数字向左移动对应的位数，高位移出（舍弃），低位的空位补零。
>
> #### 右位移运算符
>
> 右位移运算符为 **>>**，其运算规则是：按二进制形式把所有的数字向右移动对应的位数，低位移出（舍弃），高位的空位补零。
> 8 >> 2 = 2

```typescript
function ipToInt(ip) {
	const ipStrArr = ip.split('.')
  return (
  	((parseInt(ipStrArr[0]) << 24) |
     (parseInt(ipStrArr[1]) << 16) |
     (parseInt(ipStrArr[2]) << 8) |
     (parseInt(ipStrArr[3]) >>> 0)
  )
}
```
