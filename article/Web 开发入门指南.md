# Web 开发入门指南

> 时间：2015-05-11(翻译时间：2016-01-19)        作者：JESSICA LORD         翻译：小天同学    
>
>原文链接：[http://jlord.us/blog/getting-started.html](http://jlord.us/blog/getting-started.html)


有很多web开发必须的在线资源，可以学习如何开发网站或者制作web apps。我肯定有很多我还没有看见的好的资源，但是我一直希望能抽时间收集整理我发现的有用的或者很好的资源。希望我简短的介绍能对于刚入门的你有所帮助。


### 通用的：在任何事情上寻找答案
 ![照片](https://s3.amazonaws.com/f.cl.ly/items/2Z0l1o2l2X2o2y2q1H00/copypasta.png "文章配图1")
可能是你不是你第一个遇到这样的错误或者问题在某些时候，这是极好的！Google搜索是每一个开发者最好的朋友了。

我们也能从下面两个地方找到我们喜欢的答案：
* [Mozilla Developer Network](http://mdn.com/) Mozilla上面几乎有所有一切的文档记载
* [Stack Overflow](http://stackoverflow.com/) 和你有同样问题的人就是在这里得到帮助的


### 通用的：前端和后端
Web浏览器（像 [Chrome](http://chrome.com/) 和 [Safari](http://safari.com/)）显示从服务器端（基本上是机房里的电脑）接收到的信息。你写的代码运行在浏览器中的被称为前端或者客户端（用户访问你的网站）。服务器上的代码告诉服务器提供什么给浏览器的被称之为后端或者服务器端。每一部分将在下面介绍。


### 通用的：版本控制
 ![照片](https://s3.amazonaws.com/f.cl.ly/items/2g372u3o1N3c0m2H2T1G/versioncontrol.png "文章配图2")
当你学习web开始的时候，你很可能会接触到[GitHub.com](https://github.com)。在这个网站上用户可以使用Git（一个版本控制系统）存储/托管自己工作中的代码。这是一种可以让你随着时间的变化跟踪自己工作的系统，能让你更高效的工作，不会丢失你的工作或者犯错误的时候能快速的退回到之前的正确版本。[Github](https://github.com)采用Git一步提交到远程服务器上，可以简单方便的查看在线项目的变化（而不是在自己终端上）。学习则是另外一回事，他会有自己的专业术语，但是下面几点对你有所帮助：
* [Hello World Guide](https://guides.github.com/activities/hello-world/)Github上的一个指南向你介绍基本的Git概念，怎么使用网站做他们自己的项目。
* [Git-it](https://github.com/jlord/git-it)一个带有教程的教你怎么在命令行使用Git和Github的应用程序（终端）。而且，这也是作者的作品。


### 通用的：开源
开源项目是免费提供给任何人使用的。在Github上你会发现很多符合某种共同模式的开源项目，这些项目都包含：自述文件（README），许可和贡献文件。这些都是一些资源获取开放源码项目的地方。

* [Contributing to Open Source](https://guides.github.com/activities/contributing-to-open-source/)一个GitHub的指导开源项目和社区的基本教程。


### 通用的：命令行
 ![照片](https://s3.amazonaws.com/f.cl.ly/items/13121T1z1L190L3s1T3l/sammy.png "文章配图3")
使用你的计算机终端资源（或者bash）去完成任务（复制文件、移动文件、使用git……）

* [Command Line Tutorials & Basics](https://quickleft.com/blog/command-line-tutorials-summary-what-s-next/) by [@jessicard](http://www.twitter.com/jessiacard)

******

### 前端：HTML, CSS, JAVASCRIPT & 设计
浏览器理解HTML组织网页的元素，CSS使这些元素带有样式，Javascript使这些元素更加生动。我这里还包含了一些设计资源和设计灵感的内容。

##### HTML & CSS
* [Screencasts on design and front-end development](http://designbytyping.com/) by [@mrmrs_](http://twitter.com/mrmrs_)
* [HTML & CSS](http://learn.shayhowe.com/html-css/) by Shay Howe
* [Learn CSS Layout](http://learnlayout.com/) by [@boucoup](http://twitter.com/boucoup)
* [WTF, HTML and CSS](http://wtfhtmlcss.com/)by [@mdo](http://twitter.com/mdo)
* [WTF, forms](http://wtfforms.com/)by [@mdo](http://twitter.com/mdo)
* [Code Guide](http://codeguide.co/)by [@mdo](http://twitter.com/mdo)

##### Design & Assets
* [Unsplash](https://unsplash.com/) Free high-res stock photos by Unsplash
* [Designer News](http://jlord.us/blog/news.layervault.com) by Layervault
* [Typeography Cheatsheet](http://www.typewolf.com/cheatsheet) by Typewolf

##### Markdown
* [This is Markdown](http://thisismarkdown.com/) by @planetarycorp
* [GitHub Guide to Markdown](https://guides.github.com/features/mastering-markdown/)

##### JavaScript
* [JS for Cats](http://www.jsforcats.com/) by [@maxogden](http://twitter.com/%20maxogden)
* [Eloquent JavaScript](http://eloquentjavascript.net/) by [Marijn Haverbeke](https://twitter.com/marijnjh)
* [Learn JS Data](http://learnjsdata.com/) by [@boucoup](http://twitter.com/boucoup)


### 后端：Node.js
 ![照片](https://s3.amazonaws.com/f.cl.ly/items/0V410t1E3l3A081o3807/req-res.png "文章配图4")
服务器可以使用很多类型的语言，但是我知道NodeJS是一种服务器端语言，运行在服务器端的Javascript，所以我的内容将会涉及到它。

##### 后端基础：服务器、APIs
* 你需要弄懂这个问题：[服务器和浏览器是如何交互的？（req、res、http）？](#)
* 你需要弄懂这个问题：[API是什么？](#)

##### Node.js
* [Node for Beginners](https://github.com/rockbot/node-for-beginners) by [@rockbot](http://twitter.com/rockbot)
* [Art of Node](https://github.com/maxogden/art-of-node) by [@maxogden](http://twitter.com/%20maxogden)
* [NodeSchool](http://www.nodeschool.io/) Open source Node.js lessons


