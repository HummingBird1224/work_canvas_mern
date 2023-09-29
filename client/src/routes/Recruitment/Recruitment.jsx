import React, {useState} from 'react';
import './Recruitment.css'

const Recruitment=()=>{  
  return(
    <div className="enterprise__container">
      <div className='enterprise__box text-default member'>
        <h1 className='title__lv1 '>募集の一覧</h1>
        <p className='fw-700'>ブランドを選択してください。</p>
        <div className='guide text-center mt-30'>
          募集がありません
        </div>
      </div>
    </div>
  )
}

export default Recruitment;