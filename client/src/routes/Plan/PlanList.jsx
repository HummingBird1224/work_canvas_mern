import {  useEffect, useState } from "react";
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';

import PlanListWrapper from '../../components/PlanList/PlanListWrapper';
import Faq from '../../components/Faq/Faq';
import './Plan.css'

const initialPlanList=[
  {
    id:1,
    title:'美容師',
    plans:[
      {
        id:1,
        job:'美容師免許なし',
        price:16.5,
        senior:0
      },
      {
        id:2,
        job:'新卒／アシスタント',
        price:22,
        license:'美容師免許有り',
        senior:0
      },
      {
        id:3,
        job:'スタイリスト',
        price:33,
        license:'美容師免許有り',
        senior:1
      },
      {
        id:4,
        job:'管理美容師',
        price:38.5,
        license:'美容師免許有り',
        senior:1
      },
    ]
  },
  {
    id:2,
    title:'アイリスト',
    plans:[
      {
        id:1,
        job:'受付等',
        price:16.5,
        license:'免許なし',
        senior:0
      },
      {
        id:2,
        job:'未経験者',
        price:22,
        license:'免許あり（新卒・既卒）',
        senior:0
      },
      {
        id:3,
        job:'実務経験者',
        price:33,
        license:'免許あり（3年未満）',
        senior:1
      },
      {
        id:4,
        job:'実務経験者',
        price:38.5,
        license:'免許あり（3年以上）',
        senior:1
      },
    ]
  },
  {
    id:3,
    title:'ネイリスト/エステ',
    plans:[
      {
        id:1,
        job:'受付・未経験',
        price:16.5,
        senior:0
      },
      {
        id:2,
        job:'専門orスクール',
        price:22,
        license:'在学中・新卒・既卒',
        senior:0
      },
      {
        id:3,
        job:'実務経験者',
        price:27.5,
        license:'3年未満',
        senior:1
      },
      {
        id:4,
        job:'実務経験者',
        price:33,
        license:'3年以上',
        senior:1
      },
    ]
  },
]

const PlanList = () => {
  const [plansList, setPlansList]=useState(initialPlanList);
  return ( 
    <div className="enterprise__box ">
      <h1 className='title__lv1 pb-0'>料金プラン</h1>
      <div className=" fc-dgray ml-30 mb-20 mt-2 fs-13">※価格は全て税込表記です</div>
      <section className="plans__wrapper w-100">
        <div className="initial__cost__wrapper mb-20 d-flex flex-wrap align-items-center justify-content-between">
          <div className="fw-700 d-flex align-items-baseline plan__price__initial">
            <span className="mr-10 fs-20 initial">初期費用</span>
            <span className="td-lt">
              <span className="price__emphasis">11</span>
            </span>
            <span className="fs-20">万円(税込)</span>
          </div>
          <ul className="balloon__left initial__balloon p-20">
            <li>企業情報登録代行</li>
            <li>記事作成代行</li>
            <li>記事掲載</li>
          </ul>
        </div>
        <img src='/asset/img/banner_about_campaign.jpg' alt='banner' className="w-100"/>
        <hr className="my-40"/>
        <h2 className="plan__title w-100 mb-10">成果報酬（紹介手数料）</h2>
        <p className="fc-gray fs-14 mt-10">
          ※成果報酬の区分は、採用業種の前職の区分に応じて判断します。（複数の区分に該当する場合には、最も金額が高い区分が適用されます。）
        </p>
        {plansList.map((planList)=>(
          <PlanListWrapper key={planList.id} props={planList}/>
        ))}
      </section>
      <div className="button__wrapper text-center d-flex w-100 justify-content-center fw-700">
        <CardGiftcardOutlinedIcon className="mr-2"/>
        現在ご利用中のプランです
      </div>
      <Faq/>
      <div className="fc-lightgray fs-12 mt-30">
        ※ アカウントの休止・退会につきましてはWORKCANVASのLINEアカウントより、お問い合わせください。
      </div>
    </div>
  );
}
 
export default PlanList;