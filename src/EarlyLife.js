import React, { Component } from 'react';
import KobeC from './img/KobeInCollege.jpg';
import './EarlyLife.css';

class EarlyLife extends Component {
    
    render() { 
       console.log(KobeC)
       
        return (  <div className="early-life-wrapper">
            <div class="title">
            <h1>Early Life</h1>
            </div>
            <div class="picture">
            <img src={KobeC} alt="Kobe College Image"className="kobe-college-image"></img>
            </div>
            <div class="content">
            <p>Kobe Bryant, the 5x NBA champion, father of 3 children and an inspiration to many. He was born philidelphia. In high school. He gained national recognition for after his amazing performences during the beginning of his high school career which allowed him to join the varsity team. The rest is history...</p>
            <h4>Achievements</h4>
           <ul id="achievement-list">
               <li>NBA MVP Award</li>
               <li>NBA All-Defensive Team</li>
               <li>Best NBA Player ESPY Award</li>
               <li>NBA Finals MVP </li>
               <li>5x NBA Championships Rings</li>
               <li>Published 6 books</li>
               <li>Academy Award for Best Short Film</li>
               <li>BET best Sportsman Award</li>
               <li>ESPY Icon Award</li>
               <li>Under Armour Undeniable Performance</li>

           </ul>
            </div>
       </div> );
    }
}
 
export default EarlyLife;