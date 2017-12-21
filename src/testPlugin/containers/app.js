/**
 *  Created by daiwenjuan on 2017/12/13 下午4:36.
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styles from './app.module.less'
import { test } from '../actions/index'
const NoMatch = () => (
  <div>
    <h2>Page1</h2>
  </div>
)
const About = () => {
  return <div>
    <h2>Page2</h2>
  </div>
}
const Home = () => {
  return <div>
    <h2>Home</h2>
  </div>
}
class App extends PureComponent {

  render() {
    return <div className={styles['app-wrapper']}>
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">Page1</Link></li>
            <li><Link to="/page2">Page2</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/page1" component={NoMatch}/>
          <Route path="/page2" component={About}/>
        </div>
      </Router>
    </div>
  }
}

function mapStateToProps(state = {}) {
  return { text: state.text }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ test: test }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
