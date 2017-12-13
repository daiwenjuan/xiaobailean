/**
 *  Created by daiwenjuan on 2017/12/13 下午4:36.
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styles from './app.module.less'
import Header from '../components/header'
import Left from '../components/left'
import Right from '../components/right'
import Bottom from '../components/bottom'

class App extends PureComponent {

  render() {
    return <div className={styles['app-wrapper']}>
      <Header className="header"/>
      <div className="content">
        <Left className="left"/>
        <Right className="right"/>
      </div>
      <Bottom className="bottom"/>
    </div>
  }
}

function mapStateToProps() {

}

function mapDispatchToProps() {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
