import React from "react";
import DoneIcon from "@mui/icons-material/Done";

import "./LoggedIn.scss";

function LoggedIn({ message }) {
  return (
    <div className="LoggedIn__circle">
      <DoneIcon sx={{ fontSize: 200 }} />
      <span>{message}</span>
    </div>
  );
}

export { LoggedIn };
