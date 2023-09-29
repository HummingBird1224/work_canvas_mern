import React, {useState} from 'react';
import './Store.css'

const Store=()=>{  
  return(
    <div className="enterprise__container">
      <div className='enterprise__box text-default member'>
        <h1 className='title__lv1 '>店舗一覧</h1>
        <div className='guide text-center mt-30'>
          店舗がありません
        </div>
      </div>
    </div>
  )
}

export default Store;