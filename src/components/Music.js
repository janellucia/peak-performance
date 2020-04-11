import React from 'react';

import imageMobile from '../images/album-cover.png';
import Playlist from './Playlist.js'


function Music() {
  return (
    <section id="music">

      <img src={imageMobile} className="mobile-image" alt="album cover" />
      <Playlist />

    </section>
  );
}

export default Music;