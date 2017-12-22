/**
 *  Created by daiwenjuan on 2017/11/23 下午8:53.
 */
import React, { PureComponent }from 'react'
import styles from './home.module.less'
import { Input } from 'antd'
const Search = Input.Search
export default class Home extends PureComponent {

  render() {
    return (<div className={styles['home-wrapper']}>
      <div className="home-content">
        <div className="header">
          <span className="logo">LOGO</span>
          <span className='login'>登录</span>
        </div>
        <div className="middle">
          <div className="search">
            <Search placeholder="input search text" enterbutton="Search" size="large"/>
          </div>
        </div>
        <div className="bottom">BOTTOM</div>
      </div>
    </div>)
  }
}