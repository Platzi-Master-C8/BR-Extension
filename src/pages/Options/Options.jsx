import './Options.scss';

import { CurrencyItem } from '../../components/atoms/CurrencyItem/CurrencyItem';
import React from 'react'
import flag from "Images/mx.svg";

function Options() {
  return (
    <div>
      <ul>
        <CurrencyItem 
          flag={flag}
          country="México"
          currency="MXN pesos"
        />
      </ul>
    </div>
  );
};

export { Options };
