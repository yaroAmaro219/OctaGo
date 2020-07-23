import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import {Link} from 'react-router-dom'
import Intro5 from '../images/Intro5.png'
import Intro6 from '../images/Intro6.png'
import '../styles/Onboard.css'


const properties = {
    arrows: false
  };



export default function Intro () {
    return (

        <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${Intro5})`}}>
            </div>
          </div>

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${Intro6})`}}>
            </div>
          </div>
        </Slide>

        <Link to='/events'>Start</Link>
        
      </div>





    );
 }