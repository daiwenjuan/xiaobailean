/**
 *  Created by daiwenjuan on 2018/2/5 下午5:41.
 */
class API {
  constructor() {
    this.context = null
  }

  initContext(context) {
    this.context = context
  }

  getContext() {
    return this.context
  }

  mPromise() {
    let promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
    return { promise, resolve: this.resolve, reject: this.reject }
  }

  invoiceService(key, ...args) {
    let plugins = this.context.getPlugins()
    let { promise, resolve } = this.mPromise()
    plugins.forEach(plugin => {
      let serviceManager = plugin.getServiceManager()
      if (serviceManager && serviceManager[key]) {
        let result = serviceManager[key].apply(this, args)
        resolve(result)
      }
    })
    return promise
  }
}
let api = new API()
module.exports = api