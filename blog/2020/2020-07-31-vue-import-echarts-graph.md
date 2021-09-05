---
slug: vue-import-echarts-graph
title: Vue引进Echarts的关系图
authors: zeffon
tags: [vue]
date: 2020-07-31
---

记录 Echarts 关系图 les-miserables 导入应用到 Vue 项目遇到一系列的问题。

<!--truncate-->

## 前文

[Echarts 官方](https://echarts.apache.org/examples/zh/index.html)提供了代码案列，我们只需选择下载相关代码即可在本地运行，展示出想要的图表页面，同时将其集成进 Vue 项目也是很简单的。只需要将`echarts依赖`导入 Vue 项目，我们导入相关 echarts 组件，根据官方提供的代码案例即可完整运行图表了。
但是有些图表的案例代码是不可以一下载就能完整运行的，比如关系图的`les-miserables`。主要原因是该关系图需要`les-miserables.gexf`文件，而很多问题都是因为这个文件引起的。

## 正文

### 下载代码案例

在 Echarts 官方下载相关的关系图 graph 的[les-miserables 代码案例](https://echarts.apache.org/examples/zh/editor.html?c=graph)

```html
<!DOCTYPE html>
<html style="height: 100%">
  <head>
    <meta charset="utf-8" />
  </head>
  <body style="height: 100%; margin: 0">
    <div id="container" style="height: 100%"></div>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/echarts-gl/dist/echarts-gl.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/echarts-stat/dist/ecStat.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/echarts/dist/extension/dataTool.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/echarts/map/js/china.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/echarts/map/js/world.js"
    ></script>
    <script
      type="text/javascript"
      src="https://api.map.baidu.com/api?v=2.0&ak=xfhhaTThl11qYVrqLZii6w8qE5ggnhrY&__ec_v__=20190126"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/echarts/dist/extension/bmap.min.js"
    ></script>
    <script type="text/javascript">
      var dom = document.getElementById("container");
      var myChart = echarts.init(dom);
      var app = {};
      option = null;
      myChart.showLoading();
      $.get(
        ROOT_PATH + "/data/asset/data/les-miserables.gexf",
        function (xml) {
          myChart.hideLoading();

          var graph = echarts.dataTool.gexf.parse(xml);
          var categories = [];
          for (var i = 0; i < 9; i++) {
            categories[i] = {
              name: "类目" + i,
            };
          }
          graph.nodes.forEach(function (node) {
            node.itemStyle = null;
            node.value = node.symbolSize;
            node.symbolSize /= 1.5;
            node.label = {
              show: node.symbolSize > 30,
            };
            node.category = node.attributes.modularity_class;
          });
          option = {
            title: {
              text: "Les Miserables",
              subtext: "Default layout",
              top: "bottom",
              left: "right",
            },
            tooltip: {},
            legend: [
              {
                // selectedMode: 'single',
                data: categories.map(function (a) {
                  return a.name;
                }),
              },
            ],
            animationDuration: 1500,
            animationEasingUpdate: "quinticInOut",
            series: [
              {
                name: "Les Miserables",
                type: "graph",
                layout: "none",
                data: graph.nodes,
                links: graph.links,
                categories: categories,
                roam: true,
                focusNodeAdjacency: true,
                itemStyle: {
                  borderColor: "#fff",
                  borderWidth: 1,
                  shadowBlur: 10,
                  shadowColor: "rgba(0, 0, 0, 0.3)",
                },
                label: {
                  position: "right",
                  formatter: "{b}",
                },
                lineStyle: {
                  color: "source",
                  curveness: 0.3,
                },
                emphasis: {
                  lineStyle: {
                    width: 10,
                  },
                },
              },
            ],
          };

          myChart.setOption(option);
        },
        "xml"
      );

      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
    </script>
  </body>
</html>
```

### HTML 本地运行

很显然，官方的代码案例是无法运行的。想要运行该关系图，主要需要三个关键的要素：
1.echarts 依赖 2.jquery 3.[dataTool.js](https://github.com/apache/incubator-echarts/blob/master/dist/extension/dataTool.min.js) 4.[les-miserables.gexf](https://echarts.apache.org/examples/data/asset/data/les-miserables.gexf)
**这三个缺一不可**

#### 修改工具包

而在官方的案例中有引进了 echarts，没有引进 jquery，les-miserables.gexf 文件没有提供（路径要修改的，并且要放在 static 文件目录），而且没有 dataTool.js 来解析 gexf 文件。还提供一些百度地图 API...(可以将其删掉或是注释掉)
所以综上所述，我将上面的问题都考虑到后

```html
<!-- 替换之前官方提供的 -->
<script src="https://cdn.bootcss.com/echarts/4.1.0.rc2/echarts.min.js"></script>
<script src="./staic/jquery-2.1.4/jquery.min.js"></script>
<script src="./staic/dataTool.js"></script>

<script type="text/javascript">
  $.get('./static/les-miserables.gexf', function(xml) //后续代码就省略
</script>
```

#### 出现跨域问题

发现 HTML 压根运行不起来，原因竟然是出现`跨域问题`。
这个可能是我们采用非正规的文件项目的问题，只是创建一个 static 目录，并不是一个真正的`项目静态目录`
索性我将`les-miserables.gexf`单独放置在一个服务器中，结果竟然因为`请求域的问题`，需要指定相关的请求域。
于是在标签内加上

```html
<meta http-equiv="Access-Control-Allow-Origin" content="*" />
```

结果还是无法解决该问题，个人觉得最主要的就是`les-miserables.gexf`无法正确读取的原因：

- 刚开始我是随便放在一个命名为 static 的目录下，可这个并不是真正项目的静态目录，所以无法访问
- 把它放置在其它服务器进行访问时，出现了跨域问题

### 引进 Vue 项目

由于我是想要把关系图集成进 Vue 项目的，索性不再搞 html 文件本地运行了，直接在 Vue 项目里运行。

我将`les-miserables.gexf`放在`static/assets/data`目录
并且引进了相关的工具包

```
  import $ from 'jquery'
  import echarts from 'echarts'
  require('echarts/extension/dataTool')
```

**具体代码如下：**

```vue
<template>
  <div>
    <h1 class="text-center">Echart Demo</h1>
    <div id="charts-graph" style="width: 1080px; height: 600px"></div>
  </div>
</template>

<script>
// 这三个是要引进的依赖工具包
import $ from "jquery";
import echarts from "echarts";
require("echarts/extension/dataTool");

export default {
  name: "echartsDemo",

  data() {
    return {};
  },

  created() {},

  mounted() {
    this.drawCharts();
  },

  methods: {
    drawCharts() {
      this.drawGraph();
    },

    drawGraph() {
      let chartsGraph = echarts.init(document.getElementById("charts-graph"));
      chartsGraph.showLoading();
      console.log("已正确init，获取echarts对象");

      $.get(
        "static/assets/data/les-miserables.gexf",
        function (xml) {
          //一定要把文件放在static下
          console.log("已正确的解析gexf文件");
          chartsGraph.hideLoading();

          let graph = echarts.dataTool.gexf.parse(xml);
          let categories = [];
          for (let i = 0; i < 9; i++) {
            categories[i] = {
              name: "类目" + i,
            };
          }
          graph.nodes.forEach(function (node) {
            node.itemStyle = null;
            node.value = node.symbolSize;
            node.symbolSize /= 1.5;
            node.label = {
              normal: {
                show: node.symbolSize > 30,
              },
            };
            node.category = node.attributes.modularity_class;
          });
          let optionGraph = {
            title: {
              text: "Les Miserables",
              subtext: "Default layout",
              top: "bottom",
              left: "right",
            },
            tooltip: {},
            legend: [
              {
                // selectedMode: 'single',
                data: categories.map(function (a) {
                  return a.name;
                }),
              },
            ],
            animationDuration: 3000,
            animationEasingUpdate: "quinticInOut",
            series: [
              {
                name: "Les Miserables",
                type: "graph",
                layout: "none",
                data: graph.nodes,
                links: graph.links,
                categories: categories,
                roam: true,
                focusNodeAdjacency: true,
                itemStyle: {
                  normal: {
                    borderColor: "#fff",
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: "rgba(0, 0, 0, 0.3)",
                  },
                },
                label: {
                  position: "right",
                  formatter: "{b}",
                },
                lineStyle: {
                  color: "source",
                  curveness: 0.3,
                },
                emphasis: {
                  lineStyle: {
                    width: 10,
                  },
                },
              },
            ],
          };

          chartsGraph.setOption(optionGraph);
        },
        "xml"
      );
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
```

> 这样 echarts 的`les-miserables`关系图在 vue 项目中完整的展示出来了。
> 不过，我想把 echart、jquery、dataTool 放在 main.js 全局中，发现无法正确的运行，可能 js 无法正确地加载`require('echarts/extension/dataTool')`
> 然后我尝试一下将 echarts 和 jquery 放在全局，dataTool 单独放在项目文件中，发项还是不可。`估计初始化时，并没有将dataTool引进echarts中`。所以我只好将它们放在同一个项目文件中了。
