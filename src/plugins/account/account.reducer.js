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
  debugger
  if (action.type === 'test') {
    let text = action.payload.text || state.text
    return {...state, text: action.payload.text}
  }
  return null
}
module.exports = reducer