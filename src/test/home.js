/**
 *  Created by daiwenjuan on 2018/2/7 下午5:26.
 */
import React, { PureComponent } from 'react'
import api from './api'
import Plugin from './Plugin'
let id = '@home'
let plugin = new Plugin(id)
class Home extends PureComponent {
  constructor() {
    super()
    let plugins = api.getContext().getPlugins()
    this.menus = []
    plugins.map(plugin => {
      this.menus = this.menus.concat(plugin.getMenus())
    })
  }

  render() {
    return <div>
      {this.menus.map((line, key) => {
        return <div key={key}>{line.label}</div>
      })}
    </div>
  }
}
plugin.setComponent(Home)
module.exports = plugin
