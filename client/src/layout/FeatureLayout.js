import React from 'react';

import Header from '../components/Feature/Header.jsx';
import Sidebar from '../components/Feature/Sidebar.jsx';
import Footer from '../components/Feature/Footer.jsx';

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