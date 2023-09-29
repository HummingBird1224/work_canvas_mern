import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

import Alert from '../Alert/Alert'
import './Modal.css'

const CardList = () => {
  return (
    <div className='credit__card__form'>
      <h4 className='fs-14 fw-700'>ご利用可能なカード一覧</h4>
      <div className='card__logo__list mb-30'>
        <img src='/asset/img/logo-visa.png' alt='card-logo' />
        <img src='/asset/img/logo-mastercard.png' alt='card-logo' />
        <img src='/asset/img/logo-jcb.png' alt='card-logo' />
        <img src='/asset/img/logo-amex.png' alt='card-logo' />
        <img src='/asset/img/logo-diner.png' alt='card-logo' />
        <img src='/asset/img/logo-discover.png' alt='card-logo' />
      </div>
      <div>
        <div className="tag tag__primary">必須</div>
        <p className=" ">カード番号</p>
        <div type='number' id='cardNumber' className='form__type__text' placeholder='123456789012345'>
          <iframe name="_payjpElements1_cardNumber"
            title="Secure payment input frame"
            scrolling="no"
            allow="payment"
            allowtransparency="true"
            className='credit__card__iframe'
            src="https://js.pay.jp/v2/iframe.1682731599632.html#locale=ja&amp;origin=https%3A%2F%2Fwork-canvas.com&amp;componentName=cardNumber&amp;controllerName=_payjpController1&amp;groupId=Elements1&amp;ltr=true&amp;style%5Bbase%5D%5B%3A%3Aplaceholder%5D%5Bcolor%5D=%23B8BBC1&amp;style%5Bbase%5D%5BfontSize%5D=16px&amp;style%5Bbase%5D%5BlineHeight%5D=40px&amp;style%5Binvalid%5D%5Bcolor%5D=%23F9494F&amp;disabled=false&amp;placeholder=1234567890123456&amp;hideIcon=false"
          >
          </iframe>
        </div>
      </div>
      <div>
        <div className="tag tag__primary">必須</div>
        <p className=" ">セキュリティコード</p>
        <div type='number' id='cardCvc' className='form__type__text' placeholder='※カード裏記載の３-４桁の番号'>
          <iframe
            name="_payjpElements1_cardCvc"
            title="Secure payment input frame"
            scrolling="no"
            allow="payment"
            allowtransparency="true"
            className='credit__card__iframe'
            src="https://js.pay.jp/v2/iframe.1682731599632.html#locale=ja&amp;origin=https%3A%2F%2Fwork-canvas.com&amp;componentName=cardCvc&amp;controllerName=_payjpController1&amp;groupId=Elements1&amp;ltr=true&amp;style%5Bbase%5D%5B%3A%3Aplaceholder%5D%5Bcolor%5D=%23B8BBC1&amp;style%5Bbase%5D%5BfontSize%5D=16px&amp;style%5Bbase%5D%5BlineHeight%5D=40px&amp;style%5Binvalid%5D%5Bcolor%5D=%23F9494F&amp;disabled=false&amp;placeholder=%E2%80%BB%E3%82%AB%E3%83%BC%E3%83%89%E8%A3%8F%E8%A8%98%E8%BC%89%E3%81%AE%EF%BC%93-%EF%BC%94%E6%A1%81%E3%81%AE%E7%95%AA%E5%8F%B7&amp;hideIcon=false"
          >
          </iframe>
        </div>
      </div>
      <div>
        <div className="tag tag__primary">必須</div>
        <p className=" ">有効期限</p>
        <div type='number' id='cardExpiry' className='form__type__text' placeholder=''>
          <iframe
            name="_payjpElements1_cardExpiry"
            title="Secure payment input frame"
            scrolling="no"
            allow="payment"
            allowtransparency="true"
            className='credit__card__iframe'
            src="https://js.pay.jp/v2/iframe.1682731599632.html#locale=ja&amp;origin=https%3A%2F%2Fwork-canvas.com&amp;componentName=cardExpiry&amp;controllerName=_payjpController1&amp;groupId=Elements1&amp;ltr=true&amp;style%5Bbase%5D%5B%3A%3Aplaceholder%5D%5Bcolor%5D=%23B8BBC1&amp;style%5Bbase%5D%5BfontSize%5D=16px&amp;style%5Bbase%5D%5BlineHeight%5D=40px&amp;style%5Binvalid%5D%5Bcolor%5D=%23F9494F&amp;disabled=false&amp;placeholder=%E6%9C%88%20%2F%20%E5%B9%B4&amp;hideIcon=false"
          >
          </iframe>
        </div>
      </div>
      <div>
        <div className="tag tag__primary">必須</div>
        <p className=" ">カード名義</p>
        <input type='text' id='cardOwner' className=' form__type__text' placeholder='TARO YAMADA' />
      </div>
    </div>
  )
}

const BankCard = () => {
  return (
    <div>
      <p>
        銀行振り込みの場合、以下の口座に料金のお支払いをお願いしております。<br />
        ご確認いただき、よろしければ「お支払い方法を更新する」よりお支払い方法の更新をお願いいたします。
      </p>
      <div className="border__box">
        <h4 className="fw-700 fs-13">振込先口座</h4>
        <p className="fs-13">三井住友銀行　新宿西口支店<br />普通預金　4377059</p>
        <h4 className="fw-700 fs-13">振込先宛名</h4>
        <p className="fs-13">カブシキガイシャグラム</p>
      </div>
    </div>
  )
}

const PayMethodModal = (props) => {
  const [tab, setTab] = useState('paymentMethod2');
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
  const handleUpdate = () => {
    setText('更新しました。');
    setError(false);
    props.handleChange(false);
    setAlertOpen(true);
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
            <div className='modal__form__wrapper'>
              <ul className='form__type__checkbox__card'>
                <li onClick={() => setTab('paymentMethod1')}>
                  <input type='radio' value='1' name='paymentMethod' id='paymentMethod1' />
                  <label htmlFor='paymentMethod1'>
                    カード払い
                    <div className='checked__icon'>
                      <CheckOutlinedIcon fontSize='small' />
                    </div>
                  </label>
                </li>
                <li onClick={() => setTab('paymentMethod2')}>
                  <input type='radio' value='2' name='paymentMethod' checked id='paymentMethod2' />
                  <label htmlFor='paymentMethod2'>
                    銀行振込
                    <div className='checked__icon'>
                      <CheckOutlinedIcon fontSize='small' />
                    </div>
                  </label>
                </li>
              </ul>
            </div>
            {tab == 'paymentMethod1' ? <CardList /> : <BankCard />}
            <div className='button_wrapper d-flex justify-content-center'>
              <Button className=' mt-60  p-1 w-100 ' onClick={handleClose}>
                <span className='modal__button bg-white text-default'>閉じる</span>
              </Button>
              {tab == 'paymentMethod1' ?
                <Button className=' mt-60  p-1 w-100 ' onClick={handleSend}>
                  <span className='modal__button bg-pink text-white'>未入力の項目があります</span>
                </Button> :
                <Button className=' mt-60  p-1 w-100 ' onClick={handleUpdate}>
                  <span className='modal__button bg-pink text-white'>お支払い方法を更新する</span>
                </Button>
              }
            </div>
          </Box>
        </Box>
      </Modal>
      <Alert open={alertOpen} handleClose={handleAlertClose} text={text} error={error} />
    </>
  )
}

export default PayMethodModal;