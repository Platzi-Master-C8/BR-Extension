import "./CurrencySelector.scss";

import { CurrencyItem } from "Atoms/CurrencyItem/CurrencyItem";
import React from "react";
import flagCO from "Images/co.svg";
import flagMX from "Images/mx.svg";
import flagUS from "Images/us.svg";

function CurrencySelector() {
  return (
    <div>
      <section className="selector__container">
        <ul>
          <CurrencyItem
            flag={flagMX}
            country="México"
            currency="MXN pesos"
          />
          <CurrencyItem
            flag={flagUS}
            country="USA"
            currency="USA dolar"
          />
          <CurrencyItem
            flag={flagCO}
            country="Colombia"
            currency="COP pesos"
          />
        </ul>
      </section>
    </div>
  );
}

export { CurrencySelector };
