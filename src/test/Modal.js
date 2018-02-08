/**
 *  Created by daiwenjuan on 2018/2/8 下午12:00.
 */
import './modal.less'
import React, { Component, PropTypes } from 'react'
import Protal from './Protal'

export default class Modal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <Protal>
        <div style={{ height: 50, width: 50 }}>{'Modal'}</div>
      </Protal>
    </div>
  }
}

