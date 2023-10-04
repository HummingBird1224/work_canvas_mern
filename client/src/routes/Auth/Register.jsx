import {  useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import {register} from '../../actions/action';
import Alert from '../../components/Alert/Alert';
import './Auth.css';


const Register = () => {
  const missingError='*必須項目の未回答があります。';
  const emailError='*メールアドレスの形式を確認してください。';
  const passwordError='*規定の文字数を確認してください。';
  const phoneError='*使用出来ない文字が含まれています。';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d+$/;
  const [data, setData] = useState({
    corporate_name:'',
    username:'',
    email:'',
    password:'',
    phone:'',
    mobile_phone:'',
  });
  const [errors, setErrors] = useState({
    corporate_name:'',
    username:'',
    email:'',
    password:'',
    phone:'',
  });
  const  [alertOpen, setAlertOpen]=useState(false);
  const [text, setText]=useState('');
  const handleChange=(e)=>{
    const {name, value}=e.target;
    setData({...data, [name]:value});
  }
  const registerUser=async()=>{
    await register(data)
    .then(res=>{
      if (res.status == 400){
        setAlertOpen(true);
        setText(res.error.message);
      }
      else if (res == true) {
        window.location.href='/enterprise/step'
      }
    })
  }
  const handleSubmit=async()=>{
    let newErrors={};
    if(data.corporate_name == ''){
      // setErrors({...errors, corporate_name:missingError});
      newErrors={...newErrors, corporate_name:missingError};
    }
    if(data.username == ''){
      // setErrors({...errors, username:missingError});
      newErrors={...newErrors, username:missingError};
    }
    if(data.email == ''){
      // setErrors({...errors, email:missingError});
      newErrors={...newErrors, email:missingError};
    }
    if(data.phone == ''){
      // setErrors({...errors, phone:missingError});
      newErrors={...newErrors, phone:missingError};
    }
    if(data.password == ''){
      // setErrors({...errors, password:missingError});
      newErrors={...newErrors, password:missingError};
    }
    if(data.email !== '' && !emailRegex.test(data.email)){
      // setErrors({...errors, email:emailError});
      newErrors={...newErrors, email:emailError};
    }
    if(data.password !== '' &&data.password.length<8){
      // setErrors({...errors, password:passwordError});
      newErrors={...newErrors, password:passwordError};
    }
    if(data.phone !== '' &&!phoneRegex.test(data.phone)){
      // setErrors({...errors, phone:phoneError});
      newErrors={...newErrors, phone:phoneError};
    }
    if(Object.keys(newErrors).length == 0){
      registerUser();
    }
    setErrors(newErrors);
  }
  return (
    <div className="register__container">
      <div className="e--c enterprise_register">
        <h1 className="title__lv1 mt-30 p-0">担当者様情報の登録</h1>
        <dl className="table--register">
          <input
            type="hidden"
            name="role"
            id="role"
            value="administrator" 
            />            
          <dt>サロン・企業名</dt>
          <dd>
            <input
              type="text"
              name="corporate_name"
              id="corporate_name"
              className="form--type_text name" 
              placeholder="サロン・企業名を入力してください"
              required 
              onChange={handleChange}/>
          </dd>
          {errors.corporate_name&&<p className="u_alert_text">{errors.corporate_name}</p>}
          <dt>担当者名</dt>
          <dd>
            <input
              type="text"
              name="username"
              id="username"
              className="form--type_text managerName"
              placeholder="担当者名を入力してください" 
              onChange={handleChange}/>
          </dd>
          {errors.username&&<p className="u_alert_text">{errors.username}</p>}
          <dt>担当者メールアドレス</dt>
          <dd>
            <input
              type="text"
              name="email"
              id="email"
              className="form--type_text managerEmail"
              placeholder="ログインメールアドレスを入力してください"
              onChange={handleChange} />
          </dd>
          {errors.email&&<p className="u_alert_text">{errors.email}</p>}
          <dt>パスワード</dt>
          <dd>
            <input
              type="password"
              name="password"
              id="password"
              className="form--type_text password"
              placeholder="ログインパスワードを入力してください" 
              onChange={handleChange}/>
            <span className="u-fs-12 u-c-gray">※８文字以上の半角英数字</span>
          </dd>
          {errors.password&&<p className="u_alert_text">{errors.password}</p>}
          <dt>担当者電話番号</dt>
          <dd>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form--type_text managerTel"
              placeholder="担当者電話番号を入力してください" 
              onChange={handleChange}/>
          </dd>
          {errors.phone&&<p className="u_alert_text">{errors.phone}</p>}
          <dt><div className="tag tag__secondary">任意</div>担当者携帯番号</dt>
          <dd>
            <input
              type="text"
              name="mobile_phone"
              id="mobile_phone"
              className="form--type_text managerCellphone"
              placeholder="担当者携帯番号を入力してください" 
              onChange={handleChange}/>
          </dd>

        </dl>
        <div className="u-mb-sm u-fs-12">

          <Link
            className="textlink"
            to="/enterprise/campaign_paid_terms"
            target="_blank"
            rel="noopener">
              初期費用無料キャンペーン利用規約
          </Link>
          と 
          <Link
            className="textlink"
            to="/enterprise/paid_terms"
            target="_blank"
            rel="noopener">
              有料プラン（ご紹介プラン）利用規約
          </Link>
          に同意して申し込む

        </div>
        <div className="u-mt-sm u-ta-c">
          <button className="button button--type_primary enterpriseAuth" onClick={handleSubmit}>
            アドレス確認に進む
          </button>
          <span className="u-fs-12 u-c-gray u-block u-mt-xs">※メールアドレス認証のため、記入いただいたアドレスに確認メールが送信されます</span>
        </div>
      </div>
      <Alert open={alertOpen} handleClose={(open)=>setAlertOpen(open)} text={text} error={true} />
    </div>
  );
}
 
export default Register;