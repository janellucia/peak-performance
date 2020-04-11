import React from 'react';

import Landing from '../components/Landing';
import Testimonials from "../components/Testimonials"
import Howitworks from "../components/Howitworks"
import Featured from "../components/Featured"
import Getapp from "../components/Getapp"
import Team from "../components/Team"
import Listen from "../components/Listen"


function Main() {
  return (
    <div>
      <main id="main">
        <Landing name="landing" />
        <Testimonials name="testimonials" />
        <Howitworks name="howitworks" />
        <Featured name="featured" />
        <Getapp name="getapp" />
        <Team name="team" />
        <Listen name="listen" />
      </main>
    </div>
  );
}

export default Main;