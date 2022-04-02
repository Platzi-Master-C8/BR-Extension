import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.DOMAIN;
  const clientId = process.env.CLIENT_ID;
  const audience = process.env.AUDIENCE;
  const redirect = process.env.REDIRECT_URI;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirect}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
