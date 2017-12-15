/**
 *  Created by daiwenjuan on 2017/12/13 下午4:36.
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import styles from './app.module.less'
import Header from '../components/header/header'
import Bottom from '../components/bottom/bottom'
import Middle from '../components/middle/middle'
import { test } from '../actions/index'

class App extends PureComponent {

  render() {
    return <div className={styles['app-wrapper']}>
      <Router >
        <div className="app-content">
          <Header/>
          <Middle/>
          <Bottom/>
        </div>
      </Router>
    </div>
  }
}

function mapStateToProps(state = {}) {
  return { text: state.text }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ test: test }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
