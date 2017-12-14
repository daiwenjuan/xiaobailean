/**
 *  Created by daiwenjuan on 2017/12/13 下午4:42.
 */
import React, { PureComponent }from 'react'
import styles from './right.module.less'

export default class Right extends PureComponent {
  render() {
    let { text } = this.props
    return <div className={styles['right-wrapper']}>
      {text}
    </div>
  }
}
