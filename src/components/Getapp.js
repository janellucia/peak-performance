import React from 'react';

import phones from '../images/Phones.png';
import playstore from '../images/playstore.png';

function Getapp() {
  return (
    <section className="getapp" id="getapp">
      <div className="wrapper">
        <div className="information">
          <h2>Ready to achieve Peak Performance?</h2>
          <p className="sub-title">The Peak Performance Skating app is availble on Google Play for Android phones. For less than $20 you will get the same mental training that Brian teaches his world champion & Olympic gold medalist skaters.</p>
        </div>
        <div className="download">
          <img src={phones} className="phones" alt="phones featuring tPeak Performance Skating" />
          <a href="https://play.google.com/store/apps/details?id=de.swenggco.peakperformanceskating" target="new"><img src={playstore} alt="google play icon" /></a>
        </div>
      </div>
    </section>
  );
}

export default Getapp;