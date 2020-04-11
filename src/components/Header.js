import React from 'react';
import logo from '../images/logo.png';
import Hammy from './Hammy.js';

import { Link } from 'react-scroll'


function Header() {
  return (
    <header>
      <Hammy pageWrapId={"App"} outerContainerId={"root"} />
      <div className="top-banner"><p>From Two-time Olympic Silver Medalist Brian Orser</p></div>
      <div className="wrapper">
        <Link activeClass="active" className="logo" to="main" spy={true} smooth={true} duration={500} offset={-80}>
          <img
            src={logo}
            className="App-logo"
            alt="logo" />
        </Link>
        <ul className="desktop-nav">
          <li><Link activeClass="active" className="menu-item" to="howitworks" spy={true} smooth={true} duration={500} offset={-80}>How it Works</Link></li>
          <li><Link activeClass="active" className="menu-item" to="getapp" spy={true} smooth={true} duration={500} offset={-80}>Get the App</Link></li>
          <li><Link activeClass="active" className="menu-item" to="listen" spy={true} smooth={true} duration={500} offset={-80}>Listen to the Training</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
