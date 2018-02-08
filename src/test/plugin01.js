/**
 *  Created by daiwenjuan on 2018/2/5 下午2:28.
 */
import React, { PureComponent } from 'react'
let id = '@plugin01'
let Plugin = require('./Plugin')
let Message = require('./message')
let plugin = new Plugin(id)
class Plugin01 extends PureComponent {
  constructor() {
    super()
    this.msg = new Message()
    // this.msg.on('@aaa', function (args) {
    //   console.log('=====点击了=====' + args)
    // })
  }

  handleOnClick = () => {
    // this.msg.emit('@aaa', 'aa')
    plugin.registerService('@aaa', function (args) {
      return 'plugin01' + args
    })
  }

  render() {
    return <div onClick={this.handleOnClick}>
      模块一
    </div>
  }
}
plugin.registerMenu([{ id, label: '模块一' }])
plugin.setComponent(Plugin01)

module.exports = plugin



