import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import {getPlans} from '../../../../actions/action';
import prefectures from '../../../../utils/tbl_prefecture_region.json';

const Step4 = (props) => {
  const [plans, setPlans] = useState([])
  useEffect(()=>{
    async function getData(){
      await getPlans(props.companyData.business_types)
        .then(async (res)=>{
          if(res.status == '200'){
            setPlans(res.data);
          }
        })
    }
    getData();
  }, [props.companyData.business_types])
  return (
    // <>step 4</>
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
        <li className="">
          <span className="number__span">3</span>
          <p>返金口座</p>
        </li>
        <li className="active">
          <span className="number__span selected__number">4</span>
          <p>ご確認</p>
        </li>
      </ol>
      <p>
        以下の内容でご紹介プランにお申し込みをします。<br />
        よろしければ、下部にある「申し込む」を押してください。
      </p>
      <div>
        <div className="box_underline">
          <h2 className="u-fs-lg">お申し込みプラン</h2>
        </div>
        <p><span>初期費用無料プラン</span></p>
      </div>
      <div id="formApplyStep4">
        <div className="section">
          <div className="box_underline display-flex justify-content-between">
            <h2 className="u-fs-lg">会社情報</h2>
            <button className="button plan-modify backToEdit" data-applystep="1">変更する</button>
          </div>
          <div id="script_div">
            <script type="text/javascript" src="https://ajaxzip3.github.io/ajaxzip3.js"></script>
            <script type="text/javascript" src="https://ajaxzip3.github.io/ajaxzip3.js"></script>
          </div>
          <div>
            <p>会社名 (または屋号)</p>
            <input
              type="text"
              name="company_name"
              className="form--type_text companyName readonly"
              readOnly 
              value={props.companyData.company_name}
              />
          </div>
          <div>
            <p>代表取締役名</p>
            <input
              type="text"
              name="representative_director_name"
              className="form--type_text u-w-50 representativeDirectorName readonly"
              readOnly 
              value={props.companyData.representative_director_name}/>
          </div>
          <div>
            <p>会社電話番号 (半角・ハイフンなし)</p>
            <input
              type="tel"
              inputMode="numeric"
              name="phone_number"
              className="form--type_text f-none-spin u-w-50 tel readonly"
              readOnly 
              value={props.companyData.phone_number}/>
          </div>
          <div>
            <p>会社郵便番号 (半角・ハイフンなし)</p>
            <input
              type="text"
              inputMode="numeric"
              name="postal_code"
              className="form--type_text f-none-spin zipCode readonly"
              onKeyUp="AjaxZip3.zip2addr(this,'','prefecture','address1');"
              readOnly 
              value={props.companyData.postal_code}/>
          </div>
          <div>
            <p>会社都道府県</p>
            <input
              type="text"
              className="form--type_text readonly"
              readOnly 
              value={prefectures[props.companyData.prefecture_id-1].jp_name}
              />
          </div>
          <div>
            <p>会社住所 (番地まで)</p>
            <input
              type="text"
              name="address_main"
              className="form--type_text address1 readonly"
              readOnly 
              value={props.companyData.address_main}/>
          </div>
          <div>
            <p>会社住所 (ビル名・部屋番号)</p>
            <input
              type="text"
              name="address_detail"
              className="form--type_text address2 readonly"
              readOnly 
              value={props.companyData.address_detail}/>
          </div>
        </div>
        <div className="section">
          <div className="box_underline display-flex justify-content-between">
            <h2 className="u-fs-lg">お申し込み業種</h2>
            <button className="button plan-modify backToEdit" data-applystep="1">変更する</button>
          </div>
          {plans.length>0 && plans.map(plan=>(
            <div key={plans.id}>              
              <p>{plan.business_type}</p>
              <div className="u-ml-sm u-fs-md">
                採用単価（成果報酬）
                {plan.total_plan.map(t_plan=>(
                    <p className="u-fw-n">{t_plan}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="section">
          <div className="box_underline display-flex justify-content-between">
            <h2 className="u-fs-lg">請求先情報</h2>
            <button className="button plan-modify backToEdit" data-applystep="1">変更する</button>
          </div>
          <div id="script_div"></div>
          <div>
            <p>請求先会社名</p>
            <input
              type="text"
              name="billing_company_name"
              className="form--type_text billingCompanyName readonly"
              readOnly 
              value={props.billingData.billing_company_name}/>
          </div>
          <div>
            <p>請求先郵便番号(半角・ハイフンなし)</p>
            <input
              type="tel"
              name="postal_code"
              className="form--type_text f-none-spin billingZipCode readonly"
              onKeyUp="AjaxZip3.zip2addr(this,'','billingPrefecture','billingAddress1');"
              readOnly 
              value={props.billingData.postal_code}/>
          </div>
          <div>
            <p>請求先都道府県</p>
            <input
              type="text"
              className="form--type_text readonly"
              readOnly 
              value={prefectures[props.billingData.prefecture_id-1].jp_name}/>
          </div>
          <div>
            <p>請求先会社住所 (番地まで)</p>
            <input
              type="text"
              name="address_main"
              className="form--type_text billingAddress1 readonly"
              readOnly 
              value={props.billingData.address_main}/>
          </div>
          <div>
            <p>請求先会社住所 (ビル名・部屋番号)</p>
            <input
              type="text"
              name="address_detail"
              className="form--type_text billingAddress2 readonly"
              readOnly 
              value={props.billingData.address_detail}/>
          </div>
        </div>
        <div className="section">
          <div className="box_underline display-flex justify-content-between">
            <h2 className="u-fs-lg">お支払い方法</h2>
            <button className="button plan-modify backToEdit paymentMethod" data-applystep="2">変更する</button>
          </div>
          <input
            type="text"
            className="form--type_text readonly"
            readOnly
            value="銀行振込" />
        </div>
        <div className="section">
          <div className="box_underline display-flex justify-content-between">
            <h2 className="u-fs-lg">紹介手数料返金口座</h2>
            <button className="button plan-modify backToEdit" data-applystep="3">変更する</button>
          </div>
          <div>
            <p>銀行名</p>
            <input
              type="text"
              name="bankName"
              className="form--type_text readonly"
              placeholder="銀行名を入力してください"
              readOnly 
              value={props.bankData.bank_name}/>
            <input type="hidden" name="bankCode" value="0010" />
          </div>
          <div>
            <p>支店名</p>
            <input
              type="text"
              name="bankBranch"
              className="form--type_text readonly"
              placeholder="支店名を入力してください"
              readOnly 
              value={props.bankData.branch_name}/>
            <input type="hidden" name="branchCode" value="338" />
          </div>
          <div className="list--single--row u-mb-reset">
            <div className="u-f-1">
              <p>預金種目</p>
              <input
                type="text"
                className="form--type_text readonly"
                readOnly 
                value={props.bankData.bank_name}/>
            </div>
            <div className="u-f-1 u-ml-xxs">
              <p>口座番号</p>
              <input
                type="text"
                inputMode="numeric"
                name="accountNumber"
                className="form--type_text accountNumber readonly"
                placeholder="口座番号を入力してください"
                readOnly />
            </div>
          </div>
          <div>
            <p>口座名義</p>
            <input
              type="text"
              name="accountHolder"
              className="form--type_text accountHolder readonly"
              placeholder="口座名義を入力してください"
              readOnly />
          </div>
        </div>
        <div className="section confirmElements">
          <div className="box_underline display-flex justify-content-between">
            <h2 className="u-fs-lg">確認事項</h2>
          </div>
          <p className="form--type_checkbox_group">
            <input
              type="checkbox"
              id="confirm-element-1"
              className="required"
              name="confirm-element"
              value="1" />
            <label htmlFor="confirm-element-1" className=" u-m-reset u-ml-xxs"><span
                className="u-fs-12">記入内容に誤りがないことを確認しました。</span></label>
          </p>
          <p className="form--type_checkbox_group">
            <input
              type="checkbox"
              id="confirm-element-2"
              className="required"
              name="confirm-element"
              value="2" />
            <label htmlFor="confirm-element-2" className=" u-m-reset u-ml-xxs"><span
                className="u-fs-12">申込権限があることを確認し、保証します。</span></label>
          </p>
          <p className="form--type_checkbox_group">
            <input
              type="checkbox"
              id="confirm-element-3"
              className="required"
              name="confirm-element"
              value="3" />
            <label htmlFor="confirm-element-3" className="u-m-reset u-ml-xxs">
              <span className="u-fs-12">
                <Link
                  className="u-fs-12 textlink textlink--color_blue"
                  href="/enterprise_terms"
                  target="_blank"
                  rel="noopener">
                    サービス利用規約
                </Link>を確認し、理解しました。</span></label>
          </p>
          <p className="form--type_checkbox_group">
            <input
              type="checkbox"
              id="confirm-element-4"
              className="required"
              name="confirm-element"
              value="4" />
            <label htmlFor="confirm-element-4" className="u-m-reset u-ml-xxs">
              <span className="u-fs-12">
                <Link
                  className="u-fs-12 textlink textlink--color_blue"
                  href="/paid_terms"
                  target="_blank"
                  rel="noopener">
                    ご紹介プラン利用規約
                </Link>を確認し、理解しました。</span></label>
          </p>
          <p className="form--type_checkbox_group">
            <input
              type="checkbox"
              id="confirm-element-5"
              className="required"
              name="confirm-element"
              value="5" />
            <label htmlFor="confirm-element-5" className="u-m-reset u-ml-xxs">
              <span className="u-fs-12">
                <Link
                  className="u-fs-12 textlink textlink--color_blue"
                  href="/privacy"
                  target="_blank"
                  rel="noopener">
                    プライバシーポリシー
                </Link>を確認し、理解しました。</span></label>
          </p>
        </div>
      </div>
      {/* <div className="wrapper--button">
        <a className="button go-prev">戻る</a>
        <a className="button button--type_primary button--state_disabled">申し込む</a>
      </div> */}
    </div>
  );
}
 
export default Step4;