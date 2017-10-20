/**
 *  Created by daiwenjuan on 2017/10/20 上午11:02.
 */
import React, { Component } from 'react'

export default class Test0 extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        {'Hello Router'}
        {this.props.children}
      </div>
    )
  }
}