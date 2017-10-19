/**
 *  Created by daiwenjuan on 2017/10/19 下午5:04.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { AppContainer } from 'react-hot-loader'
import Index from './index'
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

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Index)

if (module.hot) {
  module.hot.accept('./index.js', () => {
    const NextRootContainer = require('./index.js').default
    render(NextRootContainer)
  })
}
