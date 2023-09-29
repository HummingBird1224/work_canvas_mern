import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import './Modal.css'

const RoleModal = (props) => {
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
          <h2 className='modal__title fw-700'>役割について</h2>
          <section>
            <h2 className='title__lv2'>・管理者：</h2>
            <p>
              - WORKCANVASの契約代表者となります。<br />
              - サロンのメンバー追加の承認を実施できます（承認依頼のメールが送信されます。）<br />
              - 管理画面を編集できます。
            </p>
            <br />
            <p className='fs-12 fw-700'>
              ※複数人を指定できます。<br />
              ※管理者を変更できるのは現在の管理者だけになります。
            </p>
            <hr />
            <h2 className='title__lv2'>・採用担当者：</h2>
            <p>
              - サロンのメンバー追加の承認を実施できます（承認依頼のメールが送信されます。）<br />
              - 管理画面を編集できます。
            </p>
            <br />
            <p className='fs-12 fw-700'>
              ※複数人を指定できます。
            </p>
          </section>
          <Button className=' mt-60  p-1 w-100 ' onClick={handleClose}>
            <span className='modal__button bg-white text-default'>キャンセル</span>
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default RoleModal;