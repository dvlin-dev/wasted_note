---
title: Array.prototype.map.call(list,Function)和list.map(Function)的区别
date: 2021-05-04 18:25:39.0
updated: 2021-11-29 18:26:00.743
url: /archives/arrayprototypemapcalllistfunction-he-listmapfunction-de-qu-bie
categories: 
tags: JavaScript
---

在准备讲课内容的时候在MDN上看到了这个
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210504094402397.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTgzNDQ0Ng==,size_16,color_FFFFFF,t_70)
开始想着Array.prototype.map.call写这么长是不是就是为了逼格啊。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210504094518593.png)
就连他的标题这么长，我都以为是在装杯。结果是俺草率了。标题这么写的意思是map是Array原型上的一个方法

```javascript
var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});
```
这里逐步分析一哈， Array.prototype.map是调用了Array原型的方法，call方法说明elems是借用了map这个方法。
稍微那么一思考，其实就是document.querySelectorAll获取的是个NodeList，他本身不能调用Array方法，他的原型里面又没有map这个方法，所有要调用array原型的map方法。


> 思考：其实这个map方法看了好几遍了，刚开始看到这个**Array.prototype.map.call**这么老长就直接略过了，还有就是学习的时候还是多差文档， 博客只能在文档上查不到的时候再去看。
