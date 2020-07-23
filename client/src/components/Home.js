import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'

export default class Home extends Component {
  render() {
    const { event, currentUser, addEvent} = this.props
    const events = event
      &&
      event.map((event, index) => {
        return (
          <div>
            <div class="event">
            <p>Title: {event.title}   </p>
            <p>Location:{event.location} </p>
              <p>Time: {event.time} </p>
            </div>
          </div>
        )
      })  
    return (
      <div>
        <Header />
        <Nav />
        Hello, {currentUser
          &&
          currentUser.email}
        <div class="events-page">
        <h1>Upcoming Events</h1>
          {events}
        </div>
        <div class="bottom-links">
          <button><Link to='/events'>Home</Link></button>
          <button><Link to='/events'>Check In</Link></button>
          <button><Link to='/profile'>Profile</Link></button>
        </div>
      </div>
    )
  }
}
