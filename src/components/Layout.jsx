import React from 'react'

import './styles/Layout.scss'

function Layout(props) {
  return (
    <div className="container">
      {props.children}
    </div>
  );
};

export { Layout };
