import React, {useState, useEffect} from 'react';

import Auth from '../../utils/Auth';
import {getCompanyData} from '../../actions/action';
import prefectures from '../../utils/tbl_prefecture_region.json';
import './Profile.css';

const Profile=()=>{
  const [company, setCompany]=useState({
    corporate_name:'',
    company_name:'',
    founder:'',
    foundation_date:'',
    prefecture_id:'',
    address_main:'',
    address_detail:'',
    facebook:'',
    twitter:'',
    instagram:'',
    homepage:'',
  });
  const companyId=Auth.getCompanyId();
  useEffect(()=>{
    async function getData(){
      companyId && await getCompanyData(companyId)
      .then(res=>{
        if(res.status == '200') {
          setCompany(res.data);
        }
      })
    }
    getData();
  }, [])
  return(
    <div className="enterprise__container">
      <div className='enterprise__box text-default'>
        <h1 className=' fw-700'>企業</h1>
        <section>
          <table className='table__editable'>
            <tbody>
              <tr>
                <th>企業アカウント名</th>
                <td>{company.corporate_name}</td>
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
                <td>{company.company_name}</td>
              </tr>
              <tr>
                <th>創業者</th>
                <td>{company.founder}</td>
              </tr>
              <tr>
                <th>設立年月</th>
                <td>{company.foundation_date}</td>
              </tr>
              <tr>
                <th>都道府県</th>
                <td>
                  {prefectures.map(prefecture=>{
                    if(prefecture.id == company.prefecture_id)
                     return prefecture.jp_name;
                  })}
                </td>
              </tr>
              <tr>
                <th>住所(番地まで)</th>
                <td>{company.address_main}</td>
              </tr>
              <tr>
                <th>住所(ビル名・部屋番号)</th>
                <td>{company.address_detail}</td>
              </tr>
              <tr>
                <th>Facebook</th>
                <td>{company.facebook}</td>
              </tr>
              <tr>
                <th>Twitter</th>
                <td>{company.twitter}</td>
              </tr>
              <tr>
                <th>Instagram</th>
                <td>{company.instagram}</td>
              </tr>
              <tr>
                <th>HPアドレス</th>
                <td>{company.homepage}</td>
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