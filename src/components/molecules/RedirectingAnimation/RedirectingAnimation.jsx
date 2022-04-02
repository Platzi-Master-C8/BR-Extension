import React from "react";

import "./RedirectingAnimation.scss";
import gethiredLogo from "Images/gethired_logo.svg";

function RedirectingAnimation() {
  return (
    <div className="RedirectingAnimation">
      <div className="RedirectingAnimation__logo">
        <span>redirecting...</span>
        <img
          className="RedirectingAnimation__logo-img"
          src={gethiredLogo}
          alt=""
        />
        <div className="logoLines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="backgroundLines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export { RedirectingAnimation };
