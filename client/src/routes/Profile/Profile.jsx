import React from 'react';

import './Profile.css'

const Profile=()=>{
  return(
    <div className="enterprise__container">
      <div className='enterprise__box text-default'>
        <h1 className=' fw-700'>企業</h1>
        <section>
          <table className='table__editable'>
            <tbody>
              <tr>
                <th>企業アカウント名</th>
                <td>C・crew</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className='mt-60'>
          <h3 className='title__lv3 fw-700'>基本情報</h3>
          <table className='table__editable'>
            <tbody>
              <tr>
                <th>
                  会社名 
                  <span className='f__required'>*</span>
                </th>
                <td>C・crew 渋谷</td>
              </tr>
              <tr>
                <th>創業者</th>
                <td></td>
              </tr>
              <tr>
                <th>設立年月</th>
                <td></td>
              </tr>
              <tr>
                <th>都道府県</th>
                <td>東京都</td>
              </tr>
              <tr>
                <th>住所(番地まで)</th>
                <td>渋谷区道玄坂1-17-7</td>
              </tr>
              <tr>
                <th>住所(ビル名・部屋番号)</th>
                <td>渋谷くすのきビル1-3F</td>
              </tr>
              <tr>
                <th>Facebook</th>
                <td></td>
              </tr>
              <tr>
                <th>Twitter</th>
                <td></td>
              </tr>
              <tr>
                <th>Instagram</th>
                <td></td>
              </tr>
              <tr>
                <th>HPアドレス</th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className='mt-60'>
          <p className='fc-lightgray fs-14'>
            ※内容に修正がございましたら、LINEよりお知らせください。
          </p> 
        </section>
      </div>
    </div>
  )
}

export default Profile;