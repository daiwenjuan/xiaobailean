/**
 *  Created by daiwenjuan on 2017/12/13 下午4:42.
 */
import React, { PureComponent } from 'react'
import styles from './left.module.less'

export default class Left extends PureComponent {
  render() {
    return <div className={styles['left-wrapper']}>
      Left
    </div>
  }
}
