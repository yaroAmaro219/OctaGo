import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ticket from '../images/X - 29.png'

export default class Ticket extends Component {
  render() {
    return (
      <div>
        <Link to='/checkin'><img src={ticket} class='video'/></Link>
      </div>
    )
  }
}
