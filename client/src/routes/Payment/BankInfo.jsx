import {  useEffect, useState } from "react";

import Alert from '../../components/Alert/Alert'
import './Payment.css'

const bankInfo={
  name:'ＰａｙＰａｙ',
  branch:'つばめ',
  accountType:'1',
  accountNumber:'7656880',
  accountHolder:'ホシカワユタカ',
}

const BankInfo = () => {
  const [bank, setBank]=useState(bankInfo);
  const [open, setOpen]=useState(false);
  const handleChange=(e)=>{
    const {name, value} = e.target;
    setBank({...bank, [name]:value});
  }
  const handleSubmit=()=>{
    setOpen(true);
  }
  const handleClose=(open)=>{
    setOpen(open);
  }
  return ( 
    <div className="enterprise__container">
      <div className="enterprise__box ">
        <div className="form__wrapper text-default w-80 form__edit billing__info">
          <h2 className="modal__title smaller fw-700">紹介手数料返金口座</h2>
          <div>
            <p className="mb-1 fw-700 fs-13">銀行名</p>
            <input 
              type='text' 
              name='name' 
              className='form__type__text companyName' 
              value={bank.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="mb-1 fw-700 fs-13">支店名</p>
            <input 
              type='text' 
              name='branch' 
              className='form__type__text companyName ' 
              value={bank.branch}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex w-100 justify-content-between">
            <div>
              <div className="tag tag__primary">必須</div>
              <p className="mb-1 fw-700 fs-13">預金種目</p>
              <select 
                name='accountType' 
                className="form__type__select" 
                value={bank.accountType}
                onChange={handleChange}
              >
                <option value='none'>選択してください</option>
                <option value='1' >普通預金</option>
                <option value='2' >当座預金</option>
                <option value='3' >貯蓄預金</option>
              </select>
            </div>
            <div className="w-50">
              <div className="tag tag__primary">必須</div>
              <p className="mb-1 fw-700 fs-13">口座番号</p>
              <input 
                type='text' 
                name='accountNumber' 
                className='form__type__text companyName' 
                value={bank.accountNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">口座名義</p>
            <input 
              type='text' 
              name='accountHolder' 
              className='form__type__text companyName' 
              value={bank.accountHolder}
              onChange={handleChange}
            />
          </div>
          <div className="fc-lightgray fs-12 fc-pink">
            ※口座名義は、通帳に記載されている名前を全角カタカナでご入力ください。
          </div>
          <div className="button__wrapper justify-content-center mt-40 w-100 d-flex" onClick={handleSubmit}>
            <button className="bg-pink text-white modal__button fw-700">紹介手数料返金口座を更新する</button>
          </div>
        </div>
      </div>
      <Alert open={open} handleClose={handleClose} text='更新しました!' />
    </div>
  );
}
 
export default BankInfo;