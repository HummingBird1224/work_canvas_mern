import {  useEffect, useState } from "react";

import Alert from '../../components/Alert/Alert';
import { Link } from 'react-router-dom';
import './Auth.css';


const Register = () => {

  return (
    <div className="register__container">
      <div className="e--c enterprise_register">
        <h1 className="title--lv1 tittle__register">担当者様情報の登録</h1>
        <dl className="table--register">

          <input
            type="hidden"
            name="role"
            id="role"
            value="administrator" />
            
          <dt>サロン・企業名</dt>
          <dd>
            <input
              type="text"
              name="corporate_name"
              id="corporate_name"
              className="form--type_text name" 
              placeholder="サロン・企業名を入力してください"
              required />
          </dd>

          <dt>担当者名</dt>
          <dd>
            <input
              type="text"
              name="username"
              id="username"
              className="form--type_text managerName"
              placeholder="担当者名を入力してください" />
          </dd>
          
          <dt>担当者メールアドレス</dt>
          <dd>
            <input
              type="text"
              name="email"
              id="email"
              className="form--type_text managerEmail"
              placeholder="ログインメールアドレスを入力してください" />
          </dd>

          <dt>パスワード</dt>
          <dd>
            <input
              type="password"
              name="password"
              id="password"
              className="form--type_text password"
              placeholder="ログインパスワードを入力してください" />
            <span className="u-fs-12 u-c-gray">※８文字以上の半角英数字</span>
          </dd>

          <dt>担当者電話番号</dt>
          <dd>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form--type_text managerTel"
              placeholder="担当者電話番号を入力してください" />
          </dd>

          <dt><div className="tag tag--type_secondary">任意</div>担当者携帯番号</dt>
          <dd>
            <input
              type="text"
              name="mobile_phone"
              id="mobile_phone"
              className="form--type_text managerCellphone"
              placeholder="担当者携帯番号を入力してください" />
          </dd>

        </dl>
        <div className="u-mb-sm u-fs-12">

          <Link
            className="textlink"
            to="/campaign_paid_terms"
            target="_blank"
            rel="noopener">
              初期費用無料キャンペーン利用規約
          </Link>
          と 
          <Link
            className="textlink"
            to="/paid_terms"
            target="_blank"
            rel="noopener">
              有料プラン（ご紹介プラン）利用規約
          </Link>
          に同意して申し込む

        </div>
        <div className="u-mt-sm u-ta-c">
          <button className="button button--type_primary enterpriseAuth">
            アドレス確認に進む
          </button>
          <span className="u-fs-12 u-c-gray u-block u-mt-xs">※メールアドレス認証のため、記入いただいたアドレスに確認メールが送信されます</span>
        </div>
      </div>
      {/* <Alert open={alertOpen} handleClose={handleAlertClose} text={text} error={true} /> */}
    </div>
  );
}
 
export default Register;