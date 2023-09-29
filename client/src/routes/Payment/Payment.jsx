import {  useEffect, useState } from "react";

import BillingInfo from './BillingInfo'
import Method from './Method'
import Statement from './Statement'
import BankInfo from './BankInfo'
import PayCard from '../../components/Card/PayCard/PayCard';
import './Payment.css'

const cardInfo=[
  {
    image:'image-balance-01.jpg',
    title:'会社・請求先情報',
    description:'会社情報や請求先情報を変更できます。',
    link:'billingInfo',
    id:1
  },
  {
    image:'image-balance-02.jpg',
    title:'お支払い方法',
    description:'お支払い方法の変更ができます。',
    link:'method',
    id:2
  },
  {
    image:'image-balance-03.jpg',
    title:'請求書一覧',
    description:'今月の請求書や過去の請求書を見ることができます。',
    link:'statement',
    id:3
  },
  {
    image:'image-balance-04.jpg',
    title:'紹介手数料返金口座',
    description:'ご採用された求職者がWORKCANVAS規定の早期退職をされた場合、紹介手数料を返金させていただく銀行口座を登録できます。',
    link:'bankInfo',
    id:4
  },
]

const Payment = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const type = queryParameters.get("type");
  const [cards, setCards]=useState(cardInfo);
  switch(type){
    case 'billingInfo':
      return <BillingInfo />
    case 'method':
      return <Method />
    case 'statement':
      return <Statement />
    case 'bankInfo':
      return <BankInfo />
    default :
      return (
      <div className="enterprise__container">
      <div className="enterprise__box d-flex flex-wrap justify-content-between">
        <ul className="d-flex w-100 p-0 mt-40 flex-wrap justify-content-between">
          {cards.map((card)=>(
            <PayCard props={card} key={card.id} prelink='/enterprise/payment?type='/> 
          ))}
        </ul>
      </div>
    </div>)
  }
//   return ( 
    
//   );
}
 
export default Payment;