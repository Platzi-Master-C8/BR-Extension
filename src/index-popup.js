import './styles/global.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './pages/App/App';
import Auth0ProviderWithHistory from './components/atoms/auth0Provider'

ReactDOM.render(
   <Auth0ProviderWithHistory>
      <App />
   </Auth0ProviderWithHistory>,
   document.getElementById('app')
);
 
