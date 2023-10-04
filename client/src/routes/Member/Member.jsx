import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

import Auth from '../../utils/Auth';
import {getMembersData, changeRole, deleteMember} from '../../actions/action';
import ConfirmModal from '../../components/Modal/ConfirmModal';
import RoleModal from '../../components/Modal/RoleModal';
import OrderModal from '../../components/Modal/OrderModal';
import RegisterModal from '../../components/Modal/RegisterModal';
import MailModal from '../../components/Modal/MailModal';
import CopyToClipboard from '../../components/CopyClipboard/CopyClipboard';
import Alert from '../../components/Alert/Alert';
import NoAvatar from '../../asset/img/default_profile.png'
import './Member.css'

const userList=[
  {
    id:1,
    name:'星川豊',
    role:'管理者'
  },
  {
    id:2,
    name:'大盛 勇気',
    role:'採用担当者'
  },
]

const Member=()=>{
  const companyId=Auth.getCompanyId();
  const [members, setMembers] = useState([]);
  const [memberId, setMemberId] = useState('');
  const registerUrl='https://work-canvas.com/invite/ieu4wY6kHLcnCdyu4';
  const [confirmOpen, setConfirmOpen]=useState(false);
  const [roleOpen, setRoleOpen]=useState(false);
  const [orderOpen, setOrderOpen]=useState(false);
  const [registerOpen, setRegisterOpen]=useState(false);
  const [clipboardOpen, setClipboardOpen]=useState(false);
  const [mailOpen, setMailOpen]=useState(false);
  const [alertOpen, setAlertOpen]=useState(false);
  const roleChange= async (userId, e)=>{
    await changeRole(userId, e.target.value)
    .then(res=>{
      if(res.status == '200') {
        setMembers(res.data);
      }
      else {
        console.log(res.error.message);
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
          setConfirmOpen(false);
        }
        else {

        }
      })
    }
  }
  const handleCopy=(open)=>{
    setClipboardOpen(open);
  }
  useEffect(()=>{
    async function getData(){
      companyId && await getMembersData(companyId)
      .then(res=>{
        if(res.status == '200') {
          setMembers(res.data);
        }
      })
    }
    getData();
  }, [])
  console.log('......parent', members);
  return(
    <div className="enterprise__container">
      <div className='enterprise__box text-default member'>
        <h1 className='title__lv1 '>スタッフの管理</h1>
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
              <dd className='ml-4'>https://work-canvas.com/invite/ieu4wY6kHLcnCdyu4</dd>
            </dl>
            <Button className=' url__clipboard p-0' onClick={()=>handleCopy(true)}>
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
            >
              《WORKCANVAS》という美容師・アイリスト・ネイリストの転職支援サービスを利用することにいたしました。
              エージェントが当社の「想い」や「環境」を基にして、マッチした求職者を紹介してくれるサービスです。
              求職者から当社の求人に応募がありましたら、当社スタッフが日程調整を行う必要があります。
              つきましては、求職者と日程調整を行っていただくため、まずは下記のURLをクリックして会員登録をお願いいたします。
              不安な点などあれば連絡ください！
              是非よろしくお願いします。
              https://work-canvas.com/invite/ieu4wY6kHLcnCdyu4
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
        />
        <CopyToClipboard 
          open={clipboardOpen} 
          text={registerUrl}
        />
        <Alert open={alertOpen} handleClose={(open)=>{setAlertOpen(open)}} text='削除に失敗しました!'  error={true}/>
      </div>
    </div>
  )
}

export default Member;