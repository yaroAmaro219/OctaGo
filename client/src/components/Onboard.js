import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Link} from 'react-router-dom'
import '../styles/Onboard.css'
import logo from '../images/logo-white 2.png'

export default function Onboard () {
    return (
    <div>
        <img
            class="Onboard-logo"
            alt="Onboard Logo"
            src={logo}/>

        <p class="instructions-header">Our first contactless</p>
        <p class="instructions-header"> virtual check-in.</p>
        <p class="instructions-title1">Welcome!</p>
        <p class="instructions">Please arrive at your event</p>
        <p class="instructions"> and find your designated </p>
        <p class="instructions">gate.</p>


        <div class="bottom">
            <div class="bottom-link">
                <Link to='/events'>Skip</Link>
            </div>
            <div class="circles">
                <div class="fill-circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <div class="bottom-link">
                <Link to='/Intro'>Next</Link>
        </div>
</div>
        













      </div>





    );
 }