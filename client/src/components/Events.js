import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/bmw-logo.svg'

export default class Events extends Component {
  constructor() {
    super();
    this.state = {
      newEvent: false
    }
  }

  render() {
    const { event, currentUser, addEvent} = this.props
    const events = event
      &&
      event.map((event, index) => {
        return (
          <div>
            <div class="event">
            <p class="event-p">Title: {event.title}   </p>
            <p class="event-p">Location:{event.location} </p>
            <p class="event-p">Time: {event.time} </p>
            </div>
            <button class="sign-up">Sign Up</button>
          </div>
        )
      })

    return (
      <div class="events-page">
        <h1>Events</h1>
        {currentUser
              && 
              currentUser.admin
              ?
              <button onClick={() => {this.setState({newEvent: !this.state.newEvent})}}>Create New Event</button>
              : 
              null
        }
        {this.state.newEvent 
          ?
          <div class="new-event">
            <h1>New Event</h1>
            <input class="new-event-input" placeholder="Title"></input>
            <input class="new-event-input" placeholder="Location"></input>
            <input class="new-event-input" placeholder="Date"></input>
            <input class="new-event-input" placeholder="Time"></input>
            <Link onClick={this.props.createEvent()}>Create</Link>
             </div>
          :
          null
            }
        {events}
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}
