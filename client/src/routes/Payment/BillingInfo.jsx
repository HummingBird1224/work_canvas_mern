import {  useEffect, useState } from "react";

import Auth from '../../utils/Auth';
import { getCompanyData,
        getBillingData,
        editCompanyData,
        editBillingData} from "../../actions/action";   
import Alert from '../../components/Alert/Alert'
import prefectures from '../../utils/tbl_prefecture_region.json';
import './Payment.css'

const BillingInfo = () => {
  const companyId=Auth.getCompanyId();
  const missingError='*必須項目の未回答があります。';
  const phoneError='*使用出来ない文字が含まれています。';
  const phoneRegex = /^\d+$/;
  const [company, setCompany]=useState({});
  const [billing, setBilling]=useState({});
  const [alertOpen, setAlertOpen]=useState(false);
  const [error, setError]=useState(false);
  const [text, setText]=useState('');
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
  const [open, setOpen]=useState(false);
  const handleCompanyChange=(e)=>{
    const {name, value} = e.target;
    setCompany({...company, [name]:value});
  }
  const handleBillingChange=(e)=>{
    const {name, value} = e.target;
    setBilling({...billing, [name]:value});
  }
  const sameClick=()=>{
    setBilling({
      ...billing,
      billing_company_name:company.company_name,
      postal_code:company.postal_code,
      prefecture_id:company.prefecture_id,
      address_main:company.address_main,
      address_detail:company.address_detail,
    })
  }
  const handleSubmit=async()=>{
    let companyErrors={};
    if(company.company_name == ''){
      companyErrors={...companyErrors, company_name:missingError};
    }
    if(company.representative_director_name == ''){
      companyErrors={...companyErrors, representative_director_name:missingError};
    }
    if(company.phone_number == ''){
      companyErrors={...companyErrors, phone_number:missingError};
    }
    if(company.prefecture_id == ''){
      companyErrors={...companyErrors, prefecture_id:missingError};
    }
    if(company.postal_code == ''){
      companyErrors={...companyErrors, postal_code:missingError};
    }
    if(company.address_main == ''){
      companyErrors={...companyErrors, address_main:missingError};
    }
    if(company.phone_number !== '' &&!phoneRegex.test(company.phone_number)){
      companyErrors={...companyErrors, phone_number:phoneError};
    }
    if(company.postal_code !== '' &&!phoneRegex.test(company.postal_code)){
      companyErrors={...companyErrors, postal_code:phoneError};
    }

    let billingErrors={};
    if(billing.billing_company_name == ''){
      billingErrors={...billingErrors, billing_company_name:missingError};
    }
    if(billing.postal_code == ''){
      billingErrors={...billingErrors, postal_code:missingError};
    }
    if(billing.prefecture_id == ''){
      billingErrors={...billingErrors, prefecture_id:missingError};
    }
    if(billing.address_main == ''){
      billingErrors={...billingErrors, address_main:missingError};
    }
    if(billing.postal_code !== '' &&!phoneRegex.test(company.postal_code)){
      billingErrors={...billingErrors, postal_code:phoneError};
    }
    if(Object.keys(companyErrors).length == 0 && Object.keys(billingErrors).length == 0){
      await editCompanyData(company)
        .then(async (res)=>{
          if(res.status == '200'){
            await editBillingData(billing)
              .then(res=>{
                if(res.status == '200'){
                  setText('更新しました!');
                  setError(false);
                }
                else {
                  setError(true);
                  setText('更新に失敗しました！');
                }
                setAlertOpen(true);
              })
          }
        })
        .catch(err=>{
          setError(true);
          setText('更新に失敗しました！');
          setAlertOpen(true);
        })
    }
    setCompanyErrors(companyErrors);
    setBillingErrors(billingErrors);
  }
  useEffect(()=>{
    async function getData(){
      companyId&& await getCompanyData(companyId)
        .then(res=>{
          if(res.status == '200') {
            setCompany(res.data);
          }
          else {

          }
        })
        .catch(err=>{
          console.log(err)
        })
      companyId&& await getBillingData(companyId)
        .then(res=>{
          if(res.status == '200') {
            setBilling(res.data);
          }
          else {

          }
        })
        .catch(err=>{
          console.log(err)
        })
    }
    getData()
  }, [])
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
              name='company_name' 
              className='form__type__text companyName' 
              value={company.company_name}
              onChange={handleCompanyChange}
            />
            {companyErrors.company_name&&<p className="u_alert_text">{companyErrors.company_name}</p>}
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">代表取締役名</p>
            <input 
              type='text' 
              name='representative_director_name' 
              className='form__type__text companyName w-50' 
              value={company.representative_director_name}
              onChange={handleCompanyChange}
            />
            {companyErrors.representative_director_name&&<p className="u_alert_text">{companyErrors.representative_director_name}</p>}
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">会社電話番号 (半角・ハイフンなし)</p>
            <input 
              type='tel' 
              name='phone_number' 
              className='form__type__text companyName w-50' 
              value={company.phone_number}
              onChange={handleCompanyChange}
            />
            {companyErrors.phone_number&&<p className="u_alert_text">{companyErrors.phone_number}</p>}
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">会社郵便番号 (半角・ハイフンなし)</p>
            <input 
              type='text' 
              name='postal_code' 
              className='form__type__text companyName' 
              value={company.postal_code}
              onChange={handleCompanyChange}
            />
            {companyErrors.postal_code&&<p className="u_alert_text">{companyErrors.postal_code}</p>}
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">会社都道府県</p>
            <select 
              name='prefecture_id' 
              className="form__type__select" 
              value={company.prefecture_id}
              onChange={handleCompanyChange}
            >
              <option value=''>選択してください</option>
              {prefectures.map(prefecture=>(
                <option value={prefecture.id} key={prefecture.id}>{prefecture.jp_name}</option>
              ))}
            </select>
            {companyErrors.prefecture_id&&<p className="u_alert_text">{companyErrors.prefecture_id}</p>}
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">会社住所 (番地まで)</p>
            <input 
              type='text' 
              name='address_main' 
              className='form__type__text companyName' 
              value={company.address_main}
              onChange={handleCompanyChange}
            />
            {companyErrors.address_main&&<p className="u_alert_text">{companyErrors.address_main}</p>}
          </div>
          <div>
            <div className="tag tag__secondary">任意</div>
            <p className="mb-1 fw-700 fs-13">会社住所 (ビル名・部屋番号)</p>
            <input 
              type='text' 
              name='address_detail' 
              className='form__type__text companyName ' 
              value={company.address_detail}
              onChange={handleCompanyChange}
            />
          </div>
          <h2 className="modal__title smaller fw-700 mt-20">請求先情報</h2>
          <div className=" u-mb-sm" onClick={sameClick}>
            <button className="button sameAsCompanyInfo">会社情報と同じにする</button>
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">請求先会社名</p>
            <input 
              type='text' 
              name='billing_company_name' 
              className='form__type__text companyName' 
              value={billing.billing_company_name}
              onChange={handleBillingChange}
            />
            {billingErrors.billing_company_name&&<p className="u_alert_text">{billingErrors.billing_company_name}</p>}
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">請求先郵便番号(半角・ハイフンなし)</p>
            <input 
              type='text' 
              name='postal_code' 
              className='form__type__text companyName' 
              value={billing.postal_code}
              onChange={handleBillingChange}
            />
            {billingErrors.postal_code&&<p className="u_alert_text">{billingErrors.postal_code}</p>}
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">会社都道府県</p>
            <select 
              name='prefecture_id' 
              className="form__type__select" 
              value={billing.prefecture_id}
              onChange={handleBillingChange}
            >
              <option value=''>選択してください</option>
              {prefectures.map(prefecture=>(
                <option value={prefecture.id} key={prefecture.id}>{prefecture.jp_name}</option>
              ))}
            </select>
            {billingErrors.prefecture_id&&<p className="u_alert_text">{billingErrors.prefecture_id}</p>}
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">会社住所 (番地まで)</p>
            <input 
              type='text' 
              name='address_main' 
              className='form__type__text companyName' 
              value={billing.address_main}
              onChange={handleBillingChange}
            />
            {billingErrors.address_main&&<p className="u_alert_text">{billingErrors.address_main}</p>}
          </div>
          <div>
            <div className="tag tag__secondary">任意</div>
            <p className="mb-1 fw-700 fs-13">請求先会社住所 (番地まで)</p>
            <input 
              type='text' 
              name='address_detail' 
              className='form__type__text companyName ' 
              value={billing.address_detail}
              onChange={handleBillingChange}
            />
          </div>
          <div className="button__wrapper justify-content-center mt-40 w-100 d-flex" onClick={handleSubmit}>
            <button className="bg-pink text-white modal__button fw-700">会社・請求先情報を更新</button>
          </div>
        </div>
      </div>
      <Alert open={alertOpen} handleClose={(open)=>setAlertOpen(open)} text={text} error={error}/>
    </div>
  );
}
 
export default BillingInfo;