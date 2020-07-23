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
    <div className="slide-container">
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

        <Link to='/events'>Skip</Link>
        <Link to='/EndIntro'>Next</Link>
        













      </div>





    );
 }