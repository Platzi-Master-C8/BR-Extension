import React from 'react'

import './Navbar.scss'
import gethiredIcon from '@images/gethired_icon.svg';

function Navbar(props) {
  return (
    <header>
      <div className="Navbar">
        <div className="Navbar__icon">
          <img src={gethiredIcon} alt="GetHired Icon" />
        </div>
        <h1 className="Navbar__title">
          {props.title}
        </h1>
      </div>
      <div className="divider"></div>
    </header>
  );
};

export { Navbar };
