/**
 *  Created by daiwenjuan on 2017/10/12 下午5:20.
 */
import React from 'react'
import styles from './login.module.less'

export default class Login extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={styles['wrapper']}>
        <div>Login lean</div>
      </div>
    )
  }
}
