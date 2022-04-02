import React, { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getDataBlob } from "../../../utils/imgToBase64";

import "./Navbar.scss";
import gethiredIcon from "Images/gethired_icon.svg";

function Navbar({ title }) {
  const { user } = useAuth0();
  const imgRef = useRef(null);

  useEffect(() => {
    if (!!user?.picture) {
      console.log(user.picture);
      getDataBlob(user.picture).then(res =>
        localStorage.setItem("userPhoto", res)
      );
    }
  }, [imgRef.current, user]);

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
          <img
            ref={imgRef}
            src={
              user?.picture ? user.picture : localStorage.getItem("userPhoto")
            }
            alt="profile picture"
            id="superimagen"
          />
        </div>
      </div>
      <div className="divider"></div>
    </header>
  );
}

export { Navbar };
