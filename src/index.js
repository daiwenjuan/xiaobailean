/**
 *  Created by daiwenjuan on 2017/10/19 下午5:04.
 */
import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Context from './frame/Context'
const context = new Context()
context.mount(require('./plugins/account'))
context.mount(require('./plugins/home'))

const plugins = context.getPlugins()
const _reducers = {}
let _routes = []
plugins.map(plugin => {
  let { id, reducer, routers } = plugin
  _reducers[id] = reducer.exports
  _routes = _routes.concat(routers)
})
const reducers = combineReducers({ routing: routerReducer, ..._reducers })
let store = createStore(reducers)

const NoMatch = () => (
  <div>
    <h2>NoMatch</h2>
  </div>
)
const About = () => {
  return <div>
    <h2>About</h2>
  </div>
}
const Home = () => {
  return <div>
    <h2>Home</h2>
  </div>
}

class App extends PureComponent {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/about">关于</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    )
  }
}

const IndexPage = () => {
  return <Provider store={store}>
    <Router>
      <div>
        <Switch>
          {_routes.map((route, i) => (
            <Route key={i} exact={route.exact} path={route.path} component={route.component}/>
          ))}
          <Route component={App}/>
        </Switch>
      </div>
    </Router>
  </Provider>
}

export default IndexPage