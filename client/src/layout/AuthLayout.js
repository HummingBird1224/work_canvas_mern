import React from 'react';

import Header from '../components/Header/Header';
import './Layout.css'

const HomeLayout = (props) => {

  return (
    <React.Fragment>
      <Header />
      <div className='auth__page'>
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default HomeLayout;