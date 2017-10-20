/**
 *  Created by daiwenjuan on 2017/10/12 下午5:20.
 */
import React, { Component } from 'react'
import styles from './login.module.less'
import EnhanceConnect from '../../frame/EnhanceConnect'
import { test1, test2 } from './account.action'

@EnhanceConnect((state) => {
  return {
    text1: state['@account'].text1,
    text2: state['@account'].text2
  }
}, {test1, test2})
export default class Login extends Component {

  constructor (props) {
    super(props)
  }

  handleClick1 () {
    this.props.test1()
  }

  handleClick2 () {
    this.props.test2()
  }

  render () {
    let {text1, text2} = this.props
    return (
      <div className={styles['wrapper']}>
        <div onClick={::this.handleClick1}>{text1}</div>
        <div onClick={::this.handleClick2}>{text2}</div>
      </div>
    )
  }
}
