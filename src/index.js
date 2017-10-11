/**
 *  Created by daiwenjuan on 17/10/9 上午11:30.
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'

//action
function changeText () {
  return {
    type: 'CHANGE_TEXT'
  }
}

function buttonClick () {
  return {
    type: 'BUTTON_CLICK'
  }
}

//reducer
const initialState = {
  text: 'Hello Webpack'
}
function myApp (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        text: state.text === 'Hello' ? 'Stark' : 'Hello'
      }
    case 'BUTTON_CLICK':
      return {
        text: 'You just click button'
      }
    default:
      return {
        text: 'Hello'
      }
  }
}

//store
let store = createStore(myApp)

class Hello extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.actions.changeText()
  }

  render () {
    return (
      <h1 onClick={this.handleClick}> {this.props.text} </h1>
    )
  }
}

class Change extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.actions.buttonClick()
  }

  render () {
    return (
      <button onClick={this.handleClick}>change</button>
    )
  }
}

class App extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {actions, text} = this.props
    return (
      <div>
        <div>Hello WebPack</div>
        <Hello actions={actions} text={text}/>
        <Change actions={actions}/>
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {text: state.text}
}

function mapDispatchToProps (dispatch) {
  debugger
  return {
    actions: bindActionCreators({changeText: changeText, buttonClick: buttonClick}, dispatch)
  }
}
//const VisibleTodoList = connect(
//  mapStateToProps,
//  mapDispatchToProps
//)(TodoList)
//上面代码中，connect方法接受两个参数：mapStateToProps和mapDispatchToProps。
// 它们定义了 UI 组件的业务逻辑。
// 前者负责输入逻辑，即将state映射到 UI 组件的参数（props），
// 后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。

App = connect(mapStateToProps, mapDispatchToProps)(App)

render(
  <Provider store={store}>
    <App test="aaa"/>
  </Provider>,
  document.getElementById('root')
)

