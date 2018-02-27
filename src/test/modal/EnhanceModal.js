/**
 *  Created by daiwenjuan on 2018/2/26 下午1:11.
 */
import React, { PureComponent } from 'react'
import { Modal } from 'antd'
import Protal from '../Protal'
function IS_PROMISE(value) {
  return value && typeof value.then === 'function'
}

export const EnhanceModal = (config) => (Component) => class extends PureComponent {

  constructor(props) {
    super(props)
    let { visible } = props
    this.state = {
      visible: visible || false,
      loading: false,
      overriddenProps: {}
    }
    this.handleCancel = ::this.handleCancel
    this.handleOk = ::this.handleOk
    this.handleOverride = ::this.handleOverride
    this.handleGetResult = ::this.handleGetResult

    this.layer = {
      emitOk: this.handleOk,
      emitCancel: this.handleCancel,
      override: this.handleOverride
    }
  }

  //重置props
  handleOverride(overriddenProps) {
    this.setState({ overriddenProps })
  }

  handleGetResult(fn) {
    this.getResult = fn
  }

  handleCancel() {
    this.setState({ visible: false })
    let { onCancel } = this.props
    onCancel && onCancel()
  }

  handleOk(data) {
    let ref = this.refs['REF_MODAL_COMPONENT']
    data = data || (this.getResult ? this.getResult() : ref.getResult())

    if (data === false) {
      return false
    }

    if (!IS_PROMISE(data)) {
      data = Promise.resolve(data)
    }
    let { onOK } = this.props
    this.setState({ loading: true })
    data.then(d => {
      this.setState({ loading: false, visible: false })
      onOK && onOK(d)
    }, e => {
      this.setState({ loading: false })
    })
  }

  render() {
    let { ...props } = this.props
    let { visible, loading, overriddenProps } = this.state

    return <Modal {...config} {...props} {...overriddenProps}
                  visible={visible}
                  confirmLoading={loading}
                  footer={null}
                  closable={false}>
      <Component {...props}
                 ref="REF_MODAL_COMPONENT"
                 overrideGetResult={this.handleGetResult}
                 layer={this.layer}
      />
    </Modal>
  }
}