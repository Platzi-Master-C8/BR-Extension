import React from "react";

import "./CurrencyInput.scss";
import { ReactComponent as Flag } from "Images/mx.svg";
import { ReactComponent as ArrowDown } from "Images/arrow_down.svg";
import { CurrencySelector } from "../../organisms/CurrencySelector/CurrencySelector";

function CurrencyInput({ onCurrencyClick, openCurrency, setOpenCurrency }) {
  
  React.useEffect(() => {
    const currencyContainer = document.querySelector(
      ".currency__container"
    );
    if (!!openCurrency) {
      currencyContainer.classList.add("open");
    } else {
      currencyContainer.classList.remove("open");
    };

    document.addEventListener("mousedown", e => {
      if(!currencyContainer.contains(e.target)) {
        setOpenCurrency(false);
      }
    });

  }, [openCurrency]);

  

  return (
      <div className="currency__container" onClick={onCurrencyClick}>
        <button className="currency__button" />
        <div className="currency__input-container cell__container">
          <div>MXN</div>
          <ArrowDown className="currency__input-arrow" />
        </div>
        <div className="currency__flag-container cell__container">
          <Flag className="currency__flag" />
        </div>
        <div className="currencySelector__container">
          {!!openCurrency && <CurrencySelector />}
        </div>
      </div>
  );
}

export { CurrencyInput };
