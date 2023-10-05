import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { changePlans } from '../../actions/action';
import Alert from '../Alert/Alert'
import PlanListModal from './PlanListModal';
import './Modal.css'

const plans = [
  {
    id: 1,
    name: '美容師'
  },
  {
    id: 2,
    name: 'アイリスト'
  },
  {
    id: 3,
    name: 'ネイリスト'
  },
  {
    id: 4,
    name: 'エステティシャン'
  },
]

const PlanApplyModal = (props) => {
  const [addedPlanIds, setAddedPlanIds] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [mail, setMail] = useState('');
  const [error, setError] = useState(false);
  const [text, setText] = useState('');
  const selectorChange = (id, e) => {
    if (e.target.checked) {
      setAddedPlanIds([...addedPlanIds, id]);
    }
    else {
      const newArray = [...addedPlanIds];
      const index = newArray.indexOf(id);
      newArray.splice(index, 1)
      index !== -1 &&
        setAddedPlanIds([...newArray]);
    }
  }
  const handleClick = async () => {
    if (addedPlanIds.length == 0) {
      setAlertOpen(true);
      setError(true);
      setText('お申し込み業種は変更されていません。')
    }
    else {
      await changePlans(addedPlanIds)
        .then(res => {
          if (res.status == '200') {
            setAlertOpen(true);
            setError(false);
            setText('お申し込み業種は変更されました。');
            props.handleChange(false);
            props.setChanged(true);
            setAddedPlanIds([]);
          }
        })
    }
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
            <div className='modal__close text-right' onClick={() => props.handleChange(false)}>
              <CloseOutlinedIcon />
            </div>
            <div className='d-flex justify-content-between'>
              <h2 className='modal__title fw-700'>お申し込み業種</h2>

            </div>
            <strong>紹介ご希望の業種を全て選択してください</strong>
            <small>※すでにご紹介プランをご活用中のサロン様には、追加料金は発生しませんのでご安心ください</small>
            <div className='modal__selector mt-20'>
              {plans.map(plan => (
                <p className="form--type_checkbox_group" key={plan.id}>
                  <input
                    type="checkbox"
                    id={'job' + plan.id}
                    className="required"
                    name="selectors"
                    value={plan.id}
                    disabled={props.planIds.includes(plan.id)}
                    checked={props.planIds.includes(plan.id) || addedPlanIds.includes(plan.id)}
                    onChange={(e) => selectorChange(plan.id, e)} />
                  <label htmlFor={'job' + plan.id} className="u-m-reset u-ml-xxs">
                    <span className="u-fs-12">
                      {plan.name}<br />
                      {props.planIds.includes(plan.id) && <span>（現在お申し込みの業種です）</span>}
                    </span>
                  </label>
                </p>
              ))}
            </div>
            <div className='button_wrapper d-flex flex-column justify-content-center'>
              <Button className=' mt-60  p-1 w-100 ' onClick={handleClick}>
                <span className='modal__button bg-pink text-white w-80' >次へ</span>
              </Button>
              <p className='my-2 text-center cursor-pointer text-underline' onClick={() => setModalOpen(true)}>
                料金プランのご確認はこちら
              </p>
            </div>
          </Box>
        </Box>
      </Modal>
      <Alert open={alertOpen} handleClose={(open) => setAlertOpen(open)} text={text} error={error} />
      <PlanListModal open={modalOpen} handleChange={(open) => setModalOpen(open)} allPlans={props.allPlans} />
    </>
  )
}

export default PlanApplyModal;