import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import {Link} from 'react-router-dom'
import '../styles/Onboard.css'




export default function Onboard () {
    return (
    <div>

        <p class="instructions-header">Our first contactless virtual check-in.</p>
        <p class="instructions-title">Welcome!</p>
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