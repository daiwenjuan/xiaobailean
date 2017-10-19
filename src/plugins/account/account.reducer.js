/**
 *  Created by daiwenjuan on 2017/10/12 下午5:47.
 */
import Reducer from'../../frame/Reducer'
import key from'./key'

const reducer = new Reducer(key.ID, {
  text: 'Hello Webpack'
})

reducer.handleAction(key.Click_Change, (state, action) => {
  let text = action.payload.text
  return {...state, text: text}
})

module.exports = reducer