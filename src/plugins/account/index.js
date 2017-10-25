/**
 *  Created by daiwenjuan on 2017/10/16 下午2:08.
 */
import Plugin from '../../frame/Plugin'
import  createComponent from '../../frame/EnhanceComponent'
import key from './key'
import Login from 'bundle-loader?lazy!./login'
import Test from 'bundle-loader?lazy!./test'
const plugin = new Plugin(key.ID)
plugin.reducer = require('./account.reducer')

plugin.router = {
  path: '/login',
  component: createComponent(Login),
}

plugin.router = {
  path: '/test',
  component: createComponent(Test)
}
module.exports = plugin