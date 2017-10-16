/**
 *  Created by daiwenjuan on 2017/10/16 上午11:48.
 */
export default class Plugin {

  constructor (pluginId) {
    this.pluginId = pluginId
    this._reducer = null
  }

  setPluginReducer (reducer) {
    this._reducer = reducer
  }

  getPluginReducer () {
    return this._reducer
  }
}