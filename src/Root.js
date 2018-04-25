import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import 'typeface-roboto'
import { injectGlobal } from 'styled-components'

export default class Root extends Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

injectGlobal`
  body {
    font-family: Roboto;
    font-size: 1em;
    margin: 0px;
    width: 100%;
    height: 100%;
  }
`