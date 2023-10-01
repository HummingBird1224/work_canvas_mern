import {  useEffect, useState } from "react";

import Alert from '../../components/Alert/Alert'
import prefectures from '../../utils/tbl_prefecture_region.json';
import './Payment.css'

const companyInfo={
  name:'C・crew 渋谷',
  repName:'星川豊',
  tel:'08012377462',
  zipCode:'1500043',
  prefecture:'13',
  address1:'渋谷区道玄坂1-17-7',
  address2:'渋谷くすのきビル1-3F'
}

const BillingInfo = () => {
  const [company, setCompany]=useState(companyInfo);
  const [billing, setBilling]=useState(companyInfo);
  const [open, setOpen]=useState(false);
  const handleChange=(e)=>{
    const {name, value} = e.target;
    setCompany({...company, [name]:value});
  }
  const handleBillingChange=(e)=>{
    const {name, value} = e.target;
    setBilling({...billing, [name]:value});
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
          <h2 className="modal__title smaller fw-700">会社情報</h2>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">会社名 (または屋号)</p>
            <input 
              type='text' 
              name='name' 
              className='form__type__text companyName' 
              value={company.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">代表取締役名</p>
            <input 
              type='text' 
              name='repName' 
              className='form__type__text companyName w-50' 
              value={company.repName}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">会社電話番号 (半角・ハイフンなし)</p>
            <input 
              type='tel' 
              name='tel' 
              className='form__type__text companyName w-50' 
              value={company.tel}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">会社郵便番号 (半角・ハイフンなし)</p>
            <input 
              type='text' 
              name='zipCode' 
              className='form__type__text companyName' 
              value={company.zipCode}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">会社都道府県</p>
            <select 
              name='prefecture' 
              className="form__type__select" 
              value={company.prefecture}
              onChange={handleChange}
            >
              <option value='none'>選択してください</option>
              {prefectures.map(prefecture=>(
                <option value={prefecture.id} key={prefecture.id}>{prefecture.jp_name}</option>
              ))}
            </select>
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">会社住所 (番地まで)</p>
            <input 
              type='text' 
              name='address1' 
              className='form__type__text companyName' 
              value={company.address1}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="tag tag__secondary">任意</div>
            <p className="mb-1 fw-700 fs-13">会社住所 (ビル名・部屋番号)</p>
            <input 
              type='text' 
              name='address2' 
              className='form__type__text companyName ' 
              value={company.address2}
              onChange={handleChange}
            />
          </div>
          <h2 className="modal__title smaller fw-700 mt-20">請求先情報</h2>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">請求先会社名</p>
            <input 
              type='text' 
              name='name' 
              className='form__type__text companyName' 
              value={billing.name}
              onChange={handleBillingChange}
            />
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">請求先郵便番号(半角・ハイフンなし)</p>
            <input 
              type='text' 
              name='zipCode' 
              className='form__type__text companyName' 
              value={billing.zipCode}
              onChange={handleBillingChange}
            />
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">会社都道府県</p>
            <select name='prefecture' className="form__type__select" value={billing.prefecture}>
              <option value='none'>選択してください</option>
              {prefectures.map(prefecture=>(
                <option value={prefecture.id} key={prefecture.id}>{prefecture.jp_name}</option>
              ))}
            </select>
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">会社住所 (番地まで)</p>
            <input 
              type='text' 
              name='address1' 
              className='form__type__text companyName' 
              value={billing.address1}
              onChange={handleBillingChange}
            />
          </div>
          <div>
            <div className="tag tag__secondary">任意</div>
            <p className="mb-1 fw-700 fs-13">請求先会社住所 (番地まで)</p>
            <input 
              type='text' 
              name='address2' 
              className='form__type__text companyName ' 
              value={billing.address2}
              onChange={handleBillingChange}
            />
          </div>
          <div className="button__wrapper justify-content-center mt-40 w-100 d-flex" onClick={handleSubmit}>
            <button className="bg-pink text-white modal__button fw-700">会社・請求先情報を更新</button>
          </div>
        </div>
      </div>
      <Alert open={open} handleClose={handleClose} text='更新しました!' />
    </div>
  );
}
 
export default BillingInfo;