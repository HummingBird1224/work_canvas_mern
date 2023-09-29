import React, { useState } from 'react';
import { Box, IconButton, Menu } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import Sidebar from '../../Sidebar/Sidebar';
import './Control.css'

const Control = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className="control__bar__container">
      <div className="controls__container">
        <div className="control">
          <Link to="/enteprise/notifications">
            <NotificationsNoneIcon color="white" fontSize="large" />
          </Link>
        </div>
        <div className="control text-white">
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white' }}>
              <MenuIcon color="white" fontSize="large" />
            </IconButton>
            <Menu
              sx={{ mt: '45px', position: 'relative' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Sidebar menu={true} />
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Control;