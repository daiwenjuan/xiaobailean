/**
 *  Created by daiwenjuan on 2018/2/5 下午2:29.
 */
import React, { PureComponent } from 'react'
import api from './api'
export default class Plugin02 extends PureComponent {

  handleOnclick() {
    let aa = api.invoiceService('@aaa', 'aa')
  }

  render() {
    return <div onClick={this.handleOnclick}>模块二</div>
  }
}