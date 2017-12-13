/**
 *  Created by daiwenjuan on 2017/12/13 下午4:21.
 */
import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducers from './testPlugin/reducers'
import APP from './testPlugin/containers/app'
import { Provider } from 'react-redux'
import './testPlugin/styles/index.module.less'

let store = createStore(reducers)
render(
  <Provider store={store}>
    <APP/>
  </Provider>,
  document.getElementById('root')
)