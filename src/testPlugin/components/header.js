/**
 *  Created by daiwenjuan on 2017/12/13 下午4:40.
 */
import React, { PureComponent } from 'react'
import styles from './header.module.less'

export default class Header extends PureComponent {
  render() {
    return <div className={styles['header-wrapper']}>
      Header
    </div>
  }
}
