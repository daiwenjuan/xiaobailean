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
    // let { getList } = this.props
    // getList()
  }

  handleClick() {
    let { history } = this.props
    history.push('/demo01')
  }

  render() {
    return (<div>
      <div style={{ marginLeft: 50, marginTop: 10 }}>HOME</div>
      <div style={{ marginLeft: 50, marginTop: 20 }} onClick={::this.handleClick}>跳转到模块一</div>
    </div>)
  }
}