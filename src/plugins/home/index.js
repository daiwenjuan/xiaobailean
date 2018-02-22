/**
 *  Created by daiwenjuan on 2017/11/23 下午8:54.
 */
import Plugin from '../../frame/Plugin'
import createComponent from '../../frame/EnhanceComponent'
import key from './key'
import Home from 'bundle-loader?lazy!./home'

const plugin = new Plugin(key.ID)
plugin.reducer = require('./home.reducer')

plugin.router = {
  path: '/',
  exact: true,
  component: createComponent(Home)
}

plugin.registerService('@home', function () {
  // 一般用于网络请求
  return 'home模块数据'
})
module.exports = plugin