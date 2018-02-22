/**
 *  Created by daiwenjuan on 2018/2/9 下午1:58.
 */
import React, { Component } from 'react'
import EnhanceModal from './EnhanceModal'

@EnhanceModal({ title: 'test' })
export default class TestModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>TestModal</div>
  }
}