/**
 *  Created by daiwenjuan on 2018/1/24 22:08.
 */
import React, { Component } from 'react'

export default function (props) {
  let {template, value, elements} = props
  let showElement = elements.filter(elem => {
    let type = elem().props.compDes.type
    let tem = template.find(line => line.type === type)
    if (tem) {
      elem.template = tem
      return elem
    }
  })
  //{title: '标题'}
  console.log(showElement)
  return <div>
    {showElement.map((MComponent, key) => {
      return <MComponent key={key} {...props} value={value}/>
    })}
  </div>
}