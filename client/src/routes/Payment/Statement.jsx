import {  useEffect, useState } from "react";

import './Payment.css'

const Statement = () => {
  const [monthHistories, setMonthHistories]=useState([])
  const [pastHistories, setPastHistories]=useState([])
  return ( 
   <div className="enterprise__container">
      <div className="enterprise__box ">
        <h2 className="modal__title fw-700 smaller">請求書一覧</h2>
          <p className="fw-700 ">今月の請求・入金一覧</p>
          {monthHistories.length>0
            ?<div>Month Histories</div>
            :<p className="">請求の内訳がありません。</p>
          }
          <p className="fw-700 mt-40">過去の請求・入金一覧</p>
          {pastHistories.length>0
            ?<div>Past Histories</div>
            :<p className="">請求の内訳がありません。</p>          
          }
      </div>
    </div> 
  );
}
 
export default Statement;