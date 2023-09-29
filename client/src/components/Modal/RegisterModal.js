import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import './Modal.css'

const RegisterModal = (props) => {
  const handleClose = () => {
    props.handleChange(false)
  }
  return (
    <Modal
      open={props.open}
      className='fade-in-up animated'
    >
      <Box
        role="presentation"
        className='modal__background role__modal text-black'
      >
        <Box className='modal__body'>
          <h2 className='modal__title fw-700'>スタッフ登録の手順</h2>
          <div className='guide'>
            <p className='mb-0 text-default'>①まずはじめに、登録URLを送付します。</p>
          </div>
          <div className='icon__arrow__step'>Next</div>
          <div className='guide'>
            <p className='mb-0 text-default'>②次に、スタッフにサインアップしてもらいます。</p>
          </div>
          <div className='icon__arrow__step'>Next</div>
          <div className='guide'>
            <p className='mb-0 text-default'>
              ③スタッフがサインアップすると、管理者と採用担当者に承認依頼メールが届きます。
            </p>
          </div>
          <div className='icon__arrow__step'>Next</div>
          <div className='guide'>
            <p className='mb-0 text-default'>
              ④メールに書かれたURLからこのページにアクセスして承認すると登録が完了します。
            </p>
            <p className='mb-0 fc-lightgray fs-12'>※承認するときにスタッフごとに権限を指定することが出来ます。</p>
          </div>
          <Button className=' mt-60  p-1 w-100 ' onClick={handleClose}>
            <span className='modal__button bg-white text-default'>閉じる</span>
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default RegisterModal;