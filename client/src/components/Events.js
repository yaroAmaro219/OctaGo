import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import octago from '../images/logo-white 2.png'
import bmw from '../images/bmw-logo.svg'
import Nav from './Nav'

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
          <div >
            <div class="event">
              <h4 class="event-p">{event.title}</h4>
              <p class="event-p">{event.time}</p>
              <p class="event-p">{event.location}</p>
              <div class="event-container">
              <button class="event-button">Live Queue</button>
                <button class="event-button"><Link to='/proceed'>Check In</Link></button>
                </div>
            </div>
           
            
          </div>
        )
      })

    return (
      <div class="events-page">
        {/* <Nav /> */}
        <img src={octago} class='octago'/>
        <img src={bmw} class='gif'/>
        
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
        {/* <div class="bottom-links">
          <button><Link to='/'>Home</Link></button>
          <button><Link to='/events'>Check In</Link></button>
          <button><Link to='/profile'>Profile</Link></button>
        </div> */}
      </div>
    )
  }
}
