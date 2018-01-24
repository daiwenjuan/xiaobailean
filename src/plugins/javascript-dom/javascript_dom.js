/**
 *  Created by daiwenjuan on 2018/1/11 下午12:09.
 */
import styles from './javascript_dom.module.less'
import React, { Component } from 'react'
import Dymic from './Dymic'
import { elements } from './index0'

export default class JavaScriptDom extends Component {

  constructor (props) {
    super(props)
  }

  test (data) {
    console.log('====test=======')
    console.log(data)
  }

  render () {
    let data = [{type: 'aa', name: 'title'}, {type: 'b', name: 'remark'}]
    return (
      <div className={styles['wrapper']}>
        <Dymic template={data} value={{title: '标题'}} elements={elements} test={this.test}/>
      </div>
    )
  }
}