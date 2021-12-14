// import ResponsiveAppBar from '../../organisms/AppBar'
import './Layout.scss'

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react'

function Layout(props) {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container>
   

       {props.children}
    </Container>
    </React.Fragment>
  );
};

export default Layout;
