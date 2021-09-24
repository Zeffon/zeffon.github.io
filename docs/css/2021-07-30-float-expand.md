---
slug: float-expand
title: 浮动的细节
authors: zeffon
tags: [css]
date: 2021-07-30 10:00
---

浮动 **float **元素作为可视化模型中主要的三大主要的排列方式之一。更多的基础知识在 [CSS 基础 2](https://www.yuque.com/zeffon/blog/css-basic2) 中已有相应介绍了。本篇是记录浮动 **float **元素的一些细节规则和扩展应用。
​

<!--truncate-->

## 浮动盒子的位置

对于浮动盒子的位置，我们都知道 **左浮动**的盒子靠上靠左排列、**右浮动**的盒子靠上靠右排列。其实浮动元素在位置这里还有其它的排列要求。
​

**盒子位置**

1. 左浮动的盒子向上向左排列
1. 右浮动的盒子向上向右排列
1. 浮动盒子的顶边不得高于上一个盒子的顶边
1. 若剩余空间无法放下浮动的盒子，则该盒子向下移动，直到具备足够的空间能容纳盒子，然后再向左或向右移动

可以借助一张图更加清晰的了解浮动 **float** 元素的位置排列规则：
以下盒子都是浮动盒子，**红色**的表示**左浮动**，**蓝色**的表示**右浮动**。数字的顺序按照元素的先后顺序排列。
![image.png](./img/07-30-01.png)

## 两栏布局

两栏布局是常见，便是采用了浮动侧栏，主栏是常规流盒子实现的。两栏布局中，一般只会将侧栏进行定宽。可以利用常规流盒子无视浮动盒子的特点，先排列浮动的侧栏，再排列常规流主栏。

![image.png](./img/07-30-02.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>两栏布局</title>
    <style>
      .clearfix::after {
        content: "";
        display: block;
        clear: both;
      }
      .container {
        background: lightblue;
        width: 90%;
        margin: 0 auto;
      }
      .aside {
        float: right;
        background: #008c8c;
        color: #fff;
        width: 300px;
        margin-left: 10px;
      }
      .main {
        overflow: hidden;
        background: gray;
        /* width: 600px; */
      }
    </style>
  </head>
  <body>
    <div class="container clearfix">
      <aside class="aside">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, omnis
        impedit. Omnis, ipsum iste quidem necessitatibus vero perspiciatis
        eligendi, sunt expedita, soluta facilis ea accusamus. Quas ea doloribus
        illum qui atque assumenda ipsum odit ullam sunt tempora rerum blanditiis
        quidem, debitis porro similique aliquam magni? Dolores, neque numquam,
        alias qui iusto aliquid, repudiandae eveniet debitis adipisci
        repellendus asperiores eos. Nesciunt, modi? Vel, quasi ducimus amet
        facilis quisquam perspiciatis iusto repudiandae eaque similique animi.
        Doloribus excepturi aperiam ut iure accusamus sit quis a, recusandae,
        rerum corrupti eveniet debitis exercitationem pariatur porro vel sunt
        rem similique molestiae! Adipisci velit neque debitis architecto, eius
        aspernatur? Dolorem eos dolore culpa nisi modi exercitationem voluptatem
        sapiente veniam officiis quasi deleniti eveniet obcaecati nihil
        laudantium quis qui rem delectus numquam magnam fuga, sed ullam facilis
        et. Maxime laborum dignissimos, exercitationem earum praesentium nisi
        hic. Perspiciatis vero quis accusantium cum nemo possimus, laborum earum
        harum est non soluta ut nisi? Quam omnis asperiores reiciendis dolore
        sunt accusamus voluptates voluptatibus voluptas, unde optio odio enim
        dolores tempore recusandae laudantium id laborum nulla! Commodi ducimus
        at error quidem sint eius soluta eveniet vitae quae, velit iure ipsum
        dolores et similique impedit molestiae rerum tempora molestias aperiam
        explicabo. Odit, sunt?
      </aside>
      <div class="main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aut
        dicta omnis qui vitae! Aspernatur cum soluta expedita? Voluptatum
        eveniet earum doloremque officia eaque cum hic rerum dignissimos illo
        reprehenderit. Voluptatem, quam animi esse tempore totam repellat
        dignissimos voluptates rerum error, quis eius eos id odio quasi vel fuga
        nobis optio eum natus beatae! Sit at obcaecati totam eos labore, qui
        placeat ea maxime, soluta unde accusantium quia, explicabo est! Possimus
        est eveniet explicabo, a dolores beatae odit pariatur animi ipsum dolor
        dolorum quo accusantium esse iusto excepturi dolore? Quae inventore
        neque provident ea dicta veritatis, enim omnis alias doloribus
        architecto ipsum non, tenetur laudantium, minima quaerat molestias
        doloremque! Unde perspiciatis similique fugiat dolorum ullam illum vel
        eaque nemo consectetur quisquam magnam, ea laudantium, impedit error
        provident consequuntur dignissimos mollitia debitis amet sunt
        blanditiis. Commodi possimus assumenda, accusantium iste in magni
        voluptatibus ipsum debitis consequatur, numquam illum quae accusamus
        ducimus nulla harum unde voluptates et deserunt? Nulla autem voluptatem
        beatae quae deserunt, nobis modi corporis tempora inventore culpa
        perferendis reiciendis facilis excepturi et laudantium omnis doloremque
        harum facere molestiae nisi libero enim quam? Impedit laudantium aut
        obcaecati amet rerum provident dolorem officia, labore quidem quisquam
        quod odit, repellendus dolores architecto!
      </div>
    </div>
  </body>
</html>
```

## 三栏布局

三栏布局同样是利用左右栏定宽浮动，中间宽度自适应的常规流实现。

![image.png](./img/07-30-03.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>三栏布局</title>
    <style>
      .clearfix::after {
        content: "";
        display: block;
        clear: both;
      }
      .container {
        padding: 30px;
        border: 3px solid;
      }
      .left {
        float: left;
        width: 300px;
        background: lightblue;
        margin-right: 10px;
      }
      .right {
        float: right;
        width: 300px;
        background: lightblue;
        margin-left: 10px;
      }
      .main {
        overflow: hidden;
        background: gray;
        border: 2px solid;
      }
    </style>
  </head>
  <body>
    <div class="container clearfix">
      <aside class="left">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, omnis
        impedit. Omnis, ipsum iste quidem necessitatibus vero perspiciatis
        eligendi, sunt expedita, soluta facilis ea accusamus. Quas ea doloribus
        illum qui atque assumenda ipsum odit ullam sunt tempora rerum blanditiis
        quidem, debitis porro similique aliquam magni? Dolores, neque numquam,
        alias qui iusto aliquid, repudiandae eveniet debitis adipisci
        repellendus asperiores eos. Nesciunt, modi? Vel, quasi ducimus amet
        facilis quisquam perspiciatis iusto repudiandae eaque similique animi.
        Doloribus excepturi aperiam ut iure accusamus sit quis a, recusandae,
        rerum corrupti eveniet debitis exercitationem pariatur porro vel sunt
        rem similique molestiae! Adipisci velit neque debitis architecto, eius
        aspernatur? Dolorem eos dolore culpa nisi modi exercitationem voluptatem
        sapiente veniam officiis quasi deleniti eveniet obcaecati nihil
        laudantium quis qui rem delectus numquam magnam fuga, sed ullam facilis
        et. Maxime laborum dignissimos, exercitationem earum praesentium nisi
        hic. Perspiciatis vero quis accusantium cum nemo possimus, laborum earum
        harum est non soluta ut nisi? Quam omnis asperiores reiciendis dolore
        sunt accusamus voluptates voluptatibus voluptas, unde optio odio enim
        dolores tempore recusandae laudantium id laborum nulla! Commodi ducimus
        at error quidem sint eius soluta eveniet vitae quae, velit iure ipsum
        dolores et similique impedit molestiae rerum tempora molestias aperiam
        explicabo. Odit, sunt?
      </aside>

      <aside class="right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fugiat
        animi ullam eveniet commodi unde iste quis error quaerat eligendi qui
        expedita tempora, aut, voluptas alias temporibus, suscipit placeat
        adipisci? Aliquam quod a vitae illum assumenda dicta? Sint, error ut,
        nesciunt dolores quidem sunt officiis consequatur velit fugiat qui
        numquam quos? Consequatur adipisci nam, nihil voluptate, laudantium
        consectetur autem veritatis eaque veniam accusamus quae sequi error
        animi expedita. Delectus totam iusto dignissimos, architecto possimus
        qui temporibus nesciunt quisquam? Similique mollitia eius, veniam
        numquam qui, voluptas sapiente repellendus ab provident commodi quod
        molestiae reiciendis illo id asperiores omnis! Quae eaque provident
        voluptatum sapiente, veniam molestiae corporis asperiores, recusandae,
        consectetur animi consequuntur ipsum? Totam placeat aperiam laborum
        voluptas deleniti ullam asperiores a aliquid ex qui dolorem quod, error
        aliquam maiores nostrum voluptatum odio hic modi ipsam minus distinctio
        explicabo officia? Facere qui perspiciatis ratione iste debitis,
        distinctio consequatur velit consectetur quam sit veniam quos cum optio
        unde nesciunt amet maiores exercitationem maxime quae neque repudiandae
        blanditiis ex numquam nulla. Accusantium, obcaecati asperiores et
        architecto illum deleniti blanditiis excepturi suscipit odio pariatur
        modi nisi, aut consectetur ex animi rerum quas cupiditate nam? Quo nobis
        tenetur quia necessitatibus aliquid numquam vitae velit, unde illum.
      </aside>

      <div class="main">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nostrum,
        quibusdam sunt veritatis animi ratione voluptatem aperiam quidem magni
        odio, architecto accusamus mollitia blanditiis molestiae iusto facere
        necessitatibus culpa repellendus natus fugiat at nam perspiciatis
        explicabo quaerat! Quos quod sed officiis deserunt repellat? Cumque,
        voluptates. Laboriosam at non magnam quidem placeat. Odio reiciendis
        voluptates dicta ex totam, eligendi praesentium sit quibusdam nesciunt
        architecto nihil animi assumenda aut qui ullam veniam facere impedit
        ipsam aspernatur! Quidem accusantium ipsam tempora recusandae voluptate
        in modi minus repudiandae dignissimos. Dolor, nulla voluptate inventore
        explicabo quas provident quasi corrupti nostrum culpa doloremque facere
        vero cumque perferendis similique vel earum, excepturi quisquam sit esse
        ducimus nisi. Eaque iusto ex minima ut! Non dicta eum eligendi quod
        consequatur odit, quibusdam facere animi et praesentium? Porro optio
        sunt ut eveniet similique, accusamus quibusdam eaque molestias
        reprehenderit repellat impedit voluptate illum fuga amet asperiores
        maxime! Corporis consequatur magnam architecto, voluptate saepe
        perferendis alias quos! Natus, officia praesentium assumenda ipsa nisi
        dolore non. Obcaecati non sunt pariatur rerum a odio assumenda totam
        ipsam aspernatur at laboriosam nisi amet ipsa deserunt atque quia
        ducimus qui nesciunt inventore labore quos nostrum enim, asperiores
        praesentium. Deserunt, modi maxime dolor sed, possimus earum, facilis
        est dignissimos consectetur sit enim? Possimus in corporis rem aliquid
        doloribus explicabo excepturi itaque! Laboriosam minus facilis, nisi ab
        quas voluptate, cum excepturi eligendi accusantium expedita debitis
        voluptatum totam commodi unde neque praesentium aut fugit,
        necessitatibus voluptatem eos ducimus. Vitae commodi, consequatur eius
        aspernatur placeat saepe nisi fugit nam dolorum recusandae tempora.
        Aliquid nisi doloribus odio pariatur, perspiciatis numquam repellat?
        Iste, libero! Minus, eos repellendus. Distinctio fugit totam repellat,
        quia temporibus necessitatibus earum ipsa perferendis architecto omnis
        maxime quasi alias. Illum accusamus aspernatur unde, et, ratione odio
        dicta animi illo nihil similique accusantium cupiditate fugit quas
        maxime aliquam reprehenderit quaerat dignissimos. Dicta, in natus
        inventore quasi consequatur minus deleniti optio repudiandae beatae
        cupiditate labore? Minus ab in quaerat tempora, enim maiores dolore unde
        excepturi earum dolores minima optio soluta corrupti impedit architecto
        nulla hic consectetur officia ratione accusantium inventore voluptates
        odit aperiam! Consequuntur, quod vero libero maiores porro quidem
        tempora molestias facilis neque. Ullam voluptatum, porro, facilis
        necessitatibus nemo blanditiis, numquam praesentium illum totam eius
        deserunt. Asperiores quod dolorum ratione eos ducimus enim, aliquam
        illum fuga id maiores repudiandae quam pariatur nostrum sapiente
        quisquam obcaecati saepe, itaque quia quas placeat reprehenderit. In
        quod, perferendis repudiandae magnam eum incidunt facere dolorum
        sapiente autem quam temporibus modi nisi tempore consequuntur at
        necessitatibus accusantium doloremque tempora. Ea ipsum veniam velit et
        amet error, minima natus facilis voluptate dignissimos ut magnam, iste
        debitis alias expedita ipsa illum accusantium non dolorem similique.
        Dicta labore velit magni magnam omnis repellendus error fugiat
        distinctio at neque, quia iure reprehenderit dolores voluptatum, illum,
        porro ipsam nobis. Cum dolores corporis ad blanditiis quibusdam vero
        delectus nobis eius obcaecati? Repellendus nesciunt, reprehenderit porro
        amet facere dicta, ipsam rerum non nisi expedita vitae similique quo,
        nulla minima quaerat repudiandae illo ex dolore? Facilis nihil,
        accusantium consequuntur eligendi deserunt, delectus eveniet nobis
        necessitatibus dolorum veniam magnam iure quis possimus rerum hic
        veritatis reprehenderit ipsum? Labore cupiditate architecto amet?
        Corporis nemo atque animi deserunt aliquam. Officiis corrupti possimus
        quos placeat beatae. Eum amet officia sit soluta nulla dolores facere,
        sequi aliquam ratione minima adipisci ad laborum nostrum, qui ea
        repudiandae facilis nam magnam? Sapiente animi nulla voluptatibus esse
        error mollitia non. Illo mollitia perferendis id ipsam voluptas ex
        voluptates aut ducimus, architecto illum eos similique iste officiis
        perspiciatis, optio minima sint saepe labore eveniet nobis pariatur!
        Eligendi, error? Rerum neque error eveniet quam architecto ipsam,
        voluptatem modi ullam corrupti totam quibusdam animi quod ad
        necessitatibus ea aperiam iste deserunt officiis fugit hic accusamus!
        Incidunt libero, ex mollitia sed omnis laudantium, enim recusandae ut
        quos iure porro perspiciatis ullam quod pariatur! Eum error facere
        fugiat laudantium voluptatibus, illum minima modi delectus libero sunt
        ad nihil voluptate reprehenderit corrupti perspiciatis, facilis
        necessitatibus inventore amet nulla dicta, soluta corporis possimus.
        Quos, accusamus totam. Quasi, culpa quos fugit quae corrupti suscipit
        fuga aliquam, ad nesciunt consequuntur atque nemo repudiandae ducimus ab
        voluptates? Odit consequuntur ad aut et ab nam in molestias repellat,
        dolorum mollitia itaque perspiciatis earum? Sapiente iusto rerum nam
        excepturi culpa. Architecto error asperiores praesentium ullam? At
        provident praesentium alias, minima, temporibus consequuntur harum quasi
        labore vero necessitatibus quam mollitia in eum deserunt accusamus
        maxime repellendus debitis illo officia repudiandae, delectus quia
        repellat. Minima praesentium tempore iusto voluptas amet dolor at
        corrupti ut esse, magnam obcaecati culpa mollitia optio quasi qui! Quo,
        vero deleniti. Quasi non quam reiciendis atque beatae nisi, distinctio
        voluptatum ex officia repellendus, quisquam in minus laboriosam,
        adipisci molestias odit iste. Aliquam est voluptatibus totam quo libero
        sed qui ad nihil alias vero voluptate ipsam sapiente amet aut
        praesentium, corporis temporibus magnam facilis nam unde odio, quasi
        pariatur? Hic quia sapiente obcaecati, fuga mollitia quas reiciendis
        reprehenderit earum itaque, aliquam officia! Voluptate commodi
        temporibus saepe omnis distinctio explicabo possimus nam recusandae eum,
        quaerat aut sapiente alias non. Optio cum asperiores nulla voluptatem
        saepe quia nihil assumenda nemo veniam animi. Est beatae optio veritatis
        voluptates, ratione esse reiciendis harum voluptas fugiat reprehenderit
        quisquam iste iure neque officia! Veniam et culpa reiciendis fuga,
        voluptate modi voluptatem voluptatum numquam harum error dolorum?
        Voluptatum obcaecati officia nesciunt ab laboriosam esse tempore
        veritatis tempora animi nobis eaque voluptatem sed aliquam deleniti
        praesentium rerum mollitia eius impedit, modi magnam. Mollitia, quos.
        Nisi commodi sed, nemo exercitationem aperiam placeat accusamus
        explicabo voluptatum nihil nesciunt neque alias consequuntur blanditiis
        optio dolores vero nobis excepturi a ratione molestias! Minima modi
        perspiciatis soluta voluptate id eaque odit quae exercitationem voluptas
        dolorem quisquam sunt ex nostrum, deleniti officia necessitatibus
        explicabo, laudantium nesciunt nobis? Hic dolor corrupti perspiciatis
        labore? Repudiandae quisquam laboriosam eos expedita quae vero sapiente
        odio reprehenderit, architecto dignissimos ducimus, id iste! Amet,
        itaque quia veniam incidunt corrupti ad consectetur ipsam possimus
        dolorem assumenda repudiandae autem et neque labore sed nisi, officiis
        corporis dicta blanditiis consequatur dolorum quos eligendi nihil!
        Quidem eos exercitationem aliquam perspiciatis inventore officiis
        sapiente obcaecati eligendi, laudantium officia!
      </div>
    </div>
  </body>
</html>
```
