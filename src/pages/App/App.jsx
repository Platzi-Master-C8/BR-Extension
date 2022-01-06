import React, { useState } from "react";
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
  const [view, setView] = useState(routes[1]);
  return <ThemeProvider theme={customTheme}>{view.component}</ThemeProvider>;
}

export { App };
