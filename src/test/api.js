/**
 *  Created by daiwenjuan on 2018/2/5 下午5:41.
 */
class API {
  constructor() {
    this.context = null
    this.pluginHander = null
  }

  initContext(context) {
    this.context = context
  }

  invoiceService(key, ...args) {
    let plugins = this.context.getPlugins()
    plugins.forEach(plugin => {
      let serviceManager = plugin.getServiceManager()
      if (serviceManager && serviceManager[key]) {
        serviceManager[key].apply(this, args)
      }
    })
  }
}
let api = new API()
module.exports = api