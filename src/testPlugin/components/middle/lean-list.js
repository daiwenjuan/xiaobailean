/**
 *  Created by daiwenjuan on 2017/12/13 下午4:42.
 */
import React, { PureComponent } from 'react'
import styles from './lean-list.module.less'

export default class LeanList extends PureComponent {
  constructor(props) {
    super(props)
    this.leanList = ['HTML/CSS']
  }

  renderLeanList() {
    return this.leanList.map((line, key) => {
      return <div key={key}>{line}</div>
    })
  }

  render() {
    return <div className={styles['left-wrapper']}>
      <div className="left-content">
        {this.renderLeanList()}
      </div>
    </div>
  }
}
