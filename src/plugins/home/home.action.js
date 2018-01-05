/**
 *  Created by daiwenjuan on 2017/11/23 下午9:01.
 */
import key from './key'
import { request } from '../../frame/fetch'

export function getList() {
  return {
    type: key.GET_LIST,
    payload: request().then(json => json)
  }
}