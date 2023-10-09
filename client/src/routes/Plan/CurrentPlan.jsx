import {  useEffect, useState } from "react";
import moment from 'moment';

import Auth from '../../utils/Auth';
import {getAppliedPlans, getAllPlans} from '../../actions/action';
import PlanApplyModal from '../../components/Modal/PlanAplplyModal'
import './Plan.css'

const CurrentPlan = () => {
  const [plans, setPlans]=useState([]);
  const [planIds, setPlanIds]=useState([]);
  const [allPlans, setAllPlans]=useState([]);
  const [appliedDate, setAppliedDate]=useState('');
  const [changed, setChanged]=useState(false);
  const [open, setOpen]=useState(false);
  useEffect(()=>{
    async function getData(){
      Auth.getCompanyId()&& await getAppliedPlans(Auth.getCompanyId())
        .then(res=>{
          if(res.status == '200'){
            setPlans(res.data.plans);
            setPlanIds(res.data.plans.map(plan=>plan.id.toString()));
            setAppliedDate(moment(res.data.appliedDate).format('YYYY-MM-DD'));
          }
        })
      await getAllPlans()
        .then(res => {
          if (res.status == '200') {
            setAllPlans(res.data);
          }
        })
    }
    getData();
  }, [changed])
  return ( 
    <div className="enterprise__box text-default">
      <h1 className='title__lv1 '>ご利用中のプラン</h1>
      <div className="border__box">
        <h3 className="fw-700">プラン名</h3>
        <p>初期費用無料プラン</p>
        <h3 className="fw-700">ご利用開始日</h3>
        <p>{appliedDate}</p>
        <h3 className="fw-700">ご利用状況</h3>
        <p>適用中</p>
        <h3 className="fw-700">お申し込み業種</h3>
        {plans.length>0&&plans.map(plan=>(
          <div key={plan.id} className="mb-15 ml-12 fs-13">
            <strong>{plan.business_type}</strong>
            <div className="fs-12 ml-20">
              <p><span className="pb-2">採用単価（成果報酬）</span></p>
              {plan.total_plan.map(tp=>(
                <p key={tp} >・{tp}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="button__wrapper justify-content-center mt-40 w-100 d-flex" onClick={()=>setOpen(true)}>
        <button className="bg-pink text-white modal__button">お申し込み業種を追加する</button>
      </div>
      <div className="fc-lightgray fs-12 mt-30">
        ※ アカウントの休止・退会につきましてはWORKCANVASのLINEアカウントより、お問い合わせください。
      </div>
      <PlanApplyModal 
        open={open} 
        handleChange={(open)=>setOpen(open)} 
        allPlans={allPlans} 
        // setPlanIds={setPlanIds}
        planIds={planIds}
        setChanged={setChanged}/>
    </div>
  );
}
 
export default CurrentPlan;