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

 koa学习
http://www.jianshu.com/p/6b816c609669

express
https://segmentfault.com/a/1190000011090124