import React from "react";

import './CheckBox.scss';

function CheckBox() {
  return (
    <div className="checkbox__container">
      <label className="checkbox__container-label">
        <input type="checkbox" className="checkbox__container-input" />
      </label>
      <span>Remote</span>
    </div>
  );
}

export { CheckBox };
