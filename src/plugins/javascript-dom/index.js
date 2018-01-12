/**
 *  Created by daiwenjuan on 2018/1/11 下午12:08.
 */
import Plugin from '../../frame/Plugin'
import createComponent from '../../frame/EnhanceComponent'
import key from './key'
import JavaScriptDom from 'bundle-loader?lazy!./javascript_dom'

const plugin = new Plugin(key.ID)
plugin.reducer = require('./javascript_dom.reducer')

plugin.router = {
  path: '/jsdom',
  component: createComponent(JavaScriptDom)
}
module.exports = plugin