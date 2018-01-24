/**
 *  Created by daiwenjuan on 2018/1/24 22:10.
 */
import React, { Component } from 'react'
import wrapper from './wrapper'

@wrapper({
  type: 'bb'
})
export default class BB extends Component {
  render () {
    return <div>
      bb
    </div>
  }
}