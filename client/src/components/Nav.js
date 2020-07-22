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
      <div class="nav">
        <h1 class="profile-welcome">Hello {this.props.currentUser
          &&
        this.props.currentUser.email}</h1>
        < a href="javascript:void(0);" class="icon"
          onClick={() => { this.setState({ toggle: !this.state.toggle})}}>
          <i class="fa fa-bars"></i>
          <div class="nav-items">
          {this.state.toggle
            ?
            <div class="links">
              <Link to="/" class="nav-link">Home</Link>
              <Link to="/events" class="nav-link">Events</Link>
              {this.props.currentUser
                ?
                <Link to="/logout" class="nav-link">Logout</Link>
                :
                <Link to="/login" class="nav-link">Login</Link>
          }
            </div>
            :
            null
            }
            </div>
          </a>
      </div>
    )
  }
}
