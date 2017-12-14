/**
 *  Created by daiwenjuan on 2017/12/13 下午4:42.
 */
import React, { PureComponent } from 'react'
import styles from './left.module.less'

export default class Left extends PureComponent {

  handleTest = () => {
    let { test } = this.props.actions
    test()
  }

  render() {
    return <div className={styles['left-wrapper']}>
      <div onClick={this.handleTest}>LEFT</div>
    </div>
  }
}
