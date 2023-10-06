import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

import Auth from '../../../utils/Auth';
import {checkMail, acceptInvite} from '../../../actions/action';
import Alert from '../../../components/Alert/Alert';

const InviteConfirm=()=>{
  const [companyId, setCompanyId] = useState(null);
  const [alertOpen, setAlertOpen]=useState(false);
  const [text, setText]=useState('');
  const handleClick=async ()=>{
    if(Auth.getUserDetails()){
      await acceptInvite(Auth.getUserEmail(), companyId)
        .then(res=>{
          console.log(res);
        })
    }
    else {
      window.location.href='/invite/register';
    }
  }
  return(
    <div id="__blaze-root" style={{paddingTop:52}}>
      <div className="f--c">   
        <header className="header" role="banner">
          <div className="header__inner">
            <div className="header__id">
              <Link to="/">WORKCANVAS</Link>
            </div>
            <ul className="header__navigation">                
            </ul>
          </div>
        </header>
        <main className="e--c enterprise_main hide-menu enterprise_signup enterprise_invite u-b-reset" role="main">
          <div>
            <h2 className="invite_title">スタッフ登録が完了しました</h2>
            <div className="invite_border_wrapper">
              <p className="u-ta-c u-w-100">招待者の承認をお待ちください。</p>
            </div>
          </div>
          <section className="u-mt-xl">
            <h2 className="u-ta-c">採用担当者にお願いすることは？</h2>
            <div className="invite_with_wrapper">
              <div className="with_contents">
                <div className="number">1</div>
                <img src="/asset/img/icon-invite-time.svg" alt="" className="icons"/>
                <p className="u-m-reset">求職者から応募が来たら、サロン様・求職者双方で、ご都合のよろしい日程を提案していただきます</p>
              </div>
              <div className="with_contents">
                <div className="number">2</div>
                <img src="/asset/img/icon-invite-entry.svg?14" alt="" className="icons"/>
                <p className="u-m-reset">サロン様・求職者双方の日程が決まりましたら、見学面談・面接を行います</p>
              </div>
              <div className="with_contents">
                <div className="number">3</div>
                <img src="/asset/img/icon-invite-hearing.svg?14" alt="" className="icons"/>
                <p className="u-m-reset">結果をWORKCANVASまでご連絡ください</p>
                <small className="u-d-block">見学面談・面接後の日程調整、採用決定後の入社フォローまで、WORKCANVASがサポートいたします</small>
              </div>
            </div>
          </section> 
        </main>        
      </div>
      <Alert open={alertOpen} handleClose={(open)=>setAlertOpen(open)} text={text} error={true} />
    </div>
  );
}

export default InviteConfirm;