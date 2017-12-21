/**
 *  Created by daiwenjuan on 2017/12/21 下午5:58.
 */
class API {
  constructor() {
    this.ctx = {}
  }

  initialize(ctx) {
    this.ctx = ctx
  }

  getContext() {
    return this.ctx
  }
}

const api = new API()

export default api