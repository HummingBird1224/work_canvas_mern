import {useState } from "react";
import {Link} from 'react-router-dom';

import {login} from '../../actions/action';
import Alert from '../../components/Alert/Alert';
import './Auth.css';

const Login = () => {
  // const dispatch=useDispatch();
  const [data, setData]=useState({
    email:'',
    password:''
  });
  const [filled, setFilled]=useState(false);
  const [alertOpen, setAlertOpen]=useState(false);
  const [text, setText]=useState('');
  const handleChange=(e)=>{
    const {name, value} = e.target;
    setData({...data, [name]:value});
    data.email !== '' && data.password !== '' && setFilled(true);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    data.email !== '' && data.password !== '' && login(data)
    .then(res=>{
      if (res.status == 400){
        setAlertOpen(true);
        setText(res.error.message);
      }
      else if (res == 'administrator') {
        window.location.href='/enterprise';
      }
      else if(res == 'recruiter'){
        window.location.href='/select';
      }
    })
  }
  const handleAlertClose=(open)=>{
    setAlertOpen(open);
  }
  return ( 
    <div className="enterprise__container">
      <div className="enterprise__login ">
        <h2 className="modal__title text-center smaller fw-700">管理画面へログイン</h2>
        <form className='form__login'>
          <p className="fs-12 fw-700 text-center">メールアドレスでログインする</p>
          <p className="fs-12 mb-2">メールアドレス</p>
          <input 
            type='email' 
            id='inputEmail' 
            name='email'
            className="form__type__text" 
            placeholder="メールアドレス"
            required 
            autoFocus
            onChange={handleChange} />
          <p className="fs-12 mb-2 mt-20">パスワード</p>
          <input 
            type='password' 
            id='inputPassword' 
            name='password'
            className="form__type__text mb-0" 
            placeholder="パスワード"
            required 
            onChange={handleChange}/>
          <div className=" justify-content-center mt-40 w-100 d-flex" >
            {filled?
              <button type='button' className="bg-pink text-white modal__button fw-700 w-250" onClick={handleSubmit}>ログイン</button>
              :<button className="bg-pink text-white modal__button fw-700 w-250" style={{opacity:'0.8'}}>未入力の項目があります</button>
            }
          </div>
          <hr className="my-30"/>
          <p className="bottom__link">
            <Link to='/enterprise/register'>
              {'新規申込の方 >'}
            </Link>
          </p>
        </form>
      </div>
      <Alert open={alertOpen} handleClose={handleAlertClose} text={text} error={true} />
    </div>
  );
}
 
export default Login;