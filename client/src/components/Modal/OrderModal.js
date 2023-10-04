import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import { updateMembersOrder } from '../../actions/action';
import Alert from '../Alert/Alert'
import NoAvatar from '../../asset/img/default_profile.png'
import './Modal.css'

const OrderModal = (props) => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const handleClose = () => {
    props.handleChange(false)
  }
  const handleChange = (id, e) => {
    const newMembers = [...props.members];
    newMembers.map((member) => {
      if (member.id == id) {
        member.order = parseInt(e.target.value);
      }
    });
    props.setMembers([...newMembers]);
  }
  const handleUpdate = async () => {
    const newMembers = [...props.members.map(member => (
      { id: member.id, order: member.order }
    ))];
    await updateMembersOrder(newMembers)
      .then(res => {
        if (res.status == '200') {
          props.setMembers(res.data);
          setText('更新しました!');
          setError(false);
          props.handleChange(false);
        }
        else {
          setText('更新が失敗しました!');
          setError(false);
        }
      })
      .catch(err => {
        setText('更新が失敗しました!');
        setError(false);
      })
    setAlertOpen(true);

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
                {props.members.length > 0 && props.members.map((member) => (
                  <tr key={member.id}>
                    <td>
                      <div className='enterprise__staff d-flex align-items-center'>
                        <figure>
                          <img src={NoAvatar} alt='avatar' />
                        </figure>
                        <p className='ml-2 mb-0'>{member.username}</p>
                      </div>
                    </td>
                    <td>
                      {member.role == 'administrator' ? '管理者' : '採用担当者'}
                    </td>
                    <td>
                      <input type='number'
                        step='1'
                        placeholder='数字を入力してください'
                        value={member.order}
                        className='f__text__table'
                        max='9999'
                        onChange={(e) => handleChange(member.id, e)} />
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
      <Alert open={alertOpen} handleClose={(open) => setAlertOpen(open)} text={text} error={error} />
    </>
  )
}

export default OrderModal;