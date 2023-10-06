import React, {useState} from 'react';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

import Alert from '../../components/Alert/Alert';
import {resendMail} from '../../actions/action';

const MailSended=()=>{
  const email=localStorage.getItem('email');
  const [error, setError]=useState(false);
  const [text, setText]=useState('');
  const [alertOpen, setAlertOpen]=useState(false);
  const mailResend=async()=>{
    await resendMail(email)
      .then(res=>{
        if(res.status == '200'){
          setError(false);
          setText('確認メールを送信しました。');
        }
        else {
          setError(false);
          setText('失敗しました。');
        }
        setAlertOpen(true);
      })
  }
  return(
    <div className="modal__body">                    
      <div className="confirm--mail_check">
        <span className="material-icons">
          <ErrorOutlineOutlinedIcon fontSize='100'/>
        </span>
        <h2>まだ登録は完了していません。</h2>
        <p>
          {email}に、<br/>
          確認メールを送信しました。
        </p>
        <p>メール内の「認証を完了する」ボタンを押して申込みを進めてください。</p>
        <hr/>
        <h2>認証メールが届かない場合</h2>
        <div>
          <button className="button button--type_secondary button--size_small reSendEmail" onClick={mailResend}>
            認証メールを再送する
          </button>
        </div>
      </div>
      <Alert open={alertOpen} handleClose={(open)=>setAlertOpen(open)} text={text} error={error} />
    </div>
  )
}

export default MailSended;