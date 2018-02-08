/**
 *  Created by daiwenjuan on 2018/2/7 下午5:26.
 */
import React, { PureComponent } from 'react'
import api from './api'
import Plugin from './Plugin'
let id = '@home'
let plugin = new Plugin(id)
import Modal from './Modal'
class Home extends PureComponent {
  constructor() {
    super()
    let plugins = api.getContext().getPlugins()
    this.menus = []
    plugins.map(plugin => {
      this.menus = this.menus.concat(plugin.getMenus())
    })
  }

  handleModal = () => {

  }

  render() {
    return <div onClick={this.handleModal}>
      <div style={{ backgroundColor: 'lightblue', width: 100, height: 100, overflow: 'hidden' }}>HOME</div>
      <Modal/>
    </div>
  }
}
plugin.setComponent(Home)
module.exports = plugin
