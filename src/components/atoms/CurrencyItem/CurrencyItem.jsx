import React from "react";

import "./CurrencyItem.scss";

function CurrencyItem({
  flag,
  country,
  currency,
  currencyCode,
  onClick,
}) {
  return (
    <li
      className="currencyItem"
      onClick={onClick}
      flag={flag}
      code={currencyCode}
      value={currency}
    >
      <div className="currencyItem__flag">
        <img src={flag} alt="currency country flag" />
      </div>
      <div className="currencyItem__title">
        <h2>{country}</h2>
        <p>{currency}</p>
      </div>
    </li>
  );
}

export { CurrencyItem };
