import React from 'react';

import cp24 from '../images/featured/cp24logo.png';
import icenetwork from '../images/featured/icenetworklogo.png';
import psa from '../images/featured/psalogo.png';

function Getapp() {
  return (
    <section className="featured" id="featured">
      <div className="wrapper">

        <h2>As Featured On</h2>

        <div className="featured-logos">
          <img src={cp24} alt="CP24 logo" />
          <img src={icenetwork} className="ice-network" alt="Ice Network logo" />
          <img src={psa} className="psa" alt="PSA logo" />
        </div>
      </div>
    </section>
  );
}

export default Getapp;