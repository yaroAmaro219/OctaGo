import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import octago from '../images/logo-white 2.png'
import gif from '../images/gif.mov'

export default class Events extends Component {
  constructor() {
    super();
    this.state = {
      newEvent: false
    }
  }

  render() {
    const { event, currentUser, addEvent, handleEvent, handleChange, newEvent} = this.props
    const events = event
      &&
      event.map((event, index) => {
        return (
            <div class="event">
              <h4 class="event-p">{event.title}</h4>
              <p class="event-p">{event.time}</p>
              <p class="event-p">{event.location}</p>
                <div class="event-container">
                  <button class="event-button">Live Queue</button>
                  <button class="event-button"><Link class="event-button" to='/proceed'>Check In</Link></button>
                </div>
            </div>
        )
      })

    return (
      <div class="events-page">
        <img src={octago} class='octago'/>
        <img src={gif} class='gif'/>
        <div class="new-event">
        <h1 class="upcoming-events">Upcoming Events</h1>
        {/* {currentUser
              && 
              currentUser.admin
              ?
              <button class="add-event" onClick={() => {this.setState({newEvent: !this.state.newEvent})}}>+</button>
              : 
              null
          } */}
          </div>
        {this.state.newEvent 
          ?
          <div class="new-event">
            <form class="new-event-form" onSubmit={handleEvent}>
              <input name="title" class="new-event-input" placeholder="Title" onChange={handleChange} value={newEvent.title}></input>
              <input name="Location" class="new-event-input" placeholder="Location" onChange={handleChange} value={newEvent.location}></input>
              <input name="date" class="new-event-input" placeholder="Date" onChange={handleChange} value={newEvent.date}></input>
              <input name="time" class="new-event-input" placeholder="Time" onChange={handleChange} value={newEvent.time}></input>
               <button onClick={this.props.createEvent()}>Create</button>
            </form>
          </div>
          :
          null
        }
        {events}
      </div>
    )
  }
}
