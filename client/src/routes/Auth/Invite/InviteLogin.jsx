import { useState } from "react";
import { Link } from 'react-router-dom';

import {inviteLogin, acceptInvite} from '../../../actions/action';
import Alert from '../../../components/Alert/Alert';
// import './Auth.css';


const InviteLogin = () => {
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
    await inviteLogin(data, inviteCompany)
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
            <h2 className="title--lv2 u-mt-reset u-ta-c">会員登録・ログイン</h2>
            <form className="modal__form">
              <label>メールアドレス</label>
              <input
                type="email"
                className="f-input signin-email"
                name="email"
                placeholder="登録済みのアドレスを入力" 
                onChange={handleChange}
                value={data.email}
                required/>
              <label className="u-mt-sm">パスワード</label>
              <input
                type="password"
                className="f-input signin-pwd"
                name="password"
                placeholder="登録済みのパスワードを入力" 
                onChange={handleChange}
                value={data.password}
                required/>
              <p className="u-mt-sm u-ta-c">
                <input
                  type="submit"
                  className="button button--type_primary emailSignIn"
                  value="ログイン" 
                  onSubmit={handleSubmit}/>
              </p>
            </form>
            <hr />
            <p className="u-ta-c u-fs-12">
              {/* <Link to="" className="goResetPwd">パスワードをお忘れの方</Link><br /> */}
              <Link to="/invite/register" className="goSignUp">E-mailで会員登録</Link>
            </p>
          </div>
        </div>
      </div>
      <Alert open={alertOpen} handleClose={(open)=>setAlertOpen(open)} text={text} error={true} />
    </div>
  );
}
 
export default InviteLogin;