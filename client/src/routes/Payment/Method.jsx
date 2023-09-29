import {  useEffect, useState } from "react";

import PayMethodModal from '../../components/Modal/PayMethodModal'
import './Payment.css'

const Method = () => {
  const [open, setOpen]=useState(false);
  const handleChange=(open)=>{
    setOpen(open);
  }
  return ( 
   <div className="enterprise__container">
      <div className="enterprise__box ">
        <h2 className="modal__title fw-700 smaller">お支払い方法</h2>
        <div className="border__box">
          <h4 className="fw-700 fs-13">お支払い方法</h4>
          <p className="fs-13">銀行振込</p>
          <p className="fs-13">支払いの際は、下記の口座にお振込をお願いいたします。</p>
          <div className="border__box">
            <h4 className="fw-700 fs-13">振込先口座</h4>
            <p className="fs-13">三井住友銀行　新宿西口支店<br/>普通預金　4377059</p>
            <h4 className="fw-700 fs-13">振込先宛名</h4>
            <p className="fs-13">カブシキガイシャグラム</p>
          </div>
        </div>
        <div className="button__wrapper justify-content-center mt-40 w-100 d-flex" onClick={()=>setOpen(true)}>
          <button className="bg-pink text-white modal__button fw-700">クレジットカード決済に変更する</button>
        </div>
      </div>
      <PayMethodModal open={open} handleChange={handleChange} />
    </div> 
  );
}
 
export default Method;