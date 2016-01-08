# jQuery插件Roundabout的中文用法介绍

> 时间:2016-01-08     作者:Fred LeBlanc       翻译:小天同学

###一. 移动元素
Roundabout是一个jQuery插件，它可以把静态结构的HTML元素变成一个可以高度可定制的交互圆形区域，然后静态元素会实现360循环播放的效果。 （现在，不仅可以是圆形还可以是很多种形状这样的效果！）

经过简单的配置之后，Roundabout就可以作用在有序列表ol和无需列表ul上；而且经过一些快速配置之后，还能使嵌套元素产生效果。

Roundabout是在BSD许可下发布的。如果你不知道BSD什么意思的话，你可以在源代码中找到全部许可证。赶快行动吧！

3月13日更新，对于Roundabout V1.1版本更新的介绍：

1. 现在所有的元素值都存储在jQuery的数据方法中，并不再被添加为属性。
2. 增加了一个新的属性```reflect```，这个属性可让元素在相反方向上移动。
3. 修复了一个由于`roundabout_animateToNextChild` 和`roundabout_animateToPreviousChild`导致的在某些时候不能移动的问题。

我已经尽我最大的努力检查本版本中的错误，但如果你发现了错误，请尽快的告诉吴！我会修复更新。


###二. 要求和附加组件
Roundabout需要依赖jQuery 1.2.3+，1.3.x或1.4.x以上的版本。并且搭配以下的插件效果会更好：
* [Roundabout Shapes](http://fredhq.com/) by Fred LeBlanc
* [jQuery Easing](http://gsgd.co.uk/sandbox/jquery/easing/)by George McGinley Smith




[原文链接](http://demo.niutuku.com/js/20/3/)