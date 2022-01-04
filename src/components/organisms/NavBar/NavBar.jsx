import './NavBar.scss';

import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import {NavBarMenu} from "../../molecules/Menu/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from '@mui/material';
import gethiredIcon from 'Images/gethired_icon.svg';

const ResponsiveNavBar = (props) => {

  return (
     <AppBar
      variant="popup"
      title="Bar"
     >
    <Container fixed px={0}>
      <Toolbar
          sx={{
            px:0,
            flexGrow: 1,
            boxShadow: 0,
            display: 'flex',
            alignItems: "center",
            }}
        >
          <Box
            sx={{
              px:0,
              flexGrow: 1,
              display:"flex",
              alignItems: "center"
             
            }}
          >
          <img src={gethiredIcon} alt="GetHired Icon" className='logo'/>
          <Typography
          component="span"
          sx={{ textAlign:"center",
                    fontStyle:'normal',
                    fontWeight: 'bold',
                    fontSize:'24px',
                    lineHeight:'24px',
                    letterSpacing:'0.18px',
                    color: "#2D333A"
              }}
          >
         {props.title}
        </Typography>
          </Box>
          <Divider/>
           <NavBarMenu />
          </Toolbar>
          <div className="divider"> 
          <Box variant="divid"  component="div"/>
          </div>
      </Container>
    </AppBar>
   );
};
export {ResponsiveNavBar}
