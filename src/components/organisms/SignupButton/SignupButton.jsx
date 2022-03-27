import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
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
  );
};

export default SignupButton;