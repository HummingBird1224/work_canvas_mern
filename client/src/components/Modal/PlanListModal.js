import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import PlanListWrapper from '../PlanList/PlanListWrapper';
import './Modal.css'

const initialPlanList = [
  {
    id: 1,
    title: '美容師',
    plans: [
      {
        id: 1,
        job: '美容師免許なし',
        price: 16.5,
        senior: 0
      },
      {
        id: 2,
        job: '新卒／アシスタント',
        price: 22,
        license: '美容師免許有り',
        senior: 0
      },
      {
        id: 3,
        job: 'スタイリスト',
        price: 33,
        license: '美容師免許有り',
        senior: 1
      },
      {
        id: 4,
        job: '管理美容師',
        price: 38.5,
        license: '美容師免許有り',
        senior: 1
      },
    ]
  },
  {
    id: 2,
    title: 'アイリスト',
    plans: [
      {
        id: 1,
        job: '受付等',
        price: 16.5,
        license: '免許なし',
        senior: 0
      },
      {
        id: 2,
        job: '未経験者',
        price: 22,
        license: '免許あり（新卒・既卒）',
        senior: 0
      },
      {
        id: 3,
        job: '実務経験者',
        price: 33,
        license: '免許あり（3年未満）',
        senior: 1
      },
      {
        id: 4,
        job: '実務経験者',
        price: 38.5,
        license: '免許あり（3年以上）',
        senior: 1
      },
    ]
  },
  {
    id: 3,
    title: 'ネイリスト/エステ',
    plans: [
      {
        id: 1,
        job: '受付・未経験',
        price: 16.5,
        senior: 0
      },
      {
        id: 2,
        job: '専門orスクール',
        price: 22,
        license: '在学中・新卒・既卒',
        senior: 0
      },
      {
        id: 3,
        job: '実務経験者',
        price: 27.5,
        license: '3年未満',
        senior: 1
      },
      {
        id: 4,
        job: '実務経験者',
        price: 33,
        license: '3年以上',
        senior: 1
      },
    ]
  },
]

const PlanListModal = (props) => {
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
            {props.allPlans.length > 0 && props.allPlans.map((plan) => (
              plan.plan1 && <PlanListWrapper key={plan.id} props={plan} />
            ))}
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default PlanListModal;