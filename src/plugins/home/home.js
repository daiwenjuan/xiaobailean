/**
 *  Created by daiwenjuan on 2017/11/23 下午8:53.
 */
import React, { PureComponent }from 'react'
import styles from './home.module.less'
import api from '../../frame/api'

export default class Home extends PureComponent {

  handleClick = () => {
    debugger
    let store = api.getContext().getStore()
    this.props.history.push('./login')
  }

  render() {
    return (<div className={styles['home-wrapper']}>
      <div className="home-content">
        <div className="header" onClick={this.handleClick}>HEADE</div>
      </div>
    </div>)
  }
}