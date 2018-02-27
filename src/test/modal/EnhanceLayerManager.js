/**
 *  Created by daiwenjuan on 2018/2/26 下午4:18.
 */
import React, { createElement, PureComponent } from 'react'
const Message = require('../message')

function UUID() {
  let i = -1
  return function (key) {
    return `${key}#${i}`
  }
}

function checkPromiseLayer(layers, key) {
  const kk = key.split('#')[0]
  const index = layers.findIndex(line => line.key === kk)
  const layer = layers[index]
  const { component, getComponent } = layer
  if (getComponent) {
    return new Promise(resolve => getComponent(resolve)).then(component => {
      layers[index] = { ...layer, component }
    })
  }

  if (component) {
    return Promise.resolve(null)
  }

}

export const EnhanceLayerManager = (layers, hooks) => (Component) => class extends PureComponent {
  bus = new Message()
  uuid = UUID()
  state = { OPEN_MODAL_LAYER: [] }
  overriddenProps = {}

  constructor(props) {
    super(props)
    layers = layers || []
    this.layers = layers
    this.handleOpen = ::this.handleOpen
    this.handlePush = ::this.handlePush
    this.handleClose = ::this.handleClose
    this.layerManager = {
      open: this.handleOpen,
      push: this.handlePush,
      close: this.handleClose
    }
  }

  handleOpen(key, props) {
    key = this.uuid[key]
    checkPromiseLayer(this.layers, key).then(() => {
      this.handleOverride(key, props)
      this.setState({ OPEN_MODAL_LAYER: [key] })
    })
    return new Promise(reslove => this.bus.on(key, reslove))
  }

  handlePush(key, props) {
    key = this.uuid(key)
    checkPromiseLayer(this.layers, key).then(() => {
      let { OPEN_MODAL_LAYER } = this.state
      let openLayers = OPEN_MODAL_LAYER.slice(0)
      openLayers.push(key)
      this.handleOverride(key, props)
      this.setState({ OPEN_MODAL_LAYER: openLayers })
    })
    return new Promise(reslove => this.bus.on(key, reslove))
  }

  handleOverride(key, props) {
    let data = this.overriddenProps[key]
    this.overriddenProps[key] = { ...data, ...props }
  }

  handleClose() {
    let { OPEN_MODAL_LAYER } = this.state
    let openLayers = OPEN_MODAL_LAYER.slice(0)
    openLayers.pop() //删除并返回数组最后一个元素
    this.setState({ OPEN_MODAL_LAYER: openLayers })
  }

  handleOk(key, data) {
    this.handleClose()
    this.bus.emit(key, data)
  }

  renderLayers() {
    let { OPEN_MODAL_LAYER } = this.state
    if (OPEN_MODAL_LAYER.length === 0)  return null
    let MOLKEY = OPEN_MODAL_LAYER.map(key => key.split('#')[0])
    let layers = {}
    this.layers.forEach(layer => {
      let { key } = layer
      if (!!~MOLKEY.indexOf(key)) {
        layers[key] = layer
      }
    })
    return OPEN_MODAL_LAYER.map(uid => {
      let layer = layers[uid.split('#')[0]]
      let { component, key, ...rest } = layer
      let props = this.overriddenProps[uid]
      let visible = true
      key = uid
      let onOK = data => {this.handleOk(key, data)}
      return createElement(component, {
        key,
        ...rest,
        ...props,
        visible,
        onOK,
        onCancel: this.handleClose,
        layerManager: this.layerManager
      })
    })
  }

  render() {
    let { state, props, layerManager } = this
    let overlay = this.renderLayers()
    return (
      <div>
        <Component {...state} {...props} layerManager={layerManager}/>
        {overlay}
      </div>
    )
  }
}