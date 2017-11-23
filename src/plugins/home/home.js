/**
 *  Created by daiwenjuan on 2017/11/23 下午8:53.
 */
import React, { PureComponent }from 'react'
import styles from './home.module.less'

export default class Home extends PureComponent {

  render () {
    return (<div className={styles['home-wrapper']}>
      <div className="home-content">
        <div className="header">HEADE</div>
        <div className="middle">
          <div className="content">
            MIDDLE
          </div>
        </div>
        <div className="bottom">BOTTOM</div>
      </div>
    </div>)
  }
}