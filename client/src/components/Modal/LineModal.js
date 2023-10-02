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

const LineModal = (props) => {
  const handleClose = () => {
    props.handleChange(false);
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
            
            <div className="modal__form__wrapper e--c">
              <div className="modal__line">
                <div className="u-ta-c">
                  <h3>
                    <span>
                      <img
                        src="https://cdn1.work-canvas.com/assets/images/icons/icon-line.svg?14"
                        alt=""
                        className='line__icon'
                        decoding="async"
                        loading="lazy" />
                      LINE友達追加
                    </span>
                    のお願い
                  </h3>
                </div>
                <p>LINE友達追加をすれば、求職者様から質問や応募があった際、紹介担当者から情報共有やご相談を、LINEにて迅速にお送りさせていただきます。</p>
                <p>お手数ですが下記のQRコードから、<strong>LINE友達追加</strong>をお願いいたします。</p>
                <p className="u-ta-c qr">
                  <div className="qr-code-container">
                    <img
                      src="data:image/png;base64,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"
                      className="qr-code"
                      style={{ width: '200px', height: '200px' }} />
                  </div>
                </p>
                <div className="u-ta-c">
                  <a
                    href=""
                    className="button button--type_line u-mb-xs"
                    id="runLINELoginSP">LINE友達追加をする</a>
                </div>
                <div className="list-style-on u-fs-12">
                  <ul className="u-c-lightgray asterisk">
                    <li>ご興味いただいた求職者様へはできるだけ早く対応することが、入社率に大きく繋がります。</li>
                    <li>お互いにマッチした人材をご紹介させていただく為に、採用状況を確認させていただくアンケートなども、お送りさせていただきます。</li>
                  </ul>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default LineModal;