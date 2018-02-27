/**
 *  Created by daiwenjuan on 2018/2/26 下午1:17.
 */
import React from 'react'
import { render } from 'react-dom'
import DEMO from './demo1'
window.addEventListener('DOMContentLoaded', () => {
  let el = document.createElement('div')
  el.id = 'app'
  document.body.appendChild(el)
  render(<DEMO/>, el)
})