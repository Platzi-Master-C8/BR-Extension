import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import "./SignupButton.scss";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className='SignupButton'>
      <button
      className="btn btn-primary btn-block"
      onClick={() => {
        // const redirectUrl = chrome.identity.getRedirectURL('auth0');
        chrome.tabs.create({
          url: `${window.location.origin}/options.html`,
        })
        // loginWithRedirect({
        //   screen_hint: 'signup',
        // })
      }}
    >
      Sign Up
    </button>
    <button
    onClick={() => {
      console.log(localStorage.getItem("superToken"));
    }}
    >
      Read LocalStorage
    </button>
    </div>
  );
};

export default SignupButton;