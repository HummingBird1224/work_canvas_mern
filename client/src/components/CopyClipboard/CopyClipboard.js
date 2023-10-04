import React, { useState } from 'react';

import Alert from '../Alert/Alert'

const CopyToClipboard = (props) => {
  const [alertOpen, setAlertOpen] = useState(false)
  if (props.open && !alertOpen) {
    console.log('in')
    navigator.clipboard.writeText(props.text)
      .then(() => setAlertOpen(true))
      .catch((error) => console.error('Error copying text:', error));
  }
  const handleAlertClose = (open) => {
    setAlertOpen(open);
    console.log(open)
  }
  return (
    <>
      <Alert open={alertOpen} handleClose={handleAlertClose} text='コピーされました' />
    </>
  )
}

export default CopyToClipboard;