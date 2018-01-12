/**
 *  Created by daiwenjuan on 2018/1/11 下午12:09.
 */
import styles from './javascript_dom.module.less'
import React, { Component } from 'react'

export default class JavaScriptDom extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles['wrapper']}>
        <header className="title">编码良好规范</header>
        <ul>
          <li>
            <div>循序渐进</div>
            <div className="info">
              <span>从最核心的你日荣开始，逐步添加额外的功能。应该先用标记语言给核心内容加上正确的标记以使其获得正确的结构，然后再逐步
              充实被加上了正确标记的内容。可以通过CSS样式实现，也可以通过DOM脚本添加各种操作行为</span>
            </div>
          </li>
          <li>
            <div>预留退路</div>
            <div className="info"><span>当浏览器JavaScript功能被禁用，也能正常工作</span></div>
          </li>
          <li>分离javaScript代码</li>
        </ul>
      </div>
    )
  }
}