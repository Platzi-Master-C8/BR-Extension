import * as React from "react";

import AppBar from "@mui/material/AppBar";
import AppBarMenu from "../molecules/Menu/Menu"
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Logo from "../components/Logo/Logo.jsx";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const NavBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation="0"
      title="Bar"
     >
      <Container
        sx={{  
          display: { xs: "flex" },
          alignItems: "center"
        }}
      >
        <Toolbar
          sx={{
            flexGrow: 1,
            boxShadow: 0,
            display: { xs: "flex", md: "none" },
            alignItems: "center"
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center"
            }}
          >
          <Logo />
          <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "flex" } }}
        >
props.title
        </Typography>
          </Box>
 
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
           <AppBarMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export {NavBar}