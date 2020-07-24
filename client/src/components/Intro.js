import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import {Link} from 'react-router-dom'
import Intro1 from '../images/Intro1.png'
import Intro2 from '../images/Intro2.png'
import Intro3 from '../images/Intro3.png'
import Intro4 from '../images/Intro4.png'
import '../styles/Onboard.css'

const properties = {
    arrows: false
  };

export default function Intro () {
    return (
    <div>
        <Slide {...properties}>
            <img
                class="Onboard-img"
                alt="Intro1"
                src={Intro1}/>
          <img
                class="Onboard-img"
                alt="Intro2"
                src={Intro2}/>
          <img
                class="Onboard-img"
                alt="Intro3"
                src={Intro3}/>
          <img
                class="Onboard-img"
                alt="Intro4"
                src={Intro4}/>
        </Slide>
        
        <p class="instructions-title">Validate your ticket</p>
        <p class="instructions">Tap check-in button and</p>
        <p class="instructions">point your camera at the</p>
        <p class="instructions">door.</p>
        <p class="instructions-1">Tap virtual ticket to</p>
        <p class="instructions-2">validate.</p>
        
        <div class="bottom1">
              <div class="bottom">
                  <div class="bottom-link">
                        <Link to='/events'>Skip</Link>
                  </div>
                  <div class="circles">
                        <div class="circle"></div>
                        <div class="fill-circle"></div>
                        <div class="circle"></div>
                  </div>
                <div class="bottom-link">
                        <Link to='/EndIntro'>Next</Link>
                </div>
              </div>
        </div>
      </div>
    );
 }