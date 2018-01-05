/**
 *  Created by daiwenjuan on 2017/11/23 下午8:53.
 */
import React, { PureComponent }from 'react'
import styles from './home.module.less'
import { Input, Button } from 'antd'
const Search = Input.Search
import EnhanceConnect from '../../frame/EnhanceConnect'
import { getList } from './home.action'
import key from './key'
import api from '../../frame/api'

@EnhanceConnect((state) => {
  return {
    users: state[key.ID].users,
  }
}, { getList })
export default class Home extends PureComponent {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let { getList } = this.props
    getList()
  }

  handleLogin = () => {
    debugger
    api.dispatch(getList())
  }

  renderList() {
    let { users } = this.props
    return users.map((line, key) => {
      return <div key={key} className="item">{line.name}</div>
    })
  }

  render() {
    return (<div className={styles['home-wrapper']}>
      <div className="home-content">
        <div className="header">
          <span className="logo">LOGO</span>
          <span className='login' onClick={this.handleLogin}>登录</span>
        </div>
        <div className="middle">
          <div className="title">LOGO</div>
          <div className="search">
            <Search
              onSearch={value => console.log(value)}
              style={{ width: 200, height: 45 }}
              size="large"
            />
            <Button className='search-btn' type="primary">搜索</Button>
          </div>
          <div className="content">
            {this.renderList()}
          </div>
        </div>
        <div className="bottom">BOTTOM</div>
      </div>
    </div>)
  }
}