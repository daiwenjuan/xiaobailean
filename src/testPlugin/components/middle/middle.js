/**
 *  Created by daiwenjuan on 2017/12/15 下午2:47.
 */
import React, { PureComponent } from 'react'
import styles from './middle.module.less'
import LeanTitle from './lean-title'
import LeanList from './lean-list'
import LeanContent from './lean-content'

export default class Middle extends PureComponent {

  render() {
    return <div className={styles['middle-warpper']}>
      <div className="middle-content">
        <LeanTitle/>
        <div className="list-content">
          <LeanList/>
          <LeanContent/>
        </div>
      </div>
    </div>
  }
}