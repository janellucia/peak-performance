import React from 'react';

import energize from '../images/Energize.png';
import relax from '../images/Relax.png';



function Howitworks() {
  return (
    <section className="howitworks" id="howitworks">
      <div className="wrapper">

        <div className="information">
          <h2>How it Works</h2>
          <p className="sub-title">The Peak Performance Skating app contains audio files that improve skating performance by using mental imagery and positive re-enforcment to condition your mind for success. It is specifically focused on skating performance and trains you to visualize complex moves. There are two modules included in the app:</p>

          <div className="benefits-wrap">

            <div className="each-benefit energize">
              <img src={energize} alt="energize icon" />
              <div className="benefits">
                <h3>Energize</h3>
                <p>Use Before Training & Competitions</p>
                <ul>
                  <li>Increase Energy</li>
                  <li>Improve Focus</li>
                  <li>Gets you 'In the Zone'</li>
                </ul>
              </div>
            </div>

            <div className="each-benefit relax">
              <img src={relax} alt="energize icon" />
              <div className="benefits">
                <h3>Relax</h3>
                <p>Use to Sleep Before & After Training & Competitions</p>
                <ul>
                  <li>Relieves Anxiety</li>
                  <li>Helps you Sleep</li>
                  <li>Relaxes your Body</li>
                </ul>
              </div>
            </div>

          </div>


        </div>
      </div>
    </section>
  );
}

export default Howitworks;