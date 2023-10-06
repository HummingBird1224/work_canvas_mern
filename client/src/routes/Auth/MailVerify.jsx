import React, {useEffect} from 'react';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

import Auth from '../../utils/Auth';
import {mailVerify} from '../../actions/action';

const MailVerify=()=>{
  const email=Auth.getUserEmail();
  const resendMail=async()=>{
    await mailVerify(email)
  }
  useEffect(async()=>{
    await mailVerify(email)
  }, [])
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
          <button className="button button--type_secondary button--size_small reSendEmail" onClick={resendMail}>
            認証メールを再送する
          </button>
        </div>
      </div>
    </div>
  )
}

export default MailVerify;