import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import Alert from '../Alert/Alert'
import PlanListModal from './PlanListModal';
import './Modal.css'

const plans = [
  {
    id: 1,
    name: '美容師',
    selected: 1
  },
  {
    id: 2,
    name: 'アイリスト',
    selected: 1
  },
  {
    id: 3,
    name: 'ネイリスト',
    selected: 0
  },
  {
    id: 4,
    name: 'エステティシャン',
    selected: 0
  },
]

const PlanApplyModal = (props) => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [mail, setMail] = useState('');
  const [error, setError] = useState(false);
  const [text, setText] = useState('success');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleClose = () => {
    props.handleChange(false)
  }
  const handleClick = () => {
    setModalOpen(true);
  }
  const handleChange = (open) => {
    setModalOpen(open);
  }
  const selectorChange = (e) => {
    console.log(e.target.value);
  }
  const handleSend = () => {
    if (mail == '') {
      setError(true);
      setText('宛先アドレスを記入してください。');
    }
    else if (!emailRegex.test(mail)) {
      setError(true);
      setText('入力したメールアドレスが正しいことを確認ください。');
    }
    else {
      setText('メールを送信しました。');
      setError(false);
      props.handleChange(false);
    }
    setAlertOpen(true);
    // props.handleChange(false);
  }
  const handleAlertClose = (open) => {
    console.log(open)
    setAlertOpen(open);
  }
  const changeMail = (e) => {
    setMail(e.target.value);
  }
  return (
    <>
      <Modal
        open={props.open}
        className='fade-in-up animated'
      >
        <Box
          role="presentation"
          className='modal__background plan__modal text-black'
        >
          <Box className='modal__body'>
            <div className='modal__close text-right' onClick={handleClose}>
              <CloseOutlinedIcon />
            </div>
            <div className='d-flex justify-content-between'>
              <h2 className='modal__title fw-700'>お申し込み業種</h2>

            </div>
            <strong>紹介ご希望の業種を全て選択してください</strong>
            <small>※すでにご紹介プランをご活用中のサロン様には、追加料金は発生しませんのでご安心ください</small>
            <div className='modal__selector mt-20'>
              {plans.map(plan => (
                <label className='fs-14 form__type__checkbox mb-10' htmlFor={'job' + plan.id} key={plan.id}>
                  {
                    plan.selected ?
                      <input type='checkbox' name='selectors' value={plan.id} id={'job' + plan.id} className='' disabled checked /> :
                      <input type='checkbox' name='selectors' value={plan.id} id={'job' + plan.id} className='' onChange={selectorChange} />
                  }
                  {plan.name}<br />
                  {plan.selected == 1 && <span>（現在お申し込みの業種です）</span>}
                </label>
              ))}
            </div>
            <div className='button_wrapper d-flex flex-column justify-content-center'>
              <Button className=' mt-60  p-1 w-100 ' >
                <span className='modal__button bg-pink text-white w-80'>次へ</span>
              </Button>
              <p className='my-2 text-center cursor-pointer text-underline' onClick={handleClick}>
                料金プランのご確認はこちら
              </p>
            </div>
          </Box>
        </Box>
        {/* <Alert open={alertOpen} handleClose={handleAlertClose} text={text} error={error} /> */}
      </Modal>
      <PlanListModal open={modalOpen} handleChange={handleChange} />
    </>
  )
}

export default PlanApplyModal;