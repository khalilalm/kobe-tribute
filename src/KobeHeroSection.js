import React, { Component } from 'react';
import './KobeHeroSection.css';
import kbvid from './img/secondHero.mp4';


class KobeHeroSec extends Component {
render() { 
        return (<div className='kobe-hero'>
      
        <video className='hero-vid' src={kbvid} autoPlay loop muted />
        <div className='overlay'>
               <div className='inner'>
                       <h1 className='hero-title'> Kobe Bryant</h1>
                       <h3 className='hero-title-sub'>The Greatest of All Time</h3>
                       <h4 className='hero-title-sub'style={{fontFamily:""}}>1978-2020</h4>
               </div>
                <div/>
                </div>
        </div>);
    
        }
}
 
export default KobeHeroSec;