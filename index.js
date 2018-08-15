import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import About from './components/About'
import User from './components/User'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/user" component={User}/>
    </Route>
  </Router>
), document.getElementById('app'))