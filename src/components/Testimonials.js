import React from 'react';

import nam from '../images/Nam_Nguyen.png';
import yuzuru from '../images/Yuzuru_Hanyu.png';
import javier from '../images/Javier-Fernandez.png';


function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrapper">

        <div class="each-testimonial">
          <img src={nam} alt="Nam Nguyen profile" />
          <h3>Nam Nguyen</h3>
          <p className="title">2014 WORLD JUNIOR CHAMPION</p>
          <p className="testimonial">“Peak Performance Skating is the reason for my success in my competitions”</p>
        </div>

        <div class="each-testimonial">
          <img src={yuzuru} alt="Yuzuru Hanyu profile" />
          <h3>Yuzuru Hanyu</h3>
          <p className="title">2014 & 2018 OLYMPIC GOLD CHAMPION</p>
          <p className="testimonial">“Peak Performance Skating helped me find balance in my life so I could focus on my goal and go for it!”</p>
        </div>

        <div class="each-testimonial">
          <img src={javier} alt="Javier Fernandez profile" />
          <h3>Javier Fernandez</h3>
          <p className="title">TWO TIME EUROPEAN CHAMPION</p>
          <p className="testimonial">“Peak Performance Skating has helped both on and off the ice”</p>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
