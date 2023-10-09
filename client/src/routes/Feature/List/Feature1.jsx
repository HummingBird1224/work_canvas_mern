import React, { useState, useEffect } from 'react';

import { answer, getFeature } from '../../../actions/action.js';
import Auth from '../../../utils/Auth.js';
import Alert from '../../../components/Alert/Alert.js';
import CheckBox from '../../../components/Feature/CheckBox.js';
import SingleRadioBox from '../../../components/Feature/SingleRadioBox.js';
import ToggleRadioBox from '../../../components/Feature/ToggleRadioBox.js';
import DropdownBox from '../../../components/Feature/DropdownBox.js';
import NumberBox from '../../../components/Feature/NumberBox.js';

const inputBoxes = [
  {
    value: '1',
    name:'insurance',
    text: '健康保険'
  },
  {
    value: '2',
    name:'insurance',
    text: '厚生年金'
  },
  {
    value: '3',
    name:'insurance',
    text: '雇用保険'
  },
  {
    value: '4',
    name:'insurance',
    text: '労災保険'
  },
  {
    value: '5',
    name:'insurance',
    text: '保険加入なし'
  }
];

const options = [
  {
    value:'1',
    text:'協会けんぽ'
  },
  {
    value:'2',
    text:'理美けんぽ'
  },
  {
    value:'3',
    text:'美容国保'
  },
  {
    value:'4',
    text:'整容国保'
  },
  {
    value:'5',
    text:'わからない'
  },
  {
    value:'6',
    text:'加入不可'
  }
]

const Feature1=({featureId})=> {
  const companyId=Auth.getCompanyId();
  const [alertOpen, setAlertOpen]=useState(false);
  const [text, setText]=useState('');
  const [error, setError]=useState(false);
  const [data, setData] = useState({
    insurance: [],
    social_insurance:'',
    health_insurance:'',
    full_traffic: '',
    full_traffic_amount: 0,
    part_traffic: '',
    part_traffic_amount: 0,
  });

  const [shows, setShows] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  useEffect(()=>{
    if(shows.full_traffic == '0'){
      setData({...data, 'full_traffic_amount':0});
    }
    if(shows.part_traffic == '0'){
      setData({...data, 'part_traffic_amount':0});
    }
  }, [shows]);

  const handleClick=async()=>{
    await answer(data, featureId)
      .then(res=>{
        if(res.status == '200'){
          if(res.data == '1'){
            setText('更新しました！');            
          }
          else {
            setText('作成しました！');            
          }
          setError(false);
        }
        else {
          setError(true);
          setText('失敗しました！');
        }
      })
      .catch(err=>{
        setError(true);
        setText('失敗しました！');
      })
    setAlertOpen(true);
  }

  useEffect(()=>{
    async function getData(){
      companyId && await getFeature(companyId, featureId)
        .then(res=>{
          if(res.status == '200') {
            setData({
              insurance: res.data.insurance,
              social_insurance:res.data.social_insurance,
              health_insurance:res.data.health_insurance,
              full_traffic: res.data.full_traffic,
              full_traffic_amount: res.data.full_traffic_amount,
              part_traffic: res.data.part_traffic,
              part_traffic_amount: res.data.part_traffic_amount,
            });
            setShows({
              full_traffic:res.data.full_traffic,
              part_traffic:res.data.part_traffic
            })
          }
        })
        .catch(err=>{
          console.log(err)
        })
    }
    getData()
  }, [])

  return (
    <div className="enterprise_box">
      <div className="enterprise_contents">
        <h4 className="u-ta-c u-bb-gray u-pb-sm u-w-100 u-posi-absolute u-top-0 u-left-0">採用に関するアンケート</h4>
        <div className="u-pt-xl">
          <div className="enqueteWrapper">
            <div className="enquete__dispersion__wrapper02 u-mt-sm">
              <div className="enquete__contents u-m-0a u-w-100">
                <div className="u-mt-sm">
                  <h3 className="u-c-darker">
                    <span className="basic_enquete_numbering">1</span>
                    交通費・社会保険
                  </h3>
                </div>
                <form id="answerForm">
                  <div className="u-mt-sm">
                    <h4>加入可能な保険を教えて下さい。（複数選択可。加入予定のものは反映せず、確実に加入できるもののみを選択ください。加入できない場合は「保険加入なし」を選択ください。）</h4>
                    <div>
                      {inputBoxes.map(box =>
                        <CheckBox 
                          key={box.value} 
                          box={box} 
                          setData={setData}
                          data={data}
                          checked={data.insurance.includes(box.value)}
                          value={data.insurance}
                        />
                      )}
                    </div>
                  </div>

                  <SingleRadioBox 
                    title='時短勤務・パートで社会保険加入できますか？（フルタイムの4分の3以上勤務の場合）' 
                    name='social_insurance'
                    handleChange={handleChange}
                    value={data.social_insurance}
                  />   

                  <DropdownBox
                    title='健康保険の種類について教えて下さい。'
                    options={options}
                    value={data.health_insurance}
                    handleChange={handleChange}
                    name='health_insurance'
                  />

                  <ToggleRadioBox 
                    title='正社員の交通費は支給されますか？' 
                    name='full_traffic'
                    handleChange={handleChange}
                    value={data.full_traffic}
                    setShows={setShows}
                    shows={shows}
                  /> 

                  {shows.full_traffic == '1' && 
                    <NumberBox 
                      title='正社員への交通費支給上限額(/月)を教えて下さい。(上限がない場合は999999と記入)'
                      name='full_traffic_amount'
                      min={0}
                      max={999999}
                      unit='円'
                      value={data.full_traffic_amount}
                      handleChange={handleChange}
                    />
                  }

                  <ToggleRadioBox 
                    title='アルバイト/パートの交通費は支給されますか？' 
                    name='part_traffic'
                    handleChange={handleChange}
                    value={data.part_traffic}
                    setShows={setShows}
                    shows={shows}
                  /> 

                  {shows.part_traffic == '1' && 
                    <NumberBox 
                      title='アルバイト/パートへの交通費支給上限額(/月)を教えて下さい。(上限がない場合は999999と記入)'
                      name='part_traffic_amount'
                      min={0}
                      max={999999}
                      unit='円'
                      value={data.part_traffic_amount_traffic_amount}
                      handleChange={handleChange}
                    />
                  }                  
                </form>
              </div>

              <div className="enquete__button__wrapper basic_enquete_button_wrapper">
                <p className="u-c-gray u-fs-12">※複数店舗をお持ちのサロン様はメインの店舗に関してご回答ください</p>
                <a className="go-next u-f-1 goNext u-w-100 button button--type_primary" onClick={handleClick}>回答する</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Alert open={alertOpen} handleClose={(open)=>{setAlertOpen(open)}} text={text} error={error}/>
    </div>
  );
}

export default Feature1;