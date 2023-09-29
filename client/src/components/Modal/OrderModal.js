import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import Alert from '../Alert/Alert'
import NoAvatar from '../../asset/img/default_profile.png'
import './Modal.css'

const initialUsersOrder = [
  {
    name: '星川豊',
    role: '管理者',
    order: 1,
    id: 1
  },
  {
    name: '谷本 和優',
    role: '採用担当者',
    order: 2,
    id: 2
  },
  {
    name: 'nonaka',
    role: '管理者',
    order: 3,
    id: 3
  },
]

const OrderModal = (props) => {
  const [usersOrder, setUsersOrder] = useState(initialUsersOrder)
  const [alertOpen, setAlertOpen] = useState(false)
  const handleClose = () => {
    props.handleChange(false)
  }
  const handleChange = (id, e) => {
    console.log(id, e.target.value)
    usersOrder.map((uOrder) => {
      if (uOrder.id == id) {
        uOrder.order = parseInt(e.target.value);
      }
    })
    const update = usersOrder;
    setUsersOrder(update)
  }
  const handleUpdate = () => {
    setAlertOpen(true);
    props.handleChange(false);
  }
  const handleAlertClose = (open) => {
    console.log(open)
    setAlertOpen(open);
  }
  return (
    <>
      <Modal
        open={props.open}
        className='fade-in-up animated'
      >
        <Box
          role="presentation"
          className='modal__background role__modal text-black'
        >
          <Box className='modal__body'>
            <h2 className='modal__title fw-700'>スタッフの並び順変更</h2>
            <p className='text-default'>
              候補者向けの募集などにスタッフとして表示される順番<br />
              表示順を1〜9999の数字で指定してください。数字が小さいほど上に表示されます。<br />
              同じ数字が指定されている場合、サービス登録順が並び順に反映されます。
            </p>
            <table className='table__editable'>
              <thead>
                <tr>
                  <th>名前</th>
                  <th>役割</th>
                  <th>並び順</th>
                </tr>
              </thead>
              <tbody>
                {usersOrder && usersOrder.map((uOrder) => (
                  <tr key={uOrder.id}>
                    <td>
                      <div className='enterprise__staff d-flex align-items-center'>
                        <figure>
                          <img src={NoAvatar} alt='avatar' />
                        </figure>
                        <p className='ml-2 mb-0'>{uOrder.name}</p>
                      </div>
                    </td>
                    <td>
                      {uOrder.role}
                    </td>
                    <td>
                      <input type='number'
                        step='1'
                        placeholder='数字を入力してください'
                        value={uOrder.order}
                        className='f__text__table'
                        onChange={(e) => handleChange(uOrder.id, e)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='button_wrapper d-flex justify-content-center'>
              <Button className=' mt-60  p-1 w-100 ' onClick={handleClose}>
                <span className='modal__button bg-white text-default'>キャンセル</span>
              </Button>
              <Button className=' mt-60  p-1 w-100 ' onClick={handleUpdate}>
                <span className='modal__button bg-blackgray text-white'>更新する</span>
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
      <Alert open={alertOpen} handleClose={handleAlertClose} text='更新しました!' />
    </>
  )
}

export default OrderModal;