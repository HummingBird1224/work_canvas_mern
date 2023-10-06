import React, {useEffect, useState} from 'react';
import {useParams, Redirect} from 'react-router-dom';

import Alert from '../../components/Alert/Alert';
import {mailVerify} from '../../actions/action';

const MailVerify=()=>{
  const {token} = useParams();
  const [verified, setVerified]=useState(false);
  const [text, setText]=useState('');
  const [alertOpen, setAlertOpen]=useState(false);
  useEffect(()=>{
    async function getData(){
      await mailVerify(token)
        .then(async (res)=>{
          if(res.status == '200'){
            setVerified(true);
          }
          else {
            setAlertOpen(true);
            setText(res.error.message);
          }
        })
    }
    getData();
  }, [token])
  return(
    <>
    {verified?
      <Redirect to='/enterprise/step'/>:
      <Alert open={alertOpen} handleClose={(open)=>setAlertOpen(open)} text={text} error={true} /> 
    }
    </>
  )
}

export default MailVerify;