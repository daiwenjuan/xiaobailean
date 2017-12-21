/**
 *  Created by daiwenjuan on 2017/10/19 下午5:04.
 */
import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Context from './frame/Context'
import api from './frame/api'
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

const reducers = combineReducers({ ..._reducers })
let store = createStore(reducers)
context.setStore(store)
api.initialize(context)
//<Switch>会遍历自身的子元素（即路由）并对第一个匹配当前路径的元素进行渲染。

const IndexPage = () => {
  return <Provider store={store}>
    <Router>
      <div>
        <Switch>
          {_routes.map((route, i) => (
            <Route key={i} exact={route.exact} path={route.path} component={route.component}/>
          ))}
        </Switch>
      </div>
    </Router>
  </Provider>
}

export default IndexPage