/**
 *  Created by daiwenjuan on 2018/2/26 下午4:23.
 */
import React, { PureComponent } from 'react'
import{ EnhanceLayerManager } from '../EnhanceLayerManager'
import Modal01 from './modal01'

@EnhanceLayerManager([
  { key: 'M0', component: Modal01 }
])
export default class DEMO01 extends PureComponent {
  handleOpenModal() {
    this.props.layerManager.push('M0').then(data => {
      console.log('======DEMO01========')
      console.log(data)
    })
  }

  handleCloseModal() {
    this.props.layerManager.close()
  }

  render() {
    return <div>
      <div onClick={::this.handleOpenModal}>Open Modal</div>
      <div onClick={::this.handleCloseModal}>Close Modal</div>
    </div>
  }
}
