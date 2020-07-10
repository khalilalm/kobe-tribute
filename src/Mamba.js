import React, { Component } from 'react';
import YoungKobe from './img/young-kobe-bryant-lede.jpg'
import './Mamba.css';
import KobeSuit from './img/KobeSuit.jpg';
import KobeShout from './img/kobeShouting.jpg'
class Mamba extends Component {
    

    render() { 
     
        return ( <div className="mamba-wrapper">
            <h1>Mamba Mentality</h1>
                <img src={KobeSuit}></img>
                <img src={YoungKobe} id="youngKobeImg"></img>
                <img src={KobeShout}></img>
<div class="content">
<p>Kobe didn't only influence his teammates to do the best, but also encouraged his fans to become their best selves. Kobe encouraged the "Mamba menteality" a mantra meaning "A constant quest to become the best version of one's self".Kobe wasn't only a basketball player he was the an icon. He inspired people who grew up in the same bad neighborhood he did to do better than before. He will alway inspire people to grow today even after his death. </p>

<p><strong>RIP KOBE: THE GREATEST OF ALL TIME August 23,1978-January 26,2020</strong></p>
</div>
       </div> );
    }
}
 
export default Mamba;