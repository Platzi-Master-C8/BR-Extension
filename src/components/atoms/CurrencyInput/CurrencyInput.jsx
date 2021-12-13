import React from "react";

import "./CurrencyInput.scss";
import { ReactComponent as Flag } from "Images/mx.svg";
import { ReactComponent as ArrowDown } from "Images/arrow_down.svg";

function CurrencyInput() {
  return (
    <div className="currency__container">
      <div className="currency__input-container cell__container">
        <div>MXN</div>
        <ArrowDown className="currency__input-arrow"/>
      </div>
      <div className="currency__flag-container cell__container">
        <Flag className="currency__flag" />
      </div>
    </div>
  );
}

export { CurrencyInput };
