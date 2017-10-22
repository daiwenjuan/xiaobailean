/**
 *  Created by daiwenjuan on 2017/10/19 下午5:04.
 */
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Context from './frame/Context'
import Login from './plugins/account/login'

const context = new Context()
context.mount(require('./plugins/account'))

const plugins = context.getPlugins()
const _reducers = {}

plugins.map(plugin => {
  let { id, reducer } = plugin
  _reducers[id] = reducer.exports
})

const reducers = combineReducers({ routing : routerReducer, ..._reducers })

let store = createStore(reducers)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const IndexPage = () => {
  return <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/login' component={Login}/>
      </div>
    </Router>
  </Provider>
}

export default IndexPage