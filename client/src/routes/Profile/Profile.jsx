import React, {useState, useEffect} from 'react';

import Alert from '../../components/Alert/Alert';
import Auth from '../../utils/Auth';
import {getCompanyData, editCompanyData} from '../../actions/action';
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
  const [alertOpen, setAlertOpen]=useState(false);
  const [error, setError]=useState(false);
  const [text, setText]=useState('');
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
  }, []);
  const handleChange=(event)=>{
    const {name, value}=event.target;
    setCompany({...company, [name]:value});
  }
  const handleSubmit=async()=>{
    await editCompanyData(company)
    .then(res=>{
      if(res.status == '200'){
        setText('更新しました!');
        setError(false);
      }
      else {
        setError(true);
        setText('更新に失敗しました！');
      }
      setAlertOpen(true);
    })
  }
  return(
    <div className="enterprise__container">
      <div className='enterprise__box text-default'>
        <h1 className=' fw-700'>企業</h1>
        <section>
          <table className='table__editable'>
            <tbody>
              <tr>
                <th>企業アカウント名</th>
                <td>
                  <input
                    type="text"
                    name="corporate_name"
                    className="form--type_text companyName w-80" 
                    value={company.corporate_name}
                    onChange={handleChange}
                    />
                  {/* {company.corporate_name} */}
                </td>
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
                <td>
                  <input
                    type="text"
                    name="company_name"
                    className="form--type_text companyName w-80" 
                    value={company.company_name}
                    onChange={handleChange}
                    />
                </td>
              </tr>
              <tr>
                <th>創業者</th>
                <td>
                  <input
                    type="text"
                    name="founder"
                    className="form--type_text companyName w-80" 
                    value={company.founder}
                    onChange={handleChange}
                    />
                </td>
              </tr>
              <tr>
                <th>設立年月</th>
                <td>
                  <input
                    type="text"
                    name="foundation_date"
                    className="form--type_text companyName w-80" 
                    value={company.foundation_date}
                    onChange={handleChange}
                    />
                </td>
              </tr>
              <tr>
                <th>都道府県</th>
                <td>
                  <select 
                    name="prefecture_id" 
                    className="form--type_select u-w-sp-100 prefectures w-80"
                    value={company.prefecture_id}
                    onChange={handleChange}
                  >
                    <option value="">選択してください</option>
                    {prefectures.map(prefecture=>(
                      <option value={prefecture.id} key={prefecture.id}>{prefecture.jp_name}</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <th>住所(番地まで)</th>
                <td>
                  <input
                    type="text"
                    name="address_main"
                    className="form--type_text companyName w-80" 
                    value={company.address_main}
                    onChange={handleChange}
                    />
                </td>
              </tr>
              <tr>
                <th>住所(ビル名・部屋番号)</th>
                <td>
                  <input
                    type="text"
                    name="address_detail"
                    className="form--type_text companyName w-80" 
                    value={company.address_detail}
                    onChange={handleChange}
                    />
                </td>
              </tr>
              <tr>
                <th>Facebook</th>
                <td>
                  <input
                    type="text"
                    name="facebook"
                    className="form--type_text companyName w-80" 
                    value={company.facebook}
                    onChange={handleChange}
                    />
                </td>
              </tr>
              <tr>
                <th>Twitter</th>
                <td>
                  <input
                    type="text"
                    name="twitter"
                    className="form--type_text companyName w-80" 
                    value={company.twitter}
                    onChange={handleChange}
                    />
                </td>
              </tr>
              <tr>
                <th>Instagram</th>
                <td>
                  <input
                    type="text"
                    name="instagram"
                    className="form--type_text companyName w-80" 
                    value={company.instagram}
                    onChange={handleChange}
                    />
                </td>
              </tr>
              <tr>
                <th>HPアドレス</th>
                <td>
                  <input
                    type="text"
                    name="homepage"
                    className="form--type_text companyName w-80" 
                    value={company.homepage}
                    onChange={handleChange}
                    />
                </td>
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
      <div className="button__wrapper justify-content-center mt-40 w-100 d-flex " >
        <button 
          className={`bg-pink text-white modal__button w-250 ${company.company_name == '' || !company.company_name && 'opacity-8'}`} 
          onClick={handleSubmit} disabled={company.company_name == '' || !company.company_name}
        >
          更新
        </button>
      </div>
      <Alert open={alertOpen} handleClose={(open)=>setAlertOpen(open)} text={text} error={error}/>
    </div>
  )
}

export default Profile;