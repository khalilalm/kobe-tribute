import React, { Component } from "react";
import "./NavBar.css";
import logo from "./img/kobelogo.jpg";
import {Link} from 'react-scroll';

class NavBar extends Component {
  render() {
    console.log(logo);
    
    return (
      <div>
        <nav>
          <ul>
            <img id="k" src={logo} className="logo"></img>
           
            <li><Link to="mamba-wrapper">Mamba Mentality</Link></li> 
            <li><Link to="struggles-wrapper">Struggles</Link></li>
            <li><Link to="early-life-wrapper">Early Life</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
