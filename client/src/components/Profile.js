import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    const { event, currentUser, addEvent} = this.props
    return (
      <div>
        Hello, {currentUser
          &&
          currentUser.email}
      </div>
    )
  }
}
