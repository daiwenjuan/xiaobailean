/**
 *  Created by daiwenjuan on 2017/10/12 下午5:47.
 */
import Reducer from'../../frame/Reducer'
import key from'./key'

const reducer = new Reducer(key.ID, {
  text: 'Hello Webpack'
})

reducer.handleAction(key.Click_Change, test)

function test (state, action) {
  if (action.type === 'test') {
    return {...state, action}
  }
  return null
}
module.exports = reducer