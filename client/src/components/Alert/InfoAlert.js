import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import './Alert.css'

const InfoAlert = (props) => {
  return (
    <Box
      className={props.className}
    >
      <Alert
        severity='info'
        sx={{ background: '#e7e8ea', color: '#141f33', border: '1px solid #b8bbc1' }}
      >
        {props.text}
      </Alert>
    </Box>
  );
}

export default InfoAlert;
