/**
 *  Created by daiwenjuan on 2018/2/5 下午2:28.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import api from './api'
let Singleton = require('./Singleton')
let signleton = Singleton.getInstance()
signleton.mount(require('./plugin01'))

let plugins = signleton.getPlugins()
let plugin = plugins[0]
let Component = plugin.component
api.initContext(signleton)

ReactDOM.render(<Component/>, document.getElementById('root'))