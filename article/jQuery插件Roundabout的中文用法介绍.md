# jQuery插件Roundabout的中文用法介绍

> 时间:2016-01-08     作者:Fred LeBlanc       翻译:小天同学

### 一. 移动元素
Roundabout是一个jQuery插件，它可以把静态结构的HTML元素变成一个可以高度可定制的交互圆形区域，然后静态元素会实现360循环播放的效果。 （现在，不仅可以是圆形还可以是很多种形状这样的效果！）

经过简单的配置之后，Roundabout就可以作用在有序列表ol和无需列表ul上；而且经过一些快速配置之后，还能使嵌套元素产生效果。

Roundabout是在BSD许可下发布的。如果你不知道BSD什么意思的话，你可以在源代码中找到全部许可证。赶快行动吧！

3月13日更新，对于Roundabout V1.1版本更新的介绍：

1. 现在所有的元素值都存储在jQuery的数据方法中，并不再被添加为属性。
2. 增加了一个新的属性```reflect```，这个属性可让元素在相反方向上移动。
3. 修复了一个由于`roundabout_animateToNextChild` 和`roundabout_animateToPreviousChild`导致的在某些时候不能移动的问题。

我已经尽我最大的努力检查本版本中的错误，但如果你发现了错误，请尽快的告诉吴！我会修复更新。


### 二. 要求和附加组件
Roundabout需要依赖jQuery 1.2.3+，1.3.x或1.4.x以上的版本。并且搭配以下的插件效果会更好：
* [Roundabout Shapes](http://fredhq.com/) by Fred LeBlanc
* [jQuery Easing](http://gsgd.co.uk/sandbox/jquery/easing/)by George McGinley Smith


### 三. 令人兴奋的演示
> [原文链接](http://demo.niutuku.com/js/20/3/)都是基于web的用法，且大多demo都已失效。

这里给出另外的两个演示地址：
* <http://view.jqueryfuns.com/%E9%A2%84%E8%A7%88-/2014/9/19/a832f51287a546e8b20ff3bf53b435ed/>
* <http://demo.sc.chinaz.com//Files/DownLoad/webjs1/201311/jiaoben1663/>


### 四. 如何快速使用Roundabout
这三个步骤将指导你把一个无聊的无序列表变成一个令人兴奋的回旋特效！一旦本教程完成后，你就可以自定义你自己的回旋特效了。

本指南假设在你的html文件的某处有一个像下面这样的无序列表：
```[HTML]
<ul id="myRoundabout">
   <li>Box 1</li>
   <li>Box 2</li>
   <li>Box 3</li>
   <li>Box 4</li>
</ul>
```

##### 第一步：引入所需的JS文件
使用回旋特效之前，我们必须先引入我们的Roundabout脚本文件，为了不影响我们的页面性能，我们可以把js文件放在我们html文件的`</body>`之前。像下面这样：
```[HTML]
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jquery.roundabout-1.0.min.js"></script>
```

##### 第二步：设置CSS
由于无序列表在大多数浏览器下默认会有样式的缩进，所以我们需要自定义CSS来改变无序列表的样式，防止在我们使用回旋插件时没有得到理想的效果，下面的CSS示例可以帮助我们建立一个标准的Roundabout：
```[CSS]
<style type="text/css">
   /* <![CDATA[ */
   .roundabout-holder { padding: 0; height: 5em; }
   .roundabout-moveable-item { 
      height: 4em; 
      width: 4em; 
      cursor: pointer;
      background-color: #ffc;
      border: 1px solid #999;
   }
   .roundabout-in-focus { cursor: auto; }
   /* ]]> */
</style>
```

##### 第三步：引入Roundabout 的JS文件
可以单独写在一个脚本文件中，也可以放在使用Roundabout的页面中，这里我们放在页面的正确位置上，如下：
```[javascript]
<script type="text/javascript">
   // <![CDATA[
   $(document).ready(function() {
      $('ul#myRoundabout').roundabout();
   });
   // ]]>
</script>
```
此时会发生两件事情:
第一：我们用文档的加载状态去触发Roundabout的加载。这是很重要的，因为我们不能让Roundabout寻找还没有完全加载的DOM的元素。
第二：我们使用jquery选择器选择我们想要实现回旋效果的所有元素，然后把.roundabout()方法链接到元素上。

保存你的文件，在浏览器打开文件，只要你的文件和素材地址没有出现错误，你会看到你的无序列表奇迹的动了起来,这个效果就实现了。





>[原文链接](http://demo.niutuku.com/js/20/3/)