/**
 *  Created by daiwenjuan on 2017/12/13 下午4:28.
 */
export default function (state, action) {
  // state 记录的是上一个的状态
  switch (action.type) {
    case'@@redux/INIT':
      return { text: 'init' }
    case 'CHANGE_TEXT':
      return {
        text: state.text === 'Hello React' ? 'Hello Test' : 'Hello React'
      }
  }
}