/**
 *  Created by daiwenjuan on 2017/10/16 下午2:08.
 */
import Plugin from '../../frame/Plugin'
import key from './key'
const plugin = new Plugin(key.ID)
plugin.setPluginReducer(require('./account.reducer'))
module.exports = plugin