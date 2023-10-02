import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';

import './Layout.css'

const HomeLayout = (props) => {

  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <div className='main__page'>
        {props.children}
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default HomeLayout;