import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import video from '../images/Video.png'

export default class Proceed extends Component {
  render() {
    return (
      <div>
        <Link to='arrived'><img src={video} class="video" /></Link>
      </div>
    )
  }
}
