import React from 'react';
import ReactDOM from 'react-dom';
import { Options } from './pages/Options/Options';
import Auth0ProviderWithHistory from './components/atoms/auth0Provider'

import './styles/global.scss'

ReactDOM.render(
  <Auth0ProviderWithHistory>
    <Options />
  </Auth0ProviderWithHistory>,
  document.getElementById('options')
)
