import React, { Component } from 'react'
import logo from '../images/bmw-logo.svg'

export default class Events extends Component {


  // userAdmin = () => {
  //   const { currentUser } = this.props
  //   const user = currentUser
  //     &&
  //     currentUser.map((admin, index) => {
  //     return (
  //       {
  //         admin.admin
  //           ?
      
  //       <>
  //         create Event
  //         </>
      
  //         :
  //   null
  //       }))
  //     }
  //   if (user) {
  //     return (
  //       <>
  //         <p>Create Event</p>
  //         </>
  //     )
  //   }
  // }


  

  // admin() {
  //   var admin = this.props.currentUser
  //   ?
  //     this.props.currentUser.admin
  //     :
  //     null
  //   return([admin])
  // }

  render() {
    const { event, currentUser, addEvent} = this.props
    const events = event
      &&
      event.map((event, index) => {
        return (
          <div>
            <button onClick={addEvent()}>Create New Event</button>
            {event.title}
            {event.location}
            {event.time} 
          </div>
        )
      })
    
    // const user = currentUser
    //   && 
    //   currentUser.map((user, index) => {
    //     return (
    //       <div>
    //         {user.admin}
    //         {user.email}
    //         </div>
    //   )
    // })
    return (
      <div>
        <h1>Events</h1>
        {events}
        {/* {user} */}
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}
