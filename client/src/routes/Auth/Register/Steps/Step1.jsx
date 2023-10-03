import React, {useState, useEffect} from 'react';

import prefectures from '../../../../utils/tbl_prefecture_region.json';

const Step1 = (props) => {
  const missingError='*必須項目の未回答があります。';
  const phoneError='*使用出来ない文字が含まれています。';
  const phoneRegex = /^\d+$/;
  // const [nextClicked, setNextClicked]=useState(props.nextClicked);
  // useEffect(()=>{
  //   setNextClicked(props.nextClicked);
  // }, [props.nextClicked]);
  // const [companyErrors, setCompanyErrors] = useState({
  //   company_name:'',
  //   representative_director_name:'',
  //   phone_number:'',
  //   postal_code:'',
  //   prefecture_id:'',
  //   address_main:'',
  //   business_types:'',
  // });
  // const [billingErrors, setBillingErrors] = useState({
  //   billing_company_name:'',
  //   postal_code:'',
  //   prefecture_id:'',
  //   address_main:'',
  // });
  const handleCompanyChange=(event)=>{
    const {name, value}=event.target;
    if(name == 'business_types'){
      props.setCompanyData({
        ...props.companyData, 
        business_types:[...props.companyData.business_types,value]
      });
    }
    else {props.setCompanyData({...props.companyData, [name]:value})}
  }
  const handleBillingChange=(event)=>{
    const {name, value}=event.target;
    props.setBillingData({...props.billingData, [name]:value})
  }
  const sameClick=()=>{
    props.setBillingData({
      billing_company_name:props.companyData.company_name,
      postal_code:props.companyData.postal_code,
      prefecture_id:props.companyData.prefecture_id,
      address_main:props.companyData.address_main,
      address_detail:props.companyData.address_detail,
    })
  }
  const handleNext=()=>{
    let companyErrors={};
    if(props.companyData.company_name == ''){
      companyErrors={...companyErrors, company_name:missingError};
    }
    if(props.companyData.representative_director_name == ''){
      companyErrors={...companyErrors, representative_director_name:missingError};
    }
    if(props.companyData.phone_number == ''){
      companyErrors={...companyErrors, phone_number:missingError};
    }
    if(props.companyData.prefecture_id == ''){
      companyErrors={...companyErrors, postal_code:missingError};
    }
    if(props.companyData.postal_code == ''){
      companyErrors={...companyErrors, prefecture_id:missingError};
    }
    if(props.companyData.address_main == ''){
      companyErrors={...companyErrors, address_main:missingError};
    }
    if(props.companyData.business_types.length == 0){
      companyErrors={...companyErrors, business_types:missingError};
    }
    if(props.companyData.phone_number !== '' &&!phoneRegex.test(props.companyData.phone_number)){
      companyErrors={...companyErrors, phone_number:phoneError};
    }
    if(props.companyData.postal_code !== '' &&!phoneRegex.test(props.companyData.postal_code)){
      companyErrors={...companyErrors, postal_code:phoneError};
    }

    let billingErrors={};
    if(props.billingData.billing_company_name == ''){
      billingErrors={...billingErrors, billing_company_name:missingError};
    }
    if(props.billingData.postal_code == ''){
      billingErrors={...billingErrors, prefecture_id:missingError};
    }
    if(props.billingData.prefecture_id == ''){
      billingErrors={...billingErrors, postal_code:missingError};
    }
    if(props.billingData.address_main == ''){
      billingErrors={...billingErrors, address_main:missingError};
    }
    if(props.billingData.postal_code !== '' &&!phoneRegex.test(props.companyData.postal_code)){
      billingErrors={...billingErrors, postal_code:phoneError};
    }
    if(Object.keys(companyErrors).length == 0 && Object.keys(billingErrors).length == 0){
      props.setStep(props.step+1);
      props.setNextClicked(false);
    }
    props.setNextClicked(false);
    // setNextClicked(false);
    props.setCompanyErrors(companyErrors);
    props.setBillingErrors(billingErrors);
  }
  props.nextClicked&&handleNext();
  return (
    <div className="modal__form__wrapper">
      <ol className="form__number__wrapper u-mt-reset u-mb-lg">
        <li className="active">
          <span className="number__span selected__number">1</span>
          <p>請求先情報</p>
        </li>
        <li>
          <span className="number__span">2</span>
          <p>お支払い方法</p>
        </li>
        <li>
          <span className="number__span">3</span>
          <p>返金口座</p>
        </li>
        <li>
          <span className="number__span">4</span>
          <p>ご確認</p>
        </li>
      </ol>
      <h2 className="modal__title smaller">会社情報を入力してください</h2>
      <div id="formApplyStep1">
        <div id="script_div">
          <script type="text/javascript" src="https://ajaxzip3.github.io/ajaxzip3.js"></script>
          <script type="text/javascript" src="https://ajaxzip3.github.io/ajaxzip3.js"></script>
        </div>
        <div>
          <div className="tag tag__primary">必須</div>
          <p>会社名 (または屋号)</p>
          <input
            type="text"
            name="company_name"
            className="form--type_text companyName" 
            value={props.companyData.company_name}
            onChange={handleCompanyChange}
            />
          {props.companyErrors.company_name&&<p className="u_alert_text">{props.companyErrors.company_name}</p>}
        </div>
        <div>
          <div className="tag tag__primary">必須</div>
          <p>代表取締役名</p>
          <input
            type="text"
            name="representative_director_name"
            className="form--type_text u-w-50 representativeDirectorName" 
            value={props.companyData.representative_director_name}
            onChange={handleCompanyChange}
            />
          {props.companyErrors.representative_director_name&&<p className="u_alert_text">{props.companyErrors.representative_director_name}</p>}
        </div>
        <div>
          <div className="tag tag__primary">必須</div>
          <p>会社電話番号 (半角・ハイフンなし)</p>
          <input
            type="tel"
            name="phone_number"
            className="form--type_text f-none-spin u-w-50 tel" 
            value={props.companyData.phone_number}
            onChange={handleCompanyChange}/>
          {props.companyErrors.phone_number&&<p className="u_alert_text">{props.companyErrors.phone_number}</p>}
        </div>
        <div>
          <div className="tag tag__primary">必須</div>
          <p>会社郵便番号 (半角・ハイフンなし)</p>
          <input
            type="text" 
            name="postal_code"
            className="form--type_text f-none-spin zipCode" 
            value={props.companyData.postal_code}
            onChange={handleCompanyChange}/>
          {props.companyErrors.postal_code&&<p className="u_alert_text">{props.companyErrors.postal_code}</p>}
        </div>
        <div>
          <div className="tag tag__primary">必須</div>
          <p>会社都道府県</p>
          <select 
            name="prefecture_id" 
            className="form--type_select u-w-sp-100 prefectures"
            value={props.companyData.prefecture_id}
            onChange={handleCompanyChange}
          >
            <option value="">選択してください</option>
            {prefectures.map(prefecture=>(
              <option value={prefecture.id} key={prefecture.id}>{prefecture.jp_name}</option>
            ))}
          </select>
          {props.companyErrors.prefecture_id&&<p className="u_alert_text">{props.companyErrors.prefecture_id}</p>}
        </div>
        <div>
          <div className="tag tag__primary">必須</div>
          <p>会社住所 (番地まで)</p>
          <input
            type="text"
            name="address_main"
            className="form--type_text address1"
            value={props.companyData.address_main}
            onChange={handleCompanyChange} />
          {props.companyErrors.address_main&&<p className="u_alert_text">{props.companyErrors.address_main}</p>}
        </div>
        <div>
          <div className="tag tag__secondary">任意</div>
          <p>会社住所 (ビル名・部屋番号)</p>
          <input
            type="text"
            name="address_detail"
            className="form--type_text address2" 
            value={props.companyData.address_detail}
            onChange={handleCompanyChange}/>
        </div>
        <span className="tag tag__primary u-mt-sm">必須</span>
        <h2 className="modal__title smaller u-mt-reset">お申し込み業種を選択してください</h2>
        <div>
          <div className="form--type_checkbox_group u-mb-xs">
            <input
              type="checkbox"
              value={1}
              name="business_types"
              className="sectors"
              id="sector-1" 
              onChange={handleCompanyChange}/>
            <label htmlFor="sector-1"><span>美容師</span></label>
          </div>
          <div className="form--type_checkbox_group u-mb-xs">
            <input
              type="checkbox"
              value={2}
              name="business_types"
              className="sectors"
              id="sector-2" 
              onChange={handleCompanyChange}/>
            <label htmlFor="sector-2"><span>アイリスト</span></label>
          </div>
          <div className="form--type_checkbox_group u-mb-xs">
            <input
              type="checkbox"
              value={3}
              name="business_types"
              className="sectors"
              id="sector-3" 
              onChange={handleCompanyChange}/>
            <label htmlFor="sector-3"><span>ネイリスト</span></label>
          </div>
          <div className="form--type_checkbox_group u-mb-xs">
            <input
              type="checkbox"
              value={4}
              name="business_types"
              className="sectors"
              id="sector-4" 
              onChange={handleCompanyChange}/>
            <label htmlFor="sector-4"><span>エステティシャン</span></label>
          </div>
          {props.companyErrors.business_types&&<p className="u_alert_text">{props.companyErrors.business_types}</p>}
        </div>
        <h2 className="modal__title smaller u-mt-lg">請求先情報を入力してください</h2>
        <div className=" u-mb-sm" onClick={sameClick}>
          <button className="button sameAsCompanyInfo">会社情報と同じにする</button>
        </div>
        <div id="script_div"></div>
        <div>
          <div className="tag tag__primary">必須</div>
          <p>請求先会社名</p>
          <input
            type="text"
            name="billing_company_name"
            className="form--type_text billingCompanyName" 
            value={props.billingData.billing_company_name}
            onChange={handleBillingChange}
            />
          {props.billingErrors.billing_company_name&&<p className="u_alert_text">{props.billingErrors.billing_company_name}</p>}
        </div>
        <div>
          <div className="tag tag__primary">必須</div>
          <p>請求先郵便番号(半角・ハイフンなし)</p>
          <input
            type="tel"
            name="phone_number"
            className="form--type_text f-none-spin billingZipCode" 
            value={props.billingData.postal_code}
            onChange={handleBillingChange}/>
          {props.billingErrors.phone_number&&<p className="u_alert_text">{props.billingErrors.phone_number}</p>}
        </div>
        <div>
          <div className="tag tag__primary">必須</div>
          <p>請求先都道府県</p>
          <select 
            name="prefecture_id" 
            className="form--type_select billingPrefecture"
            value={props.billingData.prefecture_id}
            onChange={handleBillingChange}>
            <option value="">選択してください</option>
            {prefectures.map(prefecture=>(
              <option value={prefecture.id} key={prefecture.id}>{prefecture.jp_name}</option>
            ))}
          </select>
          {props.billingErrors.prefecture_id&&<p className="u_alert_text">{props.billingErrors.prefecture_id}</p>}
        </div>
        <div>
          <div className="tag tag__primary">必須</div>
          <p>請求先会社住所 (番地まで)</p>
          <input
            type="text"
            name="address_main"
            className="form--type_text billingAddress1" 
            value={props.billingData.address_main}
            onChange={handleBillingChange}/>
          {props.billingErrors.address_main&&<p className="u_alert_text">{props.billingErrors.address_main}</p>}
        </div>
        <div>
          <div className="tag tag__secondary">任意</div>
          <p>請求先会社住所 (ビル名・部屋番号)</p>
          <input
            type="text"
            name="address_detail"
            className="form--type_text billingAddress2" 
            value={props.billingData.address_detail}
            onChange={handleBillingChange}/>
        </div>
      </div>
    </div>
  );
}
 
export default Step1;