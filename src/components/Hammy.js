import React from 'react';
import { slide as Menu } from 'react-burger-menu'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faFacebookF, faInstagram, faYoutube, faItunesNote } from '@fortawesome/free-brands-svg-icons'

export default props => {
  return (
    // Pass on our props
    <Menu right disableAutoFocus>
      <h3>
        <a className="menu-item" href="/">
          Peak Performance App
        </a>
      </h3>

      <a className="menu-item" href="/#howitworks">
        How it works
      </a>

      <a className="menu-item" href="/#getapp">
        Get the App
      </a>

      <a className="menu-item" href="/#team">
        Meet the Team
      </a>

      <a className="menu-item" href="/#listen">
        Listen to the Training
      </a>

    </Menu>
  );
};