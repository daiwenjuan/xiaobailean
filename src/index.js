/**
 *  Created by daiwenjuan on 17/10/9 上午11:30.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import Login from './plugins/account/login'
import Context from './frame/Context'

const context = new Context()
context.mount(require('./plugins/account'))

const plugins = context.getPlugins()
const _reducers = {}

plugins.map(plugin => {
  let {id, reducer} = plugin
  _reducers[id] = reducer.exports
})

const reducers = combineReducers(_reducers)

let store = createStore(reducers)

render(
  <Provider store={store}>
    <Login/>
  </Provider>,
  document.getElementById('root')
)
