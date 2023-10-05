import {  useEffect, useState } from "react";

import {getBankData, editBankData} from '../../actions/action';
import Auth from '../../utils/Auth';
import Alert from '../../components/Alert/Alert'
import './Payment.css'

const BankInfo = () => {
  const missingError='*必須項目の未回答があります。';
  const accountError='*使用出来ない文字が含まれています。';
  const accountRegex = /^\d+$/;
  const [bank, setBank]=useState({});
  const [errors, setErrors] = useState({
    bank_name:'',
    branch_name:'',
    deposit_type:'',
    account_number:'',
    account_holder:'',
  });
  const [alertOpen, setAlertOpen]=useState(false);
  const [error, setError]=useState(false);
  const [text, setText]=useState('');
  const handleChange=(e)=>{
    const {name, value} = e.target;
    setBank({...bank, [name]:value});
  }
  const handleSubmit=async()=>{
    let bankErrors={};
    if(bank.bank_name == ''){
      bankErrors={...bankErrors, bank_name:missingError};
    }
    if(bank.branch_name == ''){
      bankErrors={...bankErrors, branch_name:missingError};
    }
    if(bank.deposit_type == ''){
      bankErrors={...bankErrors, deposit_type:missingError};
    }
    if(bank.account_number == ''){
      bankErrors={...bankErrors, account_number:missingError};
    }
    if(bank.account_holder == ''){
      bankErrors={...bankErrors, account_holder:missingError};
    }
    if(bank.account_number !== '' &&!accountRegex.test(bank.account_number)){
      bankErrors={...bankErrors, account_number:accountError};
    }
    if(Object.keys(bankErrors).length == 0 ){
      await editBankData(bank)
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
      .catch(err=>{
        setError(true);
        setText('更新に失敗しました！');
        setAlertOpen(true);
      })
    }
    setErrors(bankErrors);
  }
  useEffect(()=>{
    async function getData(){
      Auth.getCompanyId()&& await getBankData(Auth.getCompanyId())
        .then(res=>{
          if(res.status == '200') {
            setBank(res.data);
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
          <h2 className="modal__title smaller fw-700">紹介手数料返金口座</h2>
          <div>
            <p className="mb-1 fw-700 fs-13">銀行名</p>
            <input 
              type='text' 
              name='bank_name' 
              className='form__type__text companyName' 
              value={bank.bank_name}
              onChange={handleChange}
            />
            {errors.bank_name&&<p className="u_alert_text">{errors.bank_name}</p>}
          </div>
          <div>
            <p className="mb-1 fw-700 fs-13">支店名</p>
            <input 
              type='text' 
              name='branch_name' 
              className='form__type__text companyName ' 
              value={bank.branch_name}
              onChange={handleChange}
            />
            {errors.branch_name&&<p className="u_alert_text">{errors.branch_name}</p>}
          </div>
          <div className="d-flex w-100 justify-content-between">
            <div>
              <div className="tag tag__primary">必須</div>
              <p className="mb-1 fw-700 fs-13">預金種目</p>
              <select 
                name='deposit_type' 
                className="form__type__select" 
                value={bank.deposit_type}
                onChange={handleChange}
              >
                <option value=''>選択してください</option>
                <option value='1' >普通預金</option>
                <option value='2' >当座預金</option>
                <option value='3' >貯蓄預金</option>
              </select>
              {errors.deposit_type&&<p className="u_alert_text">{errors.deposit_type}</p>}
            </div>
            <div className="w-50">
              <div className="tag tag__primary">必須</div>
              <p className="mb-1 fw-700 fs-13">口座番号</p>
              <input 
                type='text' 
                name='account_number' 
                className='form__type__text companyName' 
                value={bank.account_number}
                onChange={handleChange}
              />
              {errors.account_number&&<p className="u_alert_text">{errors.account_number}</p>}
            </div>
          </div>
          <div>
            <div className="tag tag__primary">必須</div>
            <p className="mb-1 fw-700 fs-13">口座名義</p>
            <input 
              type='text' 
              name='account_holder' 
              className='form__type__text companyName' 
              value={bank.account_holder}
              onChange={handleChange}
            />
            {errors.account_holder&&<p className="u_alert_text">{errors.account_holder}</p>}
          </div>
          <div className="fc-lightgray fs-12 fc-pink">
            ※口座名義は、通帳に記載されている名前を全角カタカナでご入力ください。
          </div>
          <div className="button__wrapper justify-content-center mt-40 w-100 d-flex" onClick={handleSubmit}>
            <button className="bg-pink text-white modal__button fw-700">紹介手数料返金口座を更新する</button>
          </div>
        </div>
      </div>
      <Alert open={alertOpen} handleClose={(open)=>setAlertOpen(open)} text={text} error={error}/>
    </div>
  );
}
 
export default BankInfo;