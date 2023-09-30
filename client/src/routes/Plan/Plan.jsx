import {  useEffect, useState } from "react";

import PlanList from './PlanList'
import CurrentPlan from './CurrentPlan'
import PayCard from '../../components/Card/PayCard/PayCard'

import './Plan.css'

const cardInfo=[
  {
    image:'image-plan-01.jpg',
    title:'料金プラン',
    description:'料金の詳細、よくある質問の確認が行えます。',
    link:'planList',
    id:1
  },
  {
    image:'image-plan-02.jpg',
    title:'ご利用中のプラン',
    description:'ご利用中のプランの確認が行えます。',
    link:'currentPlan',
    id:2
  },
]

const Plan = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const type = queryParameters.get("type");
  const [cards, setCards]=useState(cardInfo);
  return ( 
    <div className="enterprise__container">
      {type == 'planList'?<PlanList/>
      :type == 'currentPlan'?<CurrentPlan/>
      :<div className="enterprise__box d-flex flex-wrap justify-content-between">
        <h1 className='title__lv1 '>プラン情報</h1>
        <ul className="d-flex w-100 p-0 mt-40 flex-wrap justify-content-between">
          {cards.map((card)=>(
            <PayCard props={card} key={card.id} prelink='/enterprise/plan?type='/> 
          ))}
        </ul>
        <div className="fc-lightgray fs-12 mt-30">
          ※ アカウントの休止・退会につきましてはWORKCANVASのLINEアカウントより、お問い合わせください。
        </div>
      </div>
      }
    </div>
  );
}
 
export default Plan;