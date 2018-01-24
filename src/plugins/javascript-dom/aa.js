/**
 *  Created by daiwenjuan on 2018/1/24 22:10.
 */
import React, { Component } from 'react'
import wrapper from './wrapper'

@wrapper({
  type: 'aa'
})
export default class AA extends Component {
  render () {
    return <div>
      aa
    </div>
  }
}