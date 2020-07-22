import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggle: false
    }
  }
  render() {
    const {currentUser} = this.props
    console.log({currentUser})
    return (
      <div class="page">
      <div class="hamburger">
        <input type="checkbox" id="nav-toggle"/>
          <label for="nav-toggle">
            <span class="toggle-words"><i class="fa fa-bars" id="bar"></i></span>
          </label>
      <div class="menu">
        <ul>
            <li><Link to="/" class="nav-link">Home</Link></li>
            <li><Link to="/events" class="nav-link" >Events</Link></li>
              <li><Link to="/profile" class="nav-link">Profile</Link></li>
              <li>
                {
                  this.props.currentUser
                ?
                <button class="nav-link" onClick={this.props.handleLogout}>Logout</button>
                :
                <Link to="/login" class="nav-link">Login</Link>
                }
              </li>
        </ul>
      </div>
      </div>
      </div> 
    )
  }
}
