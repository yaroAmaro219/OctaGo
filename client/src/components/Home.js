import React, { Component } from 'react'

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
        Hello, {currentUser
          &&
          currentUser.email}
        {events}
      </div>
    )
  }
}
