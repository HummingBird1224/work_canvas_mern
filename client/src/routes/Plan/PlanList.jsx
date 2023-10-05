import {  useEffect, useState } from "react";
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';

import PlanListWrapper from '../../components/PlanList/PlanListWrapper';
import Faq from '../../components/Faq/Faq';
import {getAllPlans} from '../../actions/action';
import './Plan.css'

const PlanList = () => {
  const [plans, setPlans]=useState([]);
  useEffect(()=>{
    async function getData(){
      await getAllPlans()
      .then(res=>{
        if(res.status == '200'){
          setPlans(res.data);
        }
      })
    }
    getData();
  }, [])
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
        {plans.length>0&&plans.map((plan)=>(
          plan.plan1&&<PlanListWrapper key={plan.id} props={plan}/>
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