/**
 *  Created by daiwenjuan on 2017/10/24 下午7:52.
 */
import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styles from './test.module.less'

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = { items : ['hello', 'world', 'click', 'me'] }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ])
    this.setState({ items : newItems })
  }

  handleRemove(i) {
    let newItems = this.state.items.slice()
    newItems.splice(i, 1)
    this.setState({ items : newItems })
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ))
    return (
      <div className={styles['test-wrapper']}>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}