import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeProvider } from "@mui/material/styles";
import { TrackNew } from "../Popup/TrackNew";
import { Vacancies } from "../Vacancies/Vacancies";
import customTheme from "../../styles/customTheme";

const routes = [
  {
    name: "newTrack",
    component: <TrackNew />,
  },
  {
    name: "vacancies",
    component: <Vacancies />,
  },
];

function App() {
  const {
    isAuthenticated,
    getAccessTokenSilently,
    isLoading,
    loginWithRedirect,
  } = useAuth0();
  const [authenticated, setAuthenticated] = useState(isAuthenticated);
  const [view, setView] = useState(routes[0]);
  const [token, setToken] = useState("");

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const activeTab = tabs[0];
      const activeTabId = activeTab.id;
      console.log("🚀 ~ activeTab.id", activeTab.id);
      localStorage.setItem("activeTabId", activeTabId);
    });
    if (!isAuthenticated && !isLoading) {
      console.log("adentrillo");
      chrome.tabs.create({
        url: `${window.location.origin}/options.html`,
      });
    }
  }, [isAuthenticated, isLoading]);

  useEffect(async () => {
    setAuthenticated(isAuthenticated);
  }, [isAuthenticated]);

  return <ThemeProvider theme={customTheme}>{view.component}</ThemeProvider>;
}

export { App };
