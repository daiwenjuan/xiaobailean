/**
 *  Created by daiwenjuan on 17/10/9 上午11:30.
 */
import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

import TestIndex from './test/testIndex'
import Test0 from './test/test0'
import Test1 from './test/test1'
import Test2 from './test/test2'
import Test3 from './test/test3'

export default class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (<Router history={history}>
      <Route path='/' component={Test0}>
        <Route path="/test2" component={Test2}/>
      </Route>
    </Router>)
  }
}
