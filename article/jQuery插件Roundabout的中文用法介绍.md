# jQuery插件Roundabout的中文用法介绍

> 时间:2016-01-08           作者:Fred LeBlanc           翻译:小天同学

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
   .roundabout-holder { padding: 0; height: 5em; }
   .roundabout-moveable-item { 
      height: 4em; 
      width: 4em; 
      cursor: pointer;
      background-color: #ffc;
      border: 1px solid #999;
   }
   .roundabout-in-focus { cursor: auto; }
</style>
```

##### 第三步：引入Roundabout 的JS文件
可以单独写在一个脚本文件中，也可以放在使用Roundabout的页面中，这里我们放在页面的正确位置上，如下：
```[javascript]
<script type="text/javascript">
   $(document).ready(function() {
      $('ul#myRoundabout').roundabout();
   });
</script>
```
此时会发生两件事情:

* 第一：我们用文档的加载状态去触发Roundabout的加载。这是很重要的，因为我们不能让Roundabout寻找还没有完全加载的DOM的元素。
* 第二：我们使用jquery选择器选择我们想要实现回旋效果的所有元素，然后把`.roundabout()`方法链接到元素上。

保存你的文件，在浏览器打开文件，只要你的文件和素材地址没有出现错误，你会看到你的无序列表奇迹的动了起来,这个效果就实现了。


### 五. Roundabout CSS 的简介
有三个class将被用在Roundabout的元素上。为了实现向下兼容的解决方案，这是最好的方式来使用这些class，而不是把样式写在真实的html元素上。否则，你的那些不懂javascript的用户将看不到这个效果的样式。

#####`.roundabout-holder`
这个class总是被添加在运动中的元素，以保证运动中的元素的样式。默认场景下，这个类会被用在`ul`或者`ol`元素上——无论哪一个被jQuery选择器选中的元素都要和`.roundabout()`加上关联。

#####`.roundabout-moveable-item`
这个class总是被添加在你的Roundabout效果内的所有元素上。默认场景下，将应用与所有被`roundabout-holder`class应用的`ul`或者`ol`的子元素`li`上。

#####`.roundabout-in-focus`
这个class会临时的添加在含有`roundabout-moveable-item`class的元素被选中的时候。而且这个元素仅仅是被选中的，当他的位置匹配`focusBearing`以及这个元素在Roundabout内没有动画运行的时候。


### 六.自定义你的Roundabout 效果
现在，你已经知道了基础知识，那么就很容易自定义您的Roundabout，以更好地适应您的网站。虽然每一个例子都在下面列出一个或两个选项，但你可以把很多效果结合在一个大的定制选项中。

#####无论哪里开始
默认情况下，你的Roundabout效果将在第一个可移动的焦点元素上开始，但是这并不是必须的。通过改变设置`startingChild`配置参数你可以从任何一个可移动的焦点元素上开始。

举个例子，继续我们上面的3个步骤的例子，如果我们想让Roundabout从第三个包含`“Box3”`的`li`开始，我们可以这样配置：
```[javascript]
<script type="text/javascript">
   $(document).ready(function() {
      $('ul').roundabout({
         startingChild: 2 // the third box, so: 0, 1, *2*
      });
   });
</script>
```

#####速度的控制（加速、减速）
如果你认为你的动画效果不是你认为的最佳速度，你可以使用`duration`属性容易的增加速度或者降低速度。配置如下：
```
<script type="text/javascript">
   $(document).ready(function() {
      $('div.moveMe').roundabout({
         duration: 1200 // in milliseconds, of course
      });
   });
</script>
```

#####不透明度和比例大小
为了让你的效果更加的理想，你可以设置`minimum`和`maximum`的值来控制你的可移动元素的不透明度和比例大小。配置示例如下：
```
<script type="text/javascript">
   $(document).ready(function() {
      $('ul').roundabout({
         minOpacity: 0.0, // invisible!
         minScale: 0.1 // tiny!
      });
   });
</script>
```
移动元素焦点轴的完全的另一面的元素，不论你设置的`minscale`、`minOpacity`和`minZ`的值为多少，都会分别的起到相应的作用。试着去调整每一个默认设置的值，直到你满意。

#####触发Roundabout动画
有两个可设置的选项，让你轻松触发动画到下一个元素和返回前一个元素。用`btnNext`参数去关联任何的元素的点击事件，使得触发没有在焦点状态的可移动元素执行下一个。用`btnPrev`这个参数可以做同样的事情在另外相反的方向上。

继续上面的3步例子，在无序列表中增加两个链接，如下：
```
<a href="#" id="next">Next!</a>
<a href="#" id="previous">Previous!</a>
```
现在设置`btnNext`和`btnPrev`两个参数去关联你的链接到Roundabout效果中。你可以选择任何你喜欢的选择器名字，因为这个是直接传值到在jQuery内部的，如下：
```
<script type="text/javascript">
   $(document).ready(function() {
      $('ul').roundabout({
         btnNext: '#next',
         btnPrev: '#previous'
      });
   });
</script>
```
这很简单，现在当你点击Next或者Previous中的任何一个链接，你的Roundabout就会对应产生不一样的效果了。

#####不让用户点击
默认情况下，点击不是焦点状态下的元素时，会使得它出发动画运动到焦点状态展示，但是这个可以关闭，如果你不想这样点击的话，如下：
```
<script type="text/javascript">
   $(document).ready(function() {
      $('ul').roundabout({
         clickToFocus: false
      });
   });
</script>
```
当参数的值为`true`时，将会产生点击效果，当为`false`时，就可以关闭此效果。

#####“焦点”是相对的
尽管默认值设置为展示最接近你的元素，但是你仍然可以设置参数`focusbearing`为任何角度。试着配置这个参数，看下这个点在哪。配置如下：
```
<script type="text/javascript">
   $(document).ready(function() {
      $('ul').roundabout({
         focusBearing: 90.0
      });
   });
</script>
```

#####不只是适用于列表
使用`ul`和`ol`是默认设置，你也可以使用此效果在任何结构的`html`结构上。只需要这样做，用jQuery选择器选择任何你希望的元素关联`.roundabout();`，（比如一个带有`class=”moveMe”`的div）。告诉Roundabout那一个子集合是你希望移动的，用`childSelector`参数在jQuery中直接配置一段String类型的选择器。这个选择可以选择所有你希望移动的元素。如下：
```
<script type="text/javascript">
   $(document).ready(function() {
      $('div.moveMe').roundabout({
         childSelector: 'div.moveable'
      });
   });
</script>
```
这个例子将在任何`<div class="moveMe"></div>`和`<div class="moveable"></div>`中的元素运动起来。`childSelector`将被传值到jQuery里面去，所以任何合法的选择器都是可以的。

#####使用jQuery Easing插件
不要误解我的意思，jQuery的easing技术是很好的，但是要想帮你达到更大的威力的话，你要看看`jQuery Easing`插件。

这个实施是很简单的。

首先，要在页面中引入插件文件，如下：
```
<script type="text/javascript" src="jquery.easing.1.3.js"></script>
```
然后，在你的Roundabout中配置插件的参数，如下：
```
<script type="text/javascript">
   $(document).ready(function() {
      $('ul').roundabout({
         easing: 'easeInOutExpo'
      });
   });
</script>
```

#####Roundabout的形状
Roundabout现在能做的不仅仅是转盘了，`Roundabout Shapes`插件提供更多的运动路径。这个插件的使用也是很简单的。


### 七.Roundabout的高级进阶
此部分大都不常用到，主要是一些高级自定义的配置和调试配置，所以感兴趣的同学可以查看原文链接了解。


### 八.参数说明
参考链接原文

>[原文链接](http://demo.niutuku.com/js/20/3/)




>######源代码下载地址：
>
>V2.4.2 下载地址：[下载](http://view.jqueryfuns.com/%E9%A2%84%E8%A7%88-/2014/9/19/a832f51287a546e8b20ff3bf53b435ed/js/jquery.roundabout.js)
>