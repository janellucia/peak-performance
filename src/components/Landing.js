import React from 'react';
import { Link } from 'react-scroll'

function Landing() {
  return (
    <section className="landing">
      <div className="wrapper">
        <div className="video">
          <iframe title="Brian Orser Peak Performance Interview with Steve Anthony on CP24" width="560" height="315" src="https://www.youtube.com/embed/WGNPdL5YMAY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="information">
          <h2>The Mental Training App Used <br></br>By World and Olympic Champions</h2>
          <ul>
            <li >Find it difficult to instantly get ‘in the zone’?</li>
            <li>Can’t sleep after or before performing?</li>
            <li>Constantly worry about ‘what might go wrong’?</li>
            <li>Feel anxious before a performance?</li>
          </ul>
          <p>So do the world’s top professional skaters but they know the secret to overcoming these mental challenges - Peak Performance Skating.</p>
          <Link activeClass="active" className="menu-item" to="listen" spy={true} smooth={true} duration={500} offset={-80}>Listen to the Training</Link>
        </div>
      </div>
    </section>
  );
}

export default Landing;
