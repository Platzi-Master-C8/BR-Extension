import React from 'react'
import { CurrencyItem } from '../../components/atoms/CurrencyItem/CurrencyItem';

import './Options.scss';
import flag from "Images/mx.svg";

function Options() {
  return (
    <div>
      <ul>
        <CurrencyItem 
          flag={flag}
          country="México"
          currency="MXN peso"
        />
      </ul>
    </div>
  );
};

export { Options };
