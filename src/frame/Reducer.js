export default class Reducer {

  constructor (id, initDefault) {
    this._reducerId = id
    this.initDefault = initDefault
    this.reducersMap = {}
    this.reducers = []
  }

  getId () {
    return this._reducerId
  }

  getReducers () {
    return this.reducers
  }

  handleAction (actionkey, fnAction) {
    this.reducersMap[actionkey] = fnAction
    this.reducers.push(fnAction)
  }
}