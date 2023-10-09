import React from 'react';

import Header from '../components/Header/Header.js';
import Sidebar from '../components/Sidebar/Sidebar.js';
import Footer from '../components/Footer/Footer.js';

import '../asset/main.css';

const FeatureLayout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <main className='enterprise_main'>
        {props.children}
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default FeatureLayout;