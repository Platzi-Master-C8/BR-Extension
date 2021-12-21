import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from 'react'

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function AppBarMenu(){

    return( 
        <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
        vertical: "top",
        horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
        vertical: "top",
        horizontal: "right"
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        >
        {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
        ))}
        </Menu>
        );
    }
export {AppBarMenu};