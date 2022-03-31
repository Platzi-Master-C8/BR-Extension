import React, { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./Navbar.scss";
import gethiredIcon from "Images/gethired_icon.svg";

function Navbar({ title }) {
  const { user } = useAuth0();
  const imgRef = useRef(null);

  function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
  }

  useEffect(() => {
    if (!!user?.picture) {
      const base64 = getBase64Image(imgRef.current);
      console.log(base64);
    }
  }, [imgRef.current]);

  return (
    <header>
      <div className="Navbar">
        <div className="Navbar__title-icon-container">
          <div className="Navbar__icon">
            <img src={gethiredIcon} alt="GetHired Icon" />
          </div>
          <h1 className="Navbar__title">{title}</h1>
        </div>
        <div
          onClick={() =>
            chrome.tabs.create({
              url: "https://mf-extensions.vercel.app/vacancies",
            })
          }
          className="Navbar__picture-container"
        >
          {user && (
            <img
              ref={imgRef}
              src={user?.picture}
              alt="profile picture"
              id="superimagen"
            />
          )}
        </div>
      </div>
      <div className="divider"></div>
    </header>
  );
}

export { Navbar };
