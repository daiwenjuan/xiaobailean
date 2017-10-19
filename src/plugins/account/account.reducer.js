/**
 *  Created by daiwenjuan on 2017/10/12 下午5:47.
 */
import Reducer from'../../frame/Reducer'
import key from'./key'

const reducer = new Reducer(key.ID, {
  text1: 'Hello Webpack',
  text2: 'Hello React'
})

reducer.handleAction(key.CLICK1, (state, action) => {
  let text = action.payload.text
  return {...state, text1: text}
})

reducer.handleAction(key.CLICK2, (state, action) => {
  let text = action.payload.text
  return {...state, text2: text}
})

module.exports = reducer