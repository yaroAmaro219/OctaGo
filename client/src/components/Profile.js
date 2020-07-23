import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Profile extends Component {
  render() {
    const { event, currentUser, addEvent} = this.props
    return (
      <div>
        Hello, {currentUser
          &&
          currentUser.email}
          <div class="bottom-links">
          <button><Link to='/'>Home</Link></button>
          <button><Link to='/events'>Check In</Link></button>
          <button><Link to='/profile'>Profile</Link></button>
        </div>
      </div>
    )
  }
}
