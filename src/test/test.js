/**
 *  Created by daiwenjuan on 2018/2/5 下午1:09.
 */
let Message = require('./message')
function test() {
  let msg = new Message()
  msg.on('@aaa')
}
test()