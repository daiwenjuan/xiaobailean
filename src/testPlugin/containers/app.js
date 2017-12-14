/**
 *  Created by daiwenjuan on 2017/12/13 下午4:36.
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from './app.module.less'
import Header from '../components/header'
import Left from '../components/left'
import Right from '../components/right'
import Bottom from '../components/bottom'
import { test } from '../actions/index'

class App extends PureComponent {

  render() {
    return <div className={styles['app-wrapper']}>
      <Header className="header"/>
      <div className="content">
        <Left className="left" {...this.props}/>
        <Right className="right" {...this.props}/>
      </div>
      <Bottom className="bottom"/>
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
