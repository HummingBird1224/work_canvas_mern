import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

import Auth from '../../utils/Auth';
import {getMembersData, 
        changeRole, 
        deleteMember, 
        getInviteId,
        getAcceptedMembers,
        acceptMember
      } from '../../actions/action';
import ConfirmModal from '../../components/Modal/ConfirmModal';
import RoleModal from '../../components/Modal/RoleModal';
import OrderModal from '../../components/Modal/OrderModal';
import RegisterModal from '../../components/Modal/RegisterModal';
import MailModal from '../../components/Modal/MailModal';
import Alert from '../../components/Alert/Alert';
import NoAvatar from '../../asset/img/default_profile.png'
import './Member.css'

const Member=()=>{
  const companyId=Auth.getCompanyId();
  const [members, setMembers] = useState([]);
  const [acceptedMembers, setAcceptedMembers] = useState([]);
  const [memberId, setMemberId] = useState('');
  const [inviteUrl, setInviteUrl] = useState('');
  const [confirmOpen, setConfirmOpen]=useState(false);
  const [roleOpen, setRoleOpen]=useState(false);
  const [orderOpen, setOrderOpen]=useState(false);
  const [registerOpen, setRegisterOpen]=useState(false);
  const [mailOpen, setMailOpen]=useState(false);
  const [alertOpen, setAlertOpen]=useState(false);
  const [text, setText]=useState('');
  const [error, setError]=useState(false);
  const roleChange= async (userId, e)=>{
    await changeRole(userId, e.target.value)
    .then(res=>{
      if(res.status == '200') {
        setMembers(res.data);
      }
      else {
        setAlertOpen(true);
        setError(true);
        setText('変更は失敗しました!');
      }
    })
  } 
  const handleConfirmChange=(memberId)=>{
    setConfirmOpen(true);
    setMemberId(memberId);
  }
  const handleMemberDelete=async(del)=>{
    if(del){
      await deleteMember(memberId)
      .then(res=>{
        if(res.status == '200'){
          setMembers(res.data);
          setError(false);
          setText('削除された！');
          setConfirmOpen(false);
        }
        else {
          setError(true);
          setText('削除に失敗しました！');
        }
      })
      .catch(err=>{
        setError(true);
        setText('削除に失敗しました！');
      })
      setAlertOpen(true);
    }
  }
  const handleCopy=()=>{
    if(inviteUrl !== ''){
      navigator.clipboard.writeText(inviteUrl)
        .then(() => {
          setAlertOpen(true);
          setError(false);
          setText('コピーされました');
        })
        .catch((err) => {
          console.log(err);
          setAlertOpen(true);
          setError(true);
          setText('コピーに失敗しました。');
        });
    }
    else {
      setAlertOpen(true);
      setError(true);
      setText('登録URLが見つかりません。');
    }
  }
  const acceptClick=async(userId)=>{
    await acceptMember(userId, companyId, true)
      .then(res=>{
        if(res.status == '200') {
          setAcceptedMembers(res.data);
        }
      });
  }
  const rejectClick=async(userId)=>{
    await acceptMember(userId, companyId, false)
      .then(res=>{
        if(res.status == '200') {
          setAcceptedMembers(res.data);
        }
      });
  }
  useEffect(()=>{
    async function getData(){
      companyId && await getMembersData(companyId)
      .then(res=>{
        if(res.status == '200') {
          setMembers(res.data);
        }
      });
    }
    getData();
  }, [acceptedMembers])
  useEffect(()=>{
    async function getData(){
      companyId && await getInviteId(companyId)
        .then(res=>{
          if(res.status == '200') {
            setInviteUrl('http://localhost:3000/invite/'+res.data.invite_id);
            // setInviteUrl('https://work-canvas-mern.vercel.app/invite/'+res.data.invite_id);
          }
        })
      companyId && await getAcceptedMembers(companyId)
        .then(res=>{
          if(res.status == '200') {
            setAcceptedMembers(res.data);
          }
        })
    }
    getData();
  }, [])
  return(
    <div className="enterprise__container">
      <div className='enterprise__box text-default member'>
        <h1 className='title__lv1 '>スタッフの管理</h1>
        {acceptedMembers.length>0&&Auth.getUserRole() == 'administrator'&&
          <div className="guide is-green u-mb-xl">
            <p>以下のスタッフが登録申請しています。承認してください。</p>
            <p className='text-right cursor-pointer' onClick={()=>setRoleOpen(true)}>
              <span className='info__sign' />
              役割とは？
            </p>
            <table className="table--addStaff">
              <tr>
                <th className="u-fs-12 u-ta-l">スタッフ</th>
                <th className="u-fs-12 u-ta-c">承認</th>
                <th className="u-fs-12 u-ta-c">拒否</th>
              </tr>
              {acceptedMembers.map(aMem=>(
                <tr key={aMem.id}> 
                  <td>
                    <div className="enterprise-staff u-ma-xs">
                      <figure>
                        <img src={NoAvatar} alt=""/>
                      </figure>
                      <p>{aMem.username}</p>
                    </div>
                  </td>
                  <td className="u-ta-c">
                    <button 
                      className="button u-fs-12 u-ma-xs authToRecruiter" 
                      style={{maxWidth: 135}}
                      onClick={()=>acceptClick(aMem.id)}
                      >
                      採用担当者で承認
                    </button>
                  </td>
                  <td className="u-ta-c">
                    <button 
                      className="button u-fs-12 u-ma-xs releaseMember"
                      onClick={()=>rejectClick(aMem.id)}
                      >
                      承認しない
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        }
        <section>
          <h2 className='title__lv2 mt-50'>スタッフリスト</h2>
          <p className='text-right ' onClick={()=>setRoleOpen(true)}>
            <span className='info__sign' />
            役割とは？
          </p>
          <table className='table__staff'>
            <tr>
              <th className='fs-12 text-left'>スタッフ</th>
              <th className='fs-12 text-center'>役割</th>
              <th className='fs-12 text-center'>解除</th>
            </tr>
            {members.length>0 && members.map((user)=>(
              <tr key={user.id}>
                <td>
                  <div className='enterprise__staff d-flex align-items-center'>
                    <figure>
                      {/* {user.avatar? <img src={user.avatar} alt='avatar' />: */}
                      <img src={NoAvatar} alt='avatar' />
                      {/* } */}
                    </figure>
                    <p className='mb-0 ml-2'>{user.username}</p>
                  </div>
                </td>
                <td className='text-center'>
                  {
                    user.id == Auth.getUserId()
                    ?<span>{user.role == 'administrator'? '管理者':'採用担当者'}</span>
                    :<select 
                      name='role' 
                      className='select__role full-width' 
                      value={user.role} 
                      disabled={user.role == 'administrator' && Auth.getUserRole() !== 'administrator'}
                      onChange={(e)=>roleChange(user.id, e)}
                    >
                      <option 
                        value='administrator' 
                        style={{display: Auth.getUserRole() !== 'administrator' ? 'none':'block'}}
                        >管理者</option>
                      <option value='recruiter'>採用担当者</option>
                    </select>
                  }
                </td>
                {( user.id !== Auth.getUserId() && (Auth.getUserRole() == 'administrator' || (Auth.getUserRole() != 'administrator' && user.role != 'administrator')))&&
                <td className='user__delete text-center cursor-pointer' onClick={()=>handleConfirmChange(user.id)}>
                  <div className='delete__button'></div>
                </td>
                }
              </tr>
            ))}
          </table>
          <p className='text-right textlink mt-30' onClick={()=>setOrderOpen(true)}>
            スタッフの並び順を変更する ▲▼
          </p>
        </section>
        <section className='mt-60'>
          <h2 className='title__lv2 fw-700'>スタッフを追加する</h2>
          <p className='text-right ' onClick={()=>setRegisterOpen(true)}>
            <span className='info__sign' />
            スタッフ追加の流れについて
          </p>
          <p>
            スタッフに
            <strong>《登録URL》</strong>
            を共有し、登録手続きをしてもらってください
          </p>
          <div className='staff__url d-flex align-items-center justify-content-between'>
            <dl className='d-flex mb-0'>
              <dt>登録URL</dt>
              <dd className='ml-4'>{inviteUrl}</dd>
            </dl>
            <Button className=' url__clipboard p-0' onClick={handleCopy}>
              <span className='bg-blackgray text-white modal__button p-2 height-auto'>コピーする</span>
            </Button>
          </div>
          <div className='guide mt-40'>
            <p>
              スタッフに1クリックで登録のお願いメッセージを送ることができます。<br/>
              以下のメッセージは編集できます。
            </p>
            <textarea className='f__textarea mt-10' cols='30' rows='5' 
                      placeholder='スタッフに送るメッセージを入力してください'
                      defaultValue="《WORKCANVAS》という美容師・アイリスト・ネイリストの転職支援サービスを利用することにいたしました。
            エージェントが当社の「想い」や「環境」を基にして、マッチした求職者を紹介してくれるサービスです。
            求職者から当社の求人に応募がありましたら、当社スタッフが日程調整を行う必要があります。
            つきましては、求職者と日程調整を行っていただくため、まずは下記のURLをクリックして会員登録をお願いいたします。
            不安な点などあれば連絡ください！
            是非よろしくお願いします。"
            >
            </textarea>
            <div className='button__wrapper d-flex align-items-center justify-content-center mt-20'>
              <button className='line__button text-white modal__button w-45 p-2 bg-green' >LINEで送る</button>
              <button className='ml-4 mail__button text-white modal__button w-45 p-2 bg-blackgray' onClick={()=>setMailOpen(true)}>Mailで送る</button>
            </div>
          </div>
        </section>
        <div className='mt-40 d-flex justify-content-center'>
          <Link to='/enterprise' className='modal__button text__default '>トップに戻る</Link>
        </div>
        <ConfirmModal 
          open={confirmOpen} 
          handleChange={(open)=>setConfirmOpen(open)} 
          handleDelete={handleMemberDelete}
        />
        <RoleModal 
          open={roleOpen} 
          handleChange={(open)=>setRoleOpen(open)}
        />
        <OrderModal 
          open={orderOpen} 
          handleChange={(open)=>setOrderOpen(open)}
          members={members}
          setMembers={setMembers}
        />
        <RegisterModal 
          open={registerOpen} 
          handleChange={(open)=>setRegisterOpen(open)}
        />
        <MailModal 
          open={mailOpen} 
          handleChange={(open)=>setMailOpen(open)}
          alertOpen={alertOpen}
          setAlertOpen={setAlertOpen}
          setText={setText}
          setError={setError}
          inviteUrl={inviteUrl}
        />
        <Alert 
          open={alertOpen} 
          handleClose={(open)=>{setAlertOpen(open)}} 
          text={text}  
          error={error}/>
      </div>
    </div>
  )
}

export default Member;