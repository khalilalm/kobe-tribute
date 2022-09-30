import React, { Component } from "react";
import KobeC from "./img/KobeJumpshot.jpg";
import KobeinCollege from "./img/KobeInCollege.jpg"
import Kobegif from "./img/KobeBryantGif.webp"
import "./Lok.css";
import Carousel from 'react-bootstrap/Carousel'




class Lok extends Component {
  render() {
    console.log(KobeC);

    return (
      <div className="lok-wrapper">
        <div class="title">
          <h1 className="lok-title">The Life of Kobe</h1>
        </div>
        <div className="lok-container">
          <div className="lok-items">
            <img
              src={KobeinCollege}
              alt="Kobe College Image"
              className="kobe-college-image"
            />
           <h6 className="lok-item-subtitles">Early Life</h6>
            <p className="lok-text">Kobe Bryant, the 5x NBA champion, father of 3 children and an inspiration to many. He was born philidelphia. In high school, he gained national recognition for his amazing performences during the beginning of his high school career which allowed him to join the varsity team.“I heard a lot of buzz about a 14-year-old in our middle school, so I went to watch one of his games,” said Kobe's Middle school Coach -<a href="https://www.inquirer.com/high-school-sports/gregg-downer-kobe-bryant-lower-merion-high-school-basketball-20200128.html?outputType=amp" target="_blank" >The Philadelphia Inquirer</a>. The rest is history, Kobe went on to score 2,883 points in his high school career</p> 
            

          </div>
         
          <div className="lok-items">
            <img
              src={KobeC}
              alt="Kobe College Image"
              className="kobe-college-image"
            /> 
 <h6 className="lok-item-subtitles">Struggles</h6>
            
            <p className="lok-text" >
            Becoming one of the greatest basketball players of all time didn't
            come without troubles. On April 12th, 2013, Kobe Bryant tore his
            achillies during a mid-season lakers game. Kobe describes the
            situation saying,"When I first did it, right there, I was trying to
            feel if the tendon is there or if it’s gone. I realized it wasn’t
            there. I was literally trying to pull the tendon up, so hopefully I
            could walk and kind of hobble through the last two and a half
            minutes and try to play." Kobe's recovery tooks 6 weeks however,
            after his recovery his statistics increased greater than before.
          </p>
          
          </div>
          <div className="lok-items">
             
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/200126210422-27-kobe-bryant-gallery-restricted-super-tease.jpg"
              alt="Kobe College Image"
              className="kobe-college-image"
            />
            <div>
                
           <h6 className="lok-item-subtitles">Achievments</h6>
            </div>
           
            <ul  className="lok-text-list" >
                <li className="lok-text-list-item">NBA MVP Award</li>
                <li className="lok-text-list-item">NBA All-Defensive Team</li>
                <li className="lok-text-list-item" >Best NBA Player ESPY Award</li>
                <li className="lok-text-list-item">NBA Finals MVP</li>
                <li className="lok-text-list-item">5x NBA Championships Rings</li>
                <li className="lok-text-list-item">Published 6 books</li>
                <li className="lok-text-list-item">Academy Award for Best Short Film</li>
                <li className="lok-text-list-item">BET Best Sportsman Award</li>
                <li className="lok-text-list-item">ESPY Icon Award</li>
                <li className="lok-text-list-item">Under Armour Undeniable Performance</li>
            </ul>
            <p className="lok-text">Kobe went on to score a total of 33,643 points in his career making one of him the top 4 scorers of all time!!!</p>
          </div>

         
        </div>
        <div class="content"></div>
      </div>
    );
  }
}

export default Lok;
