export default class Reducer {

  constructor (id, initDefault) {
    this._id = id
    this._initDefault = initDefault || {text: 'test'}
    this._reducersMap = {}
    this._reducers = []
  }

  get Id () {
    return this._id
  }

  get reducer () {
    return this._reducers
  }

  get exports () {
    return (state = this._initDefault, action) => {
      let {type} = action
      if (!!this._reducersMap[type]) {
        this._reducersMap[type].forEach(handle => (state = handle(state, action) || state))
      }
      return state
    }
  }

  handleAction (actionkey, fnAction) {
    this._reducersMap[actionkey] = fnAction
    this._reducers.push(fnAction)
  }
}