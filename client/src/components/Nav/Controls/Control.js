import React, { useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import Sidebar from '../../Sidebar/Sidebar';
import './Control.css'

const Control = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="control__bar__container">
      <div className="controls__container">
        <div className="control">
          <Link to="/enteprise/notifications">
            <NotificationsNoneIcon color="white" fontSize="large" />
          </Link>
        </div>
        <div className="control">
          <Link onClick={() => setOpen(!open)}>
            <MenuIcon color="white" fontSize="large" />
          </Link>
        </div>
        {open && <Sidebar />}
      </div>
    </div>
  );
}

export default Control;