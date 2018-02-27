/**
 *  Created by daiwenjuan on 2018/2/26 下午1:22.
 */
import React, { PureComponent } from 'react'
import { EnhanceModal } from '../EnhanceModal'
import { EnhanceLayer } from '../Enhancelayer'

@EnhanceLayer()
export default class Modal01 extends PureComponent {
  constructor(props) {
    super(props)
    props.overrideGetResult(this.getResult)
  }

  getResult() {
    return 'sfdsfdsfd'
  }

  handleOk() {
    this.props.layer.emitOk({ title: 'modal01数据' })
  }

  handleCancle() {
    this.props.layer.emitCancel()
  }

  render() {
    return <div>
      <div onClick={::this.handleOk}>OK</div>
      <div onClick={::this.handleCancle}> cancle</div>
    </div>
  }
}