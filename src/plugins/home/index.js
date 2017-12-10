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
  path: '/home',
  exact: true,
  component: createComponent(Home)
}
module.exports = plugin