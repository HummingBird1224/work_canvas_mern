import {  useEffect, useState } from "react";

import PlanApplyModal from '../../components/Modal/PlanAplplyModal'
import './Plan.css'

const initialPlan={
  name:'初期費用無料プラン',
  date:'2023.09.23',
  usingStatus:'適用中',
  appliedJobs:[
    {
      id:1,
      name:'美容師',
      plans:[
        '資格なし 16.5万円(税込)',
        '新卒(資格取得見込み) 22万円(税込)',
        'アシスタント(資格あり) 22万円(税込)',
        'スタイリスト(資格あり) 33万円(税込)',
        '管理美容師(資格あり) 38.5万円(税込)'
      ]
    }
  ]
}

const CurrentPlan = () => {
  const [plan, setPlan]=useState(initialPlan);
  const [open, setOpen]=useState(false);
  const handleClick=()=>{
    setOpen(true);
  }
  const handleChange=(open)=>{
    setOpen(open);
  }
  return ( 
    <div className="enterprise__box text-default">
      <h1 className='title__lv1 '>ご利用中のプラン</h1>
      <div className="border__box">
        <h3 className="fw-700">プラン名</h3>
        <p>{plan.name}</p>
        <h3 className="fw-700">ご利用開始日</h3>
        <p>{plan.date}</p>
        <h3 className="fw-700">ご利用状況</h3>
        <p>{plan.usingStatus}</p>
        <h3 className="fw-700">お申し込み業種</h3>
        {plan.appliedJobs.map(aJob=>(
          <div key={aJob.id} className="mb-15 ml-12 fs-13">
            <strong>{aJob.name}</strong>
            <div className="fs-12 ml-20">
              <p><span className="pb-2">採用単価（成果報酬）</span></p>
              {aJob.plans.map(p=>(
                <p key={p} >・{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="button__wrapper justify-content-center mt-40 w-100 d-flex" onClick={handleClick}>
        <button className="bg-pink text-white modal__button">お申し込み業種を追加する</button>
      </div>
      <div className="fc-lightgray fs-12 mt-30">
        ※ アカウントの休止・退会につきましてはWORKCANVASのLINEアカウントより、お問い合わせください。
      </div>
      <PlanApplyModal open={open} handleChange={handleChange} />
    </div>
  );
}
 
export default CurrentPlan;