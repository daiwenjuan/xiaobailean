/**
 *  Created by daiwenjuan on 2018/2/26 下午1:17.
 */
import React, { PureComponent } from 'react'
import Modal from './modal01'
export default class DEMO extends PureComponent {

  handleOnCancel() {
    console.log('====handleOnCancel=======')
  }

  handleOnOK(data) {
    console.log('=======handleOnOK======')
    console.log(data)
  }

  render() {
    return <div className="demo">
      <div >DEMO</div>
      <div className="modal">
        <Modal visible={true} onCancel={::this.handleOnCancel} onOk={::this.handleOnOK}/>
      </div>
    </div>
  }
}