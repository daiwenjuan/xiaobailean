/**
 *  Created by daiwenjuan on 2017/12/15 下午2:54.
 */
import React, { PureComponent } from 'react'
import styles from './lean-title.module.less'
export default class LeanTitle extends PureComponent {
  constructor(props) {
    super(props)
    this.titles = ['HTML/CSS', 'JavaScript', 'Node', 'React', 'Webpack']
  }

  renderTitles() {
    return this.titles.map((line, key) => {
      return <div key={key} className="title-item">{line}</div>
    })
  }

  render() {
    return <div className={styles['title-wrapper']}>
      <div className="title-content">
        {this.renderTitles()}
      </div>
    </div>
  }
}