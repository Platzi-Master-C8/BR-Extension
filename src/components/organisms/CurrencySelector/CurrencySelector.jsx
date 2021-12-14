import React from "react";
import { CurrencyItem } from "Atoms/CurrencyItem/CurrencyItem";

import "./CurrencySelector.scss";
import flagMX from "Images/mx.svg";
import flagUS from "Images/us.svg";
import flagCO from "Images/co.svg";

function CurrencySelector() {
  return (
    <div>
      <section className="selector__container">
        <ul>
          <CurrencyItem
            flag={flagMX}
            country="México"
            currency="MXN peso"
          />
          <CurrencyItem
            flag={flagUS}
            country="USA"
            currency="USA dolar"
          />
          <CurrencyItem
            flag={flagCO}
            country="Colombia"
            currency="COP peso"
          />
        </ul>
      </section>
    </div>
  );
}

export { CurrencySelector };
