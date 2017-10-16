/**
 *  Created by daiwenjuan on 2017/10/12 下午5:05.
 */
import { connect } from 'react-redux'

const EnhanceConnect = (mapStateToProps, actions) => (Component) => {
  return connect(mapStateToProps, actions)(Component)
}
export default EnhanceConnect