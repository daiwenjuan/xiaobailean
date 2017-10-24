/**
 *  Created by daiwenjuan on 2017/10/19 下午5:04.
 */
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Context from './frame/Context'

import Bundle from './bundle'

import Login from 'bundle-loader?lazy!./plugins/account/login'

const context = new Context()
context.mount(require('./plugins/account'))
const plugins = context.getPlugins()
const _reducers = {}
plugins.map(plugin => {
  let {id, reducer} = plugin
  _reducers[id] = reducer.exports
})
const reducers = combineReducers({routing: routerReducer, ..._reducers})
let store = createStore(reducers)

const createComponent = component => props => (
  <Bundle load={component}>
    {Component => <Component {...props} />}
  </Bundle>
)
const Home = () => <h2>Home</h2>
const NoMatch = () => (
  <div>
    <h2>NoMatch</h2>
  </div>
)

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/login',
    component: createComponent(Login),
  }
]

const IndexPage = () => {
  return <Provider store={store}>
    <Router>
      <div>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} exact={route.exact} path={route.path} component={route.component}/>
          ))}
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  </Provider>
}

export default IndexPage