import React from 'react';

import Header from '../components/Header/Header';
import './Layout.css';


const AuthLayout = (props) => {
  const path = props.location.pathname;
  const login = path.includes('login');
  return (
    <React.Fragment>
      {login && <Header />}
      <div className={login ? 'auth__page' : ''}>
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default AuthLayout;