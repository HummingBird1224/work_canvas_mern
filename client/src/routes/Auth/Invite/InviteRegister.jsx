import {  useState } from "react";
import { Link } from 'react-router-dom';

import {inviteRegister, acceptInvite} from '../../../actions/action';
import Alert from '../../../components/Alert/Alert';
// import './Auth.css';

const InviteRegister = () => {
  const inviteCompany=localStorage.getItem('invite_company')?
    localStorage.getItem('invite_company'):null;
  const  [alertOpen, setAlertOpen]=useState(false);
  const [text, setText]=useState('');
  const [data, setData]=useState({});
  const handleChange=(e)=>{
    const {name, value}=e.target;
    setData({...data, [name]:value});
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await inviteRegister(data, inviteCompany)
      .then(async(res)=>{
        if (res.status == 400){
          setAlertOpen(true);
          setText(res.error.message);
        }
        else if (res == true) {
          await acceptInvite(res.data.email, res.data.company_id)
            .then(res=>{
              if(res.status == '200'){
                localStorage.removeItem('invite_company');
                window.location.href='/invite/confirm';
              }
              else {
                setAlertOpen(true);
                setText(res.error.message);
              }
            })
            .catch(err=>{
              setAlertOpen(true);
              setText(err.message);
            })
        }
      })
      .catch(err=>{
        setAlertOpen(true);
        setText(err.message);
      })
  }
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
                  name="username"
                  className="form--type_text" 
                  onChange={handleChange}
                  value={data.username}
                  required
                  />
                {/* <p className="u-mt-sm">
                  フリガナ
                </p>
                <input
                  type="text"
                  name="furigana"
                  className="form--type_text" /> */}
              </div>
              <div className="form-group">
                <label className="u-mt-sm">メールアドレス</label>
                <input
                  type="email"
                  name="email"
                  className="f-input" 
                  onChange={handleChange}
                  value={data.email}
                  required/>
              </div>
              <div className="form-group">
                <label className="u-mt-sm">パスワード</label>
                <input
                  type="password"
                  name="password"
                  className="f-input" 
                  onChange={handleChange}
                  value={data.password}
                  required/>
              </div>
              <div className="u-ta-c u-fs-12 u-mt-sm">
                <div className="g-checkbox checkbox-key-col">
                  <input
                    type="checkbox"
                    id="checkbox-agree"
                    className="agree u-mr-xs"
                    name="agreed"
                    value="1" 
                    required/>
                  <label for="checkbox-agree">
                    {/* <Link 
                      to="/terms"
                      target="_blank"
                      rel="noopener"> */}
                        利用規約
                      {/* </Link> */}
                    と
                    {/* <Link
                      to="/privacy"
                      target="_blank"
                      rel="noopener"> */}
                        プライバシーポリシー
                    {/* </Link> */}
                    に同意します。
                  </label>
                </div>
              </div>
              <p className="u-mt-sm u-ta-c">
                <input
                  type="submit"
                  className="button button--type_primary userSignUp"
                  value="登録する" 
                  onSubmit={handleSubmit}/>
              </p>
            </form>
            <hr />
            <p className="u-ta-c u-fs-12">
              <Link
                to={'/invite/login'}
                className="goSignIn">
                  すでにアカウントをお持ちの方
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Alert open={alertOpen} handleClose={(open)=>setAlertOpen(open)} text={text} error={true} />
    </div>
  );
}
 
export default InviteRegister;