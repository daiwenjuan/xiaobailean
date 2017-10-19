/**
 *  Created by daiwenjuan on 2017/10/12 下午5:20.
 */
import React from 'react'
import styles from './login.module.less'
import EnhanceConnect from '../../frame/EnhanceConnect'
import { test } from './account.action'

@EnhanceConnect((state) => {
  return {text: state['@account'].text}
}, {test})
export default class Login extends React.Component {

  constructor (props) {
    super(props)
  }

  handleClick () {
    let {test} = this.props
    test()
  }

  render () {
    let {text} = this.props
    return (
      <div className={styles['wrapper']}>
        <div onClick={::this.handleClick}>{text}</div>
      </div>
    )
  }
}
