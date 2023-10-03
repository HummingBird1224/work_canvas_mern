import {  useEffect, useState } from "react";

import Alert from '../../components/Alert/Alert';
import { Link } from 'react-router-dom';
import './Auth.css';

import Step1 from './Register/Steps/Step1';
import Step2 from './Register/Steps/Step2';
import Step3 from './Register/Steps/Step3';
import Step4 from './Register/Steps/Step4';


const Step = () => {
  const [step, setStep] = useState(1);
  const [nextClicked, setNextClicked] = useState(false);
  const [companyData, setCompanyData] = useState({
    company_name:'',
    representative_director_name:'',
    phone_number:'',
    postal_code:'',
    prefecture_id:'',
    address_main:'',
    address_detail:'',
    business_types:[]
  });
  const [billingData, setBillingData] = useState({
    billing_company_name:'',
    postal_code:'',
    prefecture_id:'',
    address_main:'',
    address_detail:'',
  });
  const [bankData, setBankData]=useState({
    bank_name:'',
    branch_name:'',
    deposit_type:'',
    account_number:'',
    account_holder:'',
  });
  const [companyErrors, setCompanyErrors] = useState({
    company_name:'',
    representative_director_name:'',
    phone_number:'',
    postal_code:'',
    prefecture_id:'',
    address_main:'',
    business_types:'',
  });
  const [billingErrors, setBillingErrors] = useState({
    billing_company_name:'',
    postal_code:'',
    prefecture_id:'',
    address_main:'',
  });
  const [bankErrors, setBankErrors]=useState({
    bank_name:'',
    branch_name:'',
    deposit_type:'',
    account_number:'',
    account_holder:'',
  });
  const clickPrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  const clickNext = () => {
    setNextClicked(true);
    if(step == 2){
      setStep(3);
      setNextClicked(false);
    }
    // if (step < 4) {
    //   setStep(step + 1);
    // }
  }
  // console.log(companyData);
  return (
    <div className="modal__body">
      { step === 1 ? 
        <Step1 
          companyData={companyData}
          billingData={billingData}
          setCompanyData={setCompanyData}
          setBillingData={setBillingData}
          companyErrors={companyErrors}
          billingErrors={billingErrors}
          setCompanyErrors={setCompanyErrors}
          setBillingErrors={setBillingErrors}
          nextClicked={nextClicked}
          setNextClicked={setNextClicked}
          step={step}
          setStep={setStep}
        /> :
       step === 2 ? 
        <Step2 /> : 
       step === 3 ? 
        <Step3
          bankData={bankData}
          setBankData={setBankData}
          nextClicked={nextClicked}
          setNextClicked={setNextClicked}
          bankErrors={bankErrors}
          setBankErrors={setBankErrors}
          step={step}
          setStep={setStep}
        /> : 
       <Step4 
          companyData={companyData}
          billingData={billingData}
          bankData={bankData}
          paytype='bank'
       />}

      <div className="wrapper--button">
        {/* <button className="button go-prev" onClick={() => clickPrev()}>戻る</button> */}
        {/* <button className={ step === 4 ? 'button button--type_primary button--state_disabled' : 'button button--type_primary go-next' } onClick={() => clickNext()}>次に進む</button> */}
        <button className={ step === 1 ? 'button go-prev button--state_disabled' : 'button go-prev' } onClick={() => clickPrev()}>戻る</button>
        {step == 4?
          <button className="button button--type_primary go-next" disabled style={{opacity:.8}}>申し込む</button>:
          <button className="button button--type_primary go-next" onClick={() => clickNext()}>次に進む</button>
        }
        </div>
    </div>
  );
}

export default Step;