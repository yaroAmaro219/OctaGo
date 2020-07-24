import React, { Component } from 'react'

export default class CheckIn extends Component {
  render() {
    const {currentUser} = this.props
    return (
      <div>
        <div class="lock-screen">
          <h1>Good to see you,  </h1>
        </div>
      </div>
    )
  }
}
