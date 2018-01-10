webpack 中文文档
http://www.css88.com/doc/webpack/loaders/bundle-loader/

http://cn.redux.js.org/
中文文档
http://www.css88.com/doc/webpack2/concepts/hot-module-replacement/
react-router-redux 中文文档
http://www.jianshu.com/p/bccca5bb6338

react-router-redux的作用
react-router-redux 是将react-router 和 redux 集成到一起的库，让你可以用redux的方式去操作react-router。
例如，react-router 中跳转需要调用 router.push(path)，集成了react-router-redux 你就可以通过dispatch的方式使用router，
例如 跳转可以这样做 store.dispatch(push(url))。本质上，是把react-router自己维护的状态，
例如location、history、path等等，也交给redux管理。一般情况下，是没有必要使用这个库的

router文档
http://react-guide.github.io/react-router-cn/docs/Introduction.html


syncHistoryWithStore()
加强版的history会首先将新的路径通过Redux store传递，然后再通过React Router去更新组件树

 browserHistory, createMemoryHistory, hashHistory 区别
 
 router 按需加载
 http://blog.csdn.net/sinat_17775997/article/details/70332310
 https://segmentfault.com/a/1190000009539836

 koa学习
http://www.jianshu.com/p/6b816c609669

express
https://segmentfault.com/a/1190000011090124

ES6学习
http://es6.ruanyifeng.com/#docs/intro

react 动画
http://www.cnblogs.com/284628487a/p/6412515.html

bundle-loader  实现按需加载，需要的时候才把这个页面加载进来
懒加载的方式
https://zhuanlan.zhihu.com/p/24595585?refer=wxyyxc1992

部署到服务器
https://segmentfault.com/q/1010000007320935
webpack独立打包和缓存处理详解
http://www.jb51.net/article/110281.htm

node 启动 webpack-dev-server
https://segmentfault.com/a/1190000006964335

webpack 中间件
https://www.cnblogs.com/donglegend/p/5821092.html

react-router-dom react-router-redux区别
在 React 的使用中，我们一般要引入两个包，react 和 react-dom，那么 react-router 和react-router-dom 是不是两个都要引用呢？
非也，坑就在这里。他们两个只要引用一个就行了，不同之处就是后者比前者多出了 <Link> <BrowserRouter> 这样的 DOM 类组件。
因此我们只需引用 react-router-dom 这个包就行了。当然，如果搭配 redux ，你还需要使用 react-router-redux。
http://blog.csdn.net/sinat_17775997/article/details/69218382

webpack 3 打包实战
https://github.com/fenivana/webpack-in-action

部署到生产环境需要配置服务器
http://www.jianshu.com/p/8d76debc0f49
redux一些中间件
http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html
http://blog.csdn.net/u011043843/article/details/52326203


前端学习
http://blog.csdn.net/xllily_11/article/details/69527396?ref=myread
https://mp.weixin.qq.com/s?__biz=MzI5ODM3MjcxNQ==&mid=2247483840&idx=2&sn=0ff8bb94c24f0fd4bb9a044a9ff9251d&scene=19#wechat_redirect