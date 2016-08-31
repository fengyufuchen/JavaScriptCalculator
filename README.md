# [HTML5 Boilerplate](https://html5boilerplate.com)

[![Build Status](https://travis-ci.org/h5bp/html5-boilerplate.svg)](https://travis-ci.org/h5bp/html5-boilerplate)
[![devDependency Status](https://david-dm.org/h5bp/html5-boilerplate/dev-status.svg)](https://david-dm.org/h5bp/html5-boilerplate#info=devDependencies)

HTML5 Boilerplate is a professional front-end template for building
fast, robust, and adaptable web apps or sites.

This project is the product of many years of iterative development and
combined community knowledge. It does not impose a specific development
philosophy or framework, so you're free to architect your code in the
way that you want.

* Homepage: [https://html5boilerplate.com](https://html5boilerplate.com)
* Source: [https://github.com/h5bp/html5-boilerplate](https://github.com/h5bp/html5-boilerplate)
* Twitter: [@h5bp](https://twitter.com/h5bp)


## Quick start

Choose one of the following options:

1. Download the latest stable release from
   [html5boilerplate.com](https://html5boilerplate.com/) or create a
   custom build using [Initializr](http://www.initializr.com).
2. Clone the git repo — `git clone
   https://github.com/h5bp/html5-boilerplate.git` - and checkout the
   [tagged release](https://github.com/h5bp/html5-boilerplate/releases)
   you'd like to use.


## Features

* HTML5 ready. Use the new elements with confidence.
* Designed with progressive enhancement in mind.
* Includes:
  * [`Normalize.css`](https://necolas.github.com/normalize.css/)
    for CSS normalizations and common bug fixes
  * [`jQuery`](https://jquery.com/) via CDN, with a local fallback
  * A custom build of  [`Modernizr`](http://modernizr.com/) for feature
    detection
  * [`Apache Server Configs`](https://github.com/h5bp/server-configs-apache)
    that, among other, improve the web site's performance and security
* Placeholder CSS Media Queries.
* Useful CSS helper classes.
* Default print styles, performance optimized.
* An optimized version of the Google Universal Analytics snippet.
* Protection against any stray `console` statements causing JavaScript
  errors in older browsers.
* "Delete-key friendly." Easy to strip out parts you don't need.
* Extensive inline and accompanying documentation.


## Browser support

* Chrome *(latest 2)*
* Edge *(latest 2)*
* Firefox *(latest 2)*
* Internet Explorer 8+
* Opera *(latest 2)*
* Safari *(latest 2)*

*This doesn't mean that HTML5 Boilerplate cannot be used in older browsers,
just that we'll ensure compatibility with the ones mentioned above.*

If you need legacy browser support (IE 6+, Firefox 3.6+, Safari 4+) you
can use [HTML5 Boilerplate v4](https://github.com/h5bp/html5-boilerplate/tree/v4),
but is no longer actively developed.


## Documentation

Take a look at the [documentation table of contents](dist/doc/TOC.md).
This documentation is bundled with the project, which makes it readily
available for offline reading and provides a useful starting point for
any documentation you want to write about your project.


## Contributing

Hundreds of developers have helped make the HTML5 Boilerplate what it is
today. Anyone and everyone is welcome to [contribute](CONTRIBUTING.md),
however, if you decide to get involved, please take a moment to review
the [guidelines](CONTRIBUTING.md):

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)


## License

The code is available under the [MIT license](LICENSE.txt).

1 解析文档，创建CalcTron对象

2 文档load事件触发，调用calcTron对象的init方法

3 init 方法中创建ClassLoader对象，
4 CalcTron对象的init方法中设置setMode，
5 setMode方法使用ClassLoader对象调用load方法动态加载Standard js文件；document对象为Standard.js文件创建script标签，然后添加到document的head标签下

6 浏览器检测到添加的script标签引用到了外部js文件，浏览器加载解析Standard.js；在该文件中创建了Mode对象（Standard.prototype=new Mode()实现继承）
然后创建了Standard对象，并且调用了setMode方法（calcTron.setMode(new Standard())）

7 因为第6步骤调用了setMode方法，并且参数为Standard对象，所以会执行如下：
 this.currentMode=mode;
 this.currentMode.init();
 
 其中this.currentMode.init()实际上是调用了Mode类型的init方法，因为Standard对象继承自Mode对象，并且传递给init方法的参数为null。
 
 8 在Mode类型的init方法中，检测到收到的参数为null，然后加载Standard.json文件，并创建标签script，将该json文件添加到head标签下。

9 浏览器解析Standard.json文件，执行json文件中的calcTron.currentMode.init方法，也就是又重新调用了Mode类型的init方法，此时init方法的参数不为null

10


解析执行Standard.js文件中的Standard.prototype=new Mode(),是的Standard类继承自Mode类型；然后设置Model类型为 new Standard(),
添加script标签到文档中
7 setMode的else方法执行，设置当前mode，然后调用mode对象的init方法,init方法 的接收参数为null
,
8 ，如果方法接收的参数为null，那么就去加载json文件，


9如果方法 的参数不为null， mode的init方法执行布局初始化风格
  （1）获取mainContainer对象，

 


4设置当前文档的mode



