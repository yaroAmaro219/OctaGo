import React, { Component } from 'react'
import red from '../images/Screen Shot 2020-07-24 at 12.01.46 PM.png'
import {Link} from 'react-router-dom'

export default class CheckIn extends Component {
  render() {
    const {currentUser} = this.props
    return (
      <div>
        <div >
          <Link to='/approved'><img src={red} class="video"/></Link>
        </div>
      </div>
    )
  }
}
