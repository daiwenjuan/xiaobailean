/**
 *  Created by daiwenjuan on 2017/10/12 下午5:20.
 */
import React from 'react'
import styles from './login.module.less'
import EnhanceConnect from '../../frame/EnhanceConnect'
import { test } from './account.action'
const context = require('../../frame/Context')

@EnhanceConnect((state) => {
  return {text: state.text}
}, {test})
export default class Login extends React.Component {

  constructor (props) {
    super(props)
  }

  handleClick () {
    context.getStore()
  }

  render () {
    return (
      <div className={styles['wrapper']}>
        <div onClick={::this.handleClick}>Login lean</div>
      </div>
    )
  }
}
