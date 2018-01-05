/**
 *  Created by daiwenjuan on 2017/11/23 下午9:02.
 */
import Reducer from '../../frame/Reducer'
import key from'./key'
const reducer = new Reducer(key.ID, {
  users: []
})

reducer.handleAction(key.GET_LIST, (state, actions) => {
  let users = actions.payload.users
  return { ...state, users }
})
module.exports = reducer