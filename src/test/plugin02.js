/**
 *  Created by daiwenjuan on 2018/2/5 下午2:29.
 */
import React, { PureComponent } from 'react'
import api from './api'
import Plugin from './Plugin'
let id = '@plugin02'
class Plugin02 extends PureComponent {

  handleOnclick() {
    api.invoiceService('@aaa', 'aa').then(result => {
      console.log(result)
    })
  }

  render() {
    return <div onClick={this.handleOnclick}>模块二</div>
  }
}
let plugin = new Plugin(id)
plugin.registerMenu([{ id, label: '模块二' }])
plugin.setComponent(Plugin02)
module.exports = plugin

