/**
 *  Created by daiwenjuan on 17/10/9 上午11:30.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import Login from './plugins/account/login'
import rootReduces from './frame/Reducer'

const reducers = combineReducers(...rootReduces)

let store = createStore(reducers)

render(
  <Provider store={store}>
    <Login/>
  </Provider>,
  document.getElementById('root')
)
