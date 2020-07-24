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

export default function EndIntro () {
    return (
        <div>
          <Slide {...properties}>
            <img
              class="Onboard-img-end"
              alt="Intro5"
              src={Intro5}/>
            <img
              class="Onboard-img-end"
              alt="Intro6"
              src={Intro6}/>
          </Slide>
        
            <p class="instructions-title">Unlock + Enjoy the Event</p>
            <p class="instructions">Once ticket is validated, tap</p>
            <p class="instructions">lock icon and</p>
            <p class="instructions-end">enter the event.</p>

            <Link class="start-link" to='/events'>START</Link>
        
        </div>
    );
 }