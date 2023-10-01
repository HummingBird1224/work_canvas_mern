import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import './Modal.css'

const ConfirmModal = (props) => {
  const handleClose = () => {
    props.handleChange(false)
  }
  return (
    <Modal
      open={props.open}
      onClose={handleClose}
    >
      <Box className='confirm__modal'>
        <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
          <h5 className='font-800'>削除してもいいですか？</h5>
          <p>一度削除したものは戻すことができません。</p>
          <div className='modal__button__wrapper d-flex align-items-center justify-content-center mt-20'>
            <button className='yes__button ' onClick={() => props.handleDelete(true)}>確認</button>
            <button className='no__button' onClick={handleClose}>キャンセル</button>
          </div>
        </div>
      </Box>
    </Modal>
  )
}

export default ConfirmModal;