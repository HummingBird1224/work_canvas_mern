import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

import './Alert.css'

const ConfirmAlert = (props) => {
  // console.log(props.text, props.open)
  const handleClose = () => {
    props.handleClose(false);
  }

  if (props.open) {
    return (
      <Box
        className={props.error ? 'border__error alert__box bg-white' : 'alert__box bg-white'}
        sx={{ color: '#ff6c8a' }}
      >
        <Collapse in={props.open}>
          <Alert
            icon={false}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleClose}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            className={props.error ?
              'fw-700 bg-white fs-16 align-items-center color__error' :
              'fw-700 bg-white fs-16 align-items-center color__default'
            }
          // sx={{ fontSize: 'l.5rem' }}
          // variant='outlined'
          // severity='error'
          >
            {props.text}
          </Alert>
        </Collapse>
      </Box>
    );
  }
}

export default ConfirmAlert;
