/**
 *  Created by daiwenjuan on 2017/10/12 下午5:44.
 */
import key from './key'
export function test () {
  return {
    type: key.Click_Change,
    payload: {'text': 'Hello React'}
  }
}