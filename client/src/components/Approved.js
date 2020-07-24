import React, { Component } from 'react'
import green from '../images/Screen Shot 2020-07-24 at 12.03.46 PM.png'
import {Link} from 'react-router-dom'

export default class Approved extends Component {
  render() {
    return (
      <div>
        <Link to='/events'><img src={green} class='video'/></Link>
      </div>
    )
  }
}
