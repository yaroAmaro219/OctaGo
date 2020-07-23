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
    const { event, currentUser, addEvent, handleEvent, handleChange, newEvent} = this.props
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
        {/* <form className="login-form" onSubmit={handleRegister}>
        <h1 className="sign-in-title">Register</h1>
        <div className="input-container">
          <input name="email" type="text" onChange={handleChange} value={registerFormData.email} className="input" placeholder="Email"/>
          <input name="phone" type="text" onChange={handleChange} value={registerFormData.phone} className="input" placeholder="Phone Number"/>
          <input name="password" type="password" onChange={handleChange} value={registerFormData.password} className="input" placeholder="Password"/>
        </div>
        <button className='submit-button'>Register</button>
      </form> */}
        {events}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
    )
  }
}
