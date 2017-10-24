/**
 *  Created by daiwenjuan on 2017/10/16 下午2:08.
 */
import Plugin from '../../frame/Plugin'
import  createComponent from '../../frame/EnhanceComponent'
import key from './key'
import Login from 'bundle-loader?lazy!./login'
const plugin = new Plugin(key.ID)
plugin.reducer = require('./account.reducer')

plugin.router = {
  path: '/login',
  component: createComponent(Login),
}
module.exports = plugin