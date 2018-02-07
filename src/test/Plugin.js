/**
 *  Created by daiwenjuan on 2018/2/5 下午1:06.
 */
class Plugin {
  constructor(id) {
    this.id = id
    this.component = null
    this.serviceManager = {}
    this.menus = []
  }

  getId() {
    return this.id
  }

  setId(id) {
    this.id = id
  }

  setComponent(comp) {
    this.component = comp
  }

  getComponent() {
    return this.component
  }

  registerService(key, fn) {
    if (!key) return
    this.serviceManager[key] = fn
  }

  getServiceManager() {
    return this.serviceManager
  }

  registerMenu(menus) {
    this.menus = this.menus.concat(menus)
  }

  getMenus() {
    return this.menus
  }
}
module.exports = Plugin