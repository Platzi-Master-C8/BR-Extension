import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Options.scss";

function Options() {
  const {
    loginWithRedirect,
    isAuthenticated,
    getAccessTokenSilently,
    isLoading,
  } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      console.log("adentrooooo");
      loginWithRedirect();
    }
    console.log("🚀 ~ isLoading", isLoading);
    console.log("🚀 ~ authenticated", isAuthenticated);
  }, [isAuthenticated, isLoading]);

  const handleClick = async () => {
    console.log(await getAccessTokenSilently());
  };

  return (
    <div className="OptionsPage">
      <h1>Logged in!</h1>
    </div>
  );
}

export { Options };
