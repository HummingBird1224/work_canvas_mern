import React, {useState} from 'react';

const Step3 = (props) => {
  const missingError='*必須項目の未回答があります。';
  const accountError='*使用出来ない文字が含まれています。';
  const accountRegex = /^\d+$/;
  const handleChange=(event)=>{
    const {name, value}=event.target;
    props.setBankData({...props.bankData, [name]:value});
  }
  const handleNext=()=>{
    let bankErrors={};
    if(props.bankData.bank_name == ''){
      bankErrors={...bankErrors, bank_name:missingError};
    }
    if(props.bankData.branch_name == ''){
      bankErrors={...bankErrors, branch_name:missingError};
    }
    if(props.bankData.deposit_type == ''){
      bankErrors={...bankErrors, deposit_type:missingError};
    }
    if(props.bankData.account_number == ''){
      bankErrors={...bankErrors, account_number:missingError};
    }
    if(props.bankData.account_holder == ''){
      bankErrors={...bankErrors, account_holder:missingError};
    }
    if(props.bankData.account_number !== '' &&!accountRegex.test(props.bankData.account_number)){
      bankErrors={...bankErrors, account_number:accountError};
    }
    if(Object.keys(bankErrors).length == 0 ){
      props.setStep(props.step+1);
      props.setNextClicked(false);
    }
    props.setNextClicked(false);
    // setNextClicked(false);
    props.setBankErrors(bankErrors);
  }
  props.nextClicked&&handleNext();
  return (
    <div className="modal__form__wrapper">
      <ol className="form__number__wrapper u-mt-reset u-mb-lg">
        <li className="">
          <span className="number__span">1</span>
          <p>請求先情報</p>
        </li>
        <li className="">
          <span className="number__span">2</span>
          <p>お支払い方法</p>
        </li>
        <li className="active">
          <span className="number__span selected__number">3</span>
          <p>返金口座</p>
        </li>
        <li>
          <span className="number__span">4</span>
          <p>ご確認</p>
        </li>
      </ol>
      <h1 className="modal__title smaller">紹介手数料返金口座のご登録</h1>
      <p></p>
      <div className="box_simple u-w-100 text-left u-mt-sm u-pa-xs">
        <div className="u-mb-reset">
          <p className="u-fs-sm">ご採用された求職者様が早期退職をされた場合、紹介手数料を返金させていただく銀行口座になります。</p>
        </div>
      </div>
      <div id="formApplyStep3">
        <div className="u-mb-md">
          <div className="tag tag--type_primary">必須</div>
          <p><small>※５０音検索で、金融機関や支店を選択してください。</small></p>
          {/* <button
            className="button button--size_small button--icon_type_back button--icon_type_back_search chooseBank">金融機関・支店を選択</button> */}
        </div>
        <div>
          <p>銀行名</p>
          <input
            type="text"
            name="bank_name"
            className="form--type_text"
            placeholder="銀行名を入力してください"
            value={props.bankData.bank_name}
            data-listener-added_2e6d3dec="true" 
            onChange={handleChange}/>
          {props.bankErrors.bank_name&&<p className="u_alert_text">{props.bankErrors.bank_name}</p>}
          {/* <input type="hidden" name="bankCode" value="0010" /> */}
        </div>
        <div>
          <p>支店名</p>
          <input
            type="text"
            name="branch_name"
            className="form--type_text"
            placeholder="支店名を入力してください"
            value={props.bankData.branch_name}
            data-listener-added_2e6d3dec="true" 
            onChange={handleChange}/>
          {props.bankErrors.branch_name&&<p className="u_alert_text">{props.bankErrors.branch_name}</p>}
          {/* <input type="hidden" name="branchCode" value="338" /> */}
        </div>
        <div className="list--single--row u-mb-reset">
          <div className="u-f-1">
            <div className="tag tag--type_primary">必須</div>
            <p>預金種目</p>
            <select 
              name="deposit_type" 
              className="form--type_select accountType"
              value={props.bankData.deposit_type}
              onChange={handleChange}
            >
              <option value="">選択してください</option>
              <option value="1">普通預金</option>
              <option value="2">当座預金</option>
              <option value="3">貯蓄預金</option>
            </select>
            {props.bankErrors.deposit_type&&<p className="u_alert_text">{props.bankErrors.deposit_type}</p>}
          </div>
          <div className="u-f-1 u-ml-xxs">
            <div className="tag tag--type_primary">必須</div>
            <p>口座番号</p>
            <input
              type="text"
              inputMode="numeric"
              name="account_number"
              className="form--type_text accountNumber"
              placeholder="口座番号を入力してください"
              data-listener-added_2e6d3dec="true" 
              value={props.bankData.account_number}
              onChange={handleChange}
              />
            {props.bankErrors.account_number&&<p className="u_alert_text">{props.bankErrors.account_number}</p>}
          </div>
        </div>
        <div>
          <div className="tag tag--type_primary">必須</div>
          <p>口座名義</p>
          <input
            type="text"
            name="account_holder"
            className="form--type_text accountHolder"
            placeholder="口座名義を入力してください"
            data-listener-added_2e6d3dec="true" 
            value={props.bankData.account_holder}
            onChange={handleChange}
            />
          {props.bankErrors.account_holder&&<p className="u_alert_text">{props.bankErrors.account_holder}</p>}
          <p className="u-c-red"><small>※口座名義は、通帳に記載されている名前を全角カタカナでご入力ください。</small></p>
        </div>
      </div>
      {/* <div className="wrapper--button">
        <a className="button go-prev">戻る</a>
        <a className="button button--type_primary go-next">次に進む</a>
      </div> */}
    </div>
  );
}
 
export default Step3;