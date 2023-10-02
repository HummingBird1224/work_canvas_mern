// import {  useEffect, useState } from "react";

// import Alert from '../../components/Alert/Alert';
import { Link } from 'react-router-dom';
// import './Auth.css';


const InviteRegister = () => {

  return (
    <div className="modal  fadeInUp  animated in" style={{display: 'block', zIndex: '10000', paddingRight: '17px'}}>
      <div className="f--c is-modal">
        <div className="modal__background" style={{overflowY: 'auto'}}>
          <div className="modal__body" style={{padding: '0px 30px', margin: '20px auto 0'}}>
            <h2 className="title--lv2 u-mt-reset u-ta-c">会員登録</h2>
            <form className="modal__form ordinaryRegisterInfoForm">
              <div className="form-group">
                <label className="u-mt-sm">お名前</label>
                <p>漢字</p>
                <input
                  type="text"
                  name="name"
                  className="form--type_text" />
                <p className="u-mt-sm">フリガナ</p>
                <input
                  type="text"
                  name="furigana"
                  className="form--type_text" />
              </div>
              <div className="form-group">
                <label className="u-mt-sm">メールアドレス</label>
                <input
                  type="email"
                  name="email"
                  className="f-input" />
              </div>
              <div className="form-group">
                <label className="u-mt-sm">パスワード</label>
                <input
                  type="password"
                  name="password"
                  className="f-input" />
              </div>
              <div className="u-ta-c u-fs-12 u-mt-sm">
                <div className="g-checkbox checkbox-key-col">
                  <input
                    type="checkbox"
                    id="checkbox-agree"
                    className="agree u-mr-xs"
                    name="agree"
                    value="1" />
                  <label for="checkbox-agree">
                    <Link 
                      to="/terms"
                      target="_blank"
                      rel="noopener">利用規約</Link>
                    と
                    <Link
                      to="/privacy"
                      target="_blank"
                      rel="noopener">プライバシーポリシー</Link>
                    に同意します。
                  </label>
                </div>
              </div>
              <p className="u-mt-sm u-ta-c">
                <input
                  type="submit"
                  className="button button--type_primary userSignUp"
                  value="登録する" />
              </p>
            </form>
            <hr />
            <p className="u-ta-c u-fs-12">
              <Link
                href=""
                className="goSignIn">すでにアカウントをお持ちの方</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default InviteRegister;