import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import Alert from '../Alert/Alert'
import NoAvatar from '../../asset/img/default_profile.png'
import './Modal.css'

const MailModal = (props) => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [mail, setMail] = useState('');
  const [error, setError] = useState(false);
  const [text, setText] = useState('success');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleClose = () => {
    props.handleChange(false)
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
          className='modal__background role__modal text-black'
        >
          <Box className='modal__body'>
            <h2 className='modal__title fw-700'>メールアドレスでメンバーを招待</h2>
            <table className='table__editable'>
              <tbody>
                <tr>
                  <th>宛先アドレス</th>
                  <td>
                    <input type='text'
                      className='f__text__table w-100'
                      name='to'
                      placeholder='招待メンバーのメールアドレスを入力してください'
                      onChange={changeMail}
                    />
                  </td>
                </tr>
                <tr>
                  <th>招待メール本文</th>
                  <td>
                    <textarea cols='30' rows='5'
                      className='f__textarea'
                      name='body'
                    >
                      《WORKCANVAS》という美容師・アイリスト・ネイリストの転職支援サービスを利用することにいたしました。
                      エージェントが当社の「想い」や「環境」を基にして、マッチした求職者を紹介してくれるサービスです。
                      求職者から当社の求人に応募がありましたら、当社スタッフが日程調整を行う必要があります。
                      つきましては、求職者と日程調整を行っていただくため、まずは下記のURLをクリックして会員登録をお願いいたします。
                      不安な点などあれば連絡ください！
                      是非よろしくお願いします。
                      https://work-canvas.com/invite/ieu4wY6kHLcnCdyu4
                    </textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='button_wrapper d-flex justify-content-center'>
              <Button className=' mt-60  p-1 w-100 ' onClick={handleClose}>
                <span className='modal__button bg-white text-default'>キャンセル</span>
              </Button>
              <Button className=' mt-60  p-1 w-100 ' onClick={handleSend}>
                <span className='modal__button bg-pink text-white'>送信する</span>
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
      <Alert open={alertOpen} handleClose={handleAlertClose} text={text} error={error} />
    </>
  )
}

export default MailModal;