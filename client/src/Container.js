import React, { Component } from 'react'
import { Router } from 'react-router'
import Nav from './components/Nav'

export default class Container extends Component {
  render() {
    console.log('hello')
    return (
      <div>
        <h1>Octago</h1>
        <p>YOYO</p>
        <Nav />
        <Router>


        </Router>
      </div>
    )
  }
}
