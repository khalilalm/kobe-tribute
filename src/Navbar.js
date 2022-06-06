import React, { Component } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    {
      /* https://1000logos.net/wp-content/uploads/2017/10/Kobe-bryant-Logo.png */
    }

    return (
      <nav
        variant="dark"
        class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
      >
        <a class="navbar-brand" href="#">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/10/Kobe-bryant-Logo.png"
            width="50"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          Kobe Bryant Tribute
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="justify-content-end flex-grow-1 pe-3 collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <Link smooth={true} duration={1000} to="kobe-hero">
              <a class="nav-item nav-link active" href="#">
                Home<span class="sr-only">(current)</span>
              </a>
            </Link>
            <Link smooth={true} duration={1000} to="lok-wrapper">
              <a class="nav-item nav-link active" href="#">
                Life of Kobe
              </a>
            </Link>
            <Link smooth={true} duration={1000} to="mamba-wrapper">
              <a class="nav-item nav-link active" href="../Mamba.js">
                The Mamba Mentality
              </a>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
