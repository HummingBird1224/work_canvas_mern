import React from 'react';
import { useParams } from 'react-router-dom';

import Feature1 from './List/Feature1';
import Feature2 from './List/Feature2';
import Feature3 from './List/Feature3';
import Feature4 from './List/Feature4';
import Feature5 from './List/Feature5';
import Feature6 from './List/Feature6';
import Feature7 from './List/Feature7';
import Feature8 from './List/Feature8';
import Feature9 from './List/Feature9';
import Feature10 from './List/Feature10';
import Feature11 from './List/Feature11';
import Feature12 from './List/Feature12';
import Feature13 from './List/Feature13';

const Features = () => {
  const { id } = useParams();
  switch (id) {
    case '1':
      return <Feature1 featureId={parseInt(id)}/>
    case '2':
      return <Feature2 featureId={parseInt(id)}/>
    case '3':
      return <Feature3 featureId={parseInt(id)}/>
    case '4':
      return <Feature4 featureId={parseInt(id)}/>
    case '5':
      return <Feature5 featureId={parseInt(id)}/>
    case '6':
      return <Feature6 featureId={parseInt(id)}/>
    case '7':
      return <Feature7 featureId={parseInt(id)}/>
    case '8':
      return <Feature8 featureId={parseInt(id)}/>
    case '9':
      return <Feature9 featureId={parseInt(id)}/>
    case '10':
      return <Feature10 featureId={parseInt(id)}/>
    case '11':
      return <Feature11 featureId={parseInt(id)}/>
    case '12':
      return <Feature12 featureId={parseInt(id)}/>
    case '13':
      return <Feature13 featureId={parseInt(id)}/>
    default :
      return <Feature1 featureId={1}/>
  };
}

export default Features;
