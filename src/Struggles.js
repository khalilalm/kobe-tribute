import React, { Component } from 'react';
import KJS from './img/KobeJumpshot.jpg';
import './Struggles.css'

class Struggles extends Component {
    state = {  }
    render() { 
        console.log(KJS)
        return ( <div className="struggles-wrapper">
            <h1>Struggles</h1>
            <img src={KJS} className="kobe-img2"></img>
            <p style={{"text-align":"center"}}>Becoming one of the greatest basketball players of all time didn't come without troubles. On April 12th, 2013, Kobe Bryant tore his achillies during a mid-season lakers game. Kobe describes the situation saying,"When I first did it, right there, I was trying to feel if the tendon is there or if it’s gone. I realized it wasn’t there. I was literally trying to pull the tendon up, so hopefully I could walk and kind of hobble through the last two and a half minutes and try to play." Kobe's recovery tooks 6 weeks however, after his recovery his statistics increased greater than before.
            </p>
           
        </div> );
    }
}
 
export default Struggles;