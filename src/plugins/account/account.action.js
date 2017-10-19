/**
 *  Created by daiwenjuan on 2017/10/12 下午5:44.
 */
import key from './key'
export function test1 () {
  return {
    type: key.CLICK1,
    payload: {'text': 'text1'}
  }
}

export function test2 () {
  return {
    type: key.CLICK2,
    payload: {'text': 'text2'}
  }
}