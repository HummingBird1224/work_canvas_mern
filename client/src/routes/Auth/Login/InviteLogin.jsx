// import {  useEffect, useState } from "react";

// import Alert from '../../components/Alert/Alert';
import { Link } from 'react-router-dom';
// import './Auth.css';


const InviteLogin = () => {

  return (
    <div className="modal  fadeInUp  animated in" style={{display: 'block', zIndex: '10000', paddingRight: '17px'}}>
      <div className="f--c is-modal">
        <div className="modal__background" style={{overflowY: 'auto'}}>
          <div className="modal__body" style={{padding: '0px 30px', margin: '20px auto 0'}}>
            <h2 className="title--lv2 u-mt-reset u-ta-c">会員登録・ログイン</h2>
            <form className="modal__form">
              <label>メールアドレス</label>
              <input
                type="email"
                className="f-input signin-email"
                name="email"
                placeholder="登録済みのアドレスを入力" />
              <label className="u-mt-sm">パスワード</label>
              <input
                type="password"
                className="f-input signin-pwd"
                name="password"
                placeholder="登録済みのパスワードを入力" />
              <p className="u-mt-sm u-ta-c">
                <input
                  type="submit"
                  className="button button--type_primary emailSignIn"
                  value="ログイン" />
              </p>
            </form>
            <hr />
            <p className="u-ta-c u-fs-12">
              <Link to="" className="goResetPwd">パスワードをお忘れの方</Link><br />
              <Link to="" className="goSignUp">E-mailで会員登録</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default InviteLogin;