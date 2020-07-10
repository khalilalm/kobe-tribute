import React, { Component } from 'react';
import './KobeHeroSection.css';
import Background from './img/KobeFanArt.jpg';

const myStyles = {
            backgroundImage: "url(" + Background + ")",
            height: '155vh',
            backgroundSize: 'cover'
}
class KobeHeroSec extends Component {
render() { 
        return (<header style = {myStyles}>
                <h1>A Tribute to a King</h1>
        </header>);
    
        }
}
 
export default KobeHeroSec;