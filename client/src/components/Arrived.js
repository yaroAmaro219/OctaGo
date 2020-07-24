import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import arrived from '../images/X - 18.png'

export default class Arrived extends Component {
  render() {
    return (
      <div>
        <Link to='/ticket'><img src={arrived} class="video"/></Link>
      </div>
    )
  }
}
