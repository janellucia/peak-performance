import React from 'react';

import brian from '../images/team/Brian.png';
import asad from '../images/team/Asad.png';
import swarit from '../images/team/Swarit.png';

function Team() {
  return (
    <section className="team" id="team">
      <div className="wrapper">

        <h2>Meet the Peak Performance Team</h2>

        <div className="team-wrap">
          <div className="each-team-member">
            <img src={brian} alt="CP24 logo" />
            <div className="info">
              <h3>Brian Orser</h3>
              <p className="title">Olympic Medalist & Hall of Fame Coach</p>
              <div className="about">
                <p>World Champion and Olympic Medalist Brian Orser is a figure skating legend. He was inducted into the World Figure Skating Hall of Fame in 2009 and won an Emmy for his performance in Carmen on Ice.</p>
                <p>He has coached two Olympic gold medalists, and world champions and currently holds the prestigious title of skating director at the Toronto Cricket, Skating and Curling Club. Currently, he coaches both international top-level skaters and upcoming juniors on an individual basis.</p>
              </div>
            </div>
          </div>

          <div className="each-team-member">
            <img src={asad} alt="Asad Mecci profile image" />
            <div className="info">
              <h3>Asad Mecci</h3>
              <p className="title">Motivational Coach & Consulting Hypnotist</p>
              <div className="about">
                <p>Consulting Hypnotist Asad Mecci has been involved in the art and science of hypnosis, visualization and meditation for over ten years.</p>
                <p>He has appeared on Entertainment Tonight, MTV, Maxim, YTV, Much Music, ATN, Talk Television. He has worked with members from India’s junior national tennis team in the area of peak performance.</p>
                <p>Major corporations have brought Mecci in as an expert consultant to motivate the team. As a mental strength coach, he teaches athletes to use visualization and mental imagery to enhance their abilities on and off the ice.</p>
              </div>
            </div>
          </div>

          <div className="each-team-member">
            <img src={swarit} alt="Swarit Jajal profile image" />
            <div className="info">
              <h3>Swarit Jajal</h3>
              <p className="title">Creative Director / Partner</p>
              <div className="about">
                <p>The visual and creative direction of Swarit Jajal is like no other, from design to market. Swarit has developed relationships in sports with professional athletes for over 15 years.</p>
                <p>Creatively he understands what the market looks for as the “next big thing”.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;