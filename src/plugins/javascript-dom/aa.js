/**
 *  Created by daiwenjuan on 2018/1/24 22:10.
 */
import React, { Component } from 'react'
import wrapper from './wrapper'

@wrapper({
  type: 'aa'
})
export default class AA extends Component {
  handleOnClick = () => {
    let {test} = this.props
    test('AA')
  }

  render () {
    console.log(this.props)
    return <div onClick={::this.handleOnClick}>
      aa
    </div>
  }
}