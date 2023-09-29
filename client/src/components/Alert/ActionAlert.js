import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

import './Alert.css'

const ActionAlert = (props) => {
  return (
    <Box className={props.className} >
      <Alert
        severity='info'
        sx={{ background: '#fcf7e5', color: '#141f33', border: '1px solid #e4c951' }}
        action={
          <Link
            to={'/enterprise/basicSurveyEnquete/' + props.link}
            className='modal__button text-default bg-white height-auto py-2'
          >
            一括回答
          </Link>
        }
      >
        {props.text}
      </Alert>
    </Box>
  );
}

export default ActionAlert;
