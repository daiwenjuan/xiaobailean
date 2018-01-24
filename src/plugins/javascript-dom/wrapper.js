/**
 *  Created by daiwenjuan on 2018/1/24 22:17.
 */
import React, { Component } from 'react'

export default compDes => Component => {
  return () => <Component compDes={compDes}/>
}
