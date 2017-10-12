/**
 *  Created by daiwenjuan on 17/10/9 上午11:30.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Login from './plugins/account/login'
import { test } from './plugins/account/account.reducer'

let store = createStore(test)

render(
  <Provider store={store}>
    <Login/>
  </Provider>,
  document.getElementById('root')
)
