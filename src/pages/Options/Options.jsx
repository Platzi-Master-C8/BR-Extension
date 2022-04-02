import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { RedirectingAnimation } from "Molecules/RedirectingAnimation/RedirectingAnimation";
import { LoggedIn } from "Atoms/LoggedIn/LoggedIn";

import "./Options.scss";

function Options() {
  const [authenticated, setAuthenticated] = useState();

  const {
    loginWithRedirect,
    isAuthenticated,
    getAccessTokenSilently,
    isLoading,
  } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      setAuthenticated(false);
      loginWithRedirect();
    }
    if (!!isAuthenticated && !isLoading) {
      setAuthenticated(true);
      const activeTab = parseInt(localStorage.getItem("activeTabId"));
      setTimeout(() => {
        window.close();
        chrome.tabs.update(activeTab, { selected: true });
      }, 300);
    }
  }, [isAuthenticated, isLoading]);

  return (
    <div className="OptionsPage">
      {!!authenticated && <LoggedIn message="Logged In" />}
      {!isAuthenticated && !isLoading && <RedirectingAnimation />}
    </div>
  );
}

export { Options };
