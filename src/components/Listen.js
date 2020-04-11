import React from 'react';

import Playlist from './Playlist.js'


function Listen() {
  return (
    <section className="listen">
      <div className="wrapper">
        <h2>Listen To The Mental Training</h2>
        <div className="information">
          <div className="section-copy">
            <h3>Revolutionizing Figure Skating</h3>
            <ul>
              <li><span>Improve technique:</span> Through visual motor behavioral rehersal.</li>
              <li><span>Change your limiting beliefs:</span> (For example; I can't win, I am too slow).</li>
              <li><span>Control emotional states:</span> So you'll be able to put your problems aside and focus on the moment.</li>
              <li><span>Increase relaxation:</span> To help you sleep at night without having a million thoughts running through your head.</li>
              <li><span>Reduce stress and performance anxiety:</span> Which will make you more confident and consistent during performances.</li>
              <li><span>Increase motivation:</span> To help you train more intensely during practice.</li>
            </ul>
          </div>
          <Playlist />
        </div>
      </div>
    </section>
  );
}

export default Listen;