import "./CurrencySelector.scss";

import { CurrencyItem } from "Atoms/CurrencyItem/CurrencyItem";
import React from "react";
import flagCO from "Images/co.svg";
import flagMX from "Images/mx.svg";
import flagUS from "Images/us.svg";

function CurrencySelector({ setSelectedCurrency }) {

  const handleCurrency = e => {
    // console.log(e.target.getAttribute('flag'))
    setSelectedCurrency({
      code: e.target.getAttribute('code'),
      flag: e.target.getAttribute('flag')
    })
  }
  
  return (
    <div>
      <section className="selector__container">
        <ul>
          <CurrencyItem
            flag={flagMX}
            country="México"
            currency="MXN pesos"
            currencyCode="MXN"
            onClick={handleCurrency}
          />
          <CurrencyItem
            flag={flagUS}
            country="USA"
            currency="USA dolar"
            currencyCode="USD"
            onClick={handleCurrency}
          />
          <CurrencyItem
            flag={flagCO}
            country="Colombia"
            currency="COP pesos"
            currencyCode="COP"
            onClick={handleCurrency}
          />
        </ul>
      </section>
    </div>
  );
}

export { CurrencySelector };
