/**
 *  Created by daiwenjuan on 2017/10/24 下午7:52.
 */
import React, { Component } from 'react'
import styles from './login.module.less'

export default class Test extends Component {

  constructor (props) {
    super(props)
  }

  handleClick = () => {
    this.props.history.go(-1)
  }

  render () {

    return (
      <div className={styles['wrapper']} onClick={this.handleClick}>
        {'test'}
      </div>
    )
  }
}