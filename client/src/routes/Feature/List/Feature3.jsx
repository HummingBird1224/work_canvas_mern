import React, { useState, useEffect } from 'react';

import { answer, getFeature } from '../../../actions/action.js';
import Auth from '../../../utils/Auth.js';
import Alert from '../../../components/Alert/Alert.js';
import CheckBox from '../../../components/Feature/CheckBox.js';
import SingleRadioBox from '../../../components/Feature/SingleRadioBox.js';
import ToggleRadioBox from '../../../components/Feature/ToggleRadioBox.js';
import TextBox from '../../../components/Feature/TextBox.js';

const inputBoxes = [
  {
    value: '1',
    name: 'business_types',
    text: '美容室'
  },
  {
    value: '2',
    name: 'business_types',
    text: 'アイラッシュ'
  },
  {
    value: '3',
    name: 'business_types',
    text: 'ネイル'
  },
  {
    value: '4',
    name: 'business_types',
    text: 'エステ'
  },
  {
    value: '5',
    name: 'business_types',
    text: 'その他'
  },
];

const Feature3 = ({featureId}) => {
  const companyId=Auth.getCompanyId();
  const [alertOpen, setAlertOpen]=useState(false);
  const [text, setText]=useState('');
  const [error, setError]=useState(false);
  const [data, setData] = useState({
    online_interview: '',
    working_hours: '',
    business_hours: '',
    w_work: '',
    w_work_condition: '',
    multiple_business: '',
    business_types: []
  });

  const [shows, setShows] = useState({
    w_work:'',
    multiple_business: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (shows.w_work == '0') {
      setData({ ...data, 'w_work': '' });
    }
    if (shows.multiple_business == '0') {
      setData({ ...data, 'multiple_business': [] });
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
              online_interview: res.data.online_interview,
              working_hours: res.data.working_hours,
              business_hours: res.data.business_hours,
              w_work: res.data.w_work,
              w_work_condition: res.data.w_work_condition,
              multiple_business: res.data.multiple_business,
              business_types: res.data.business_types
            });
            setShows({
              w_work:res.data.w_work,
              multiple_business:res.data.multiple_business
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
                  <h3 className="u-c-darker"><span className="basic_enquete_numbering">1</span>勤務スタイル・選考の補足</h3>
                </div>

                <form id="answerForm">

                  <SingleRadioBox
                    title='面談・面接の際にWebでの実施は可能でしょうか？'
                    name='online_interview'
                    handleChange={handleChange}
                    value={data.online_interview}
                  />

                  <TextBox
                    title="勤務時間について教えて下さい。"
                    name="working_hours"
                    placeholder="例）早番：10:00-19:00"
                    maxlength={500}
                    value={data.working_hours}
                    handleChange={handleChange}
                  />

                  <TextBox
                    title="営業時間について教えて下さい。"
                    name="business_hours"
                    placeholder="例) 10:00-21:00"
                    maxlength={500}
                    value={data.business_hours}
                    handleChange={handleChange}
                  />

                  <ToggleRadioBox
                    title='正社員の場合、ワークは可能でしょうか。'
                    name='w_work'
                    handleChange={handleChange}
                    value={data.w_work}
                    setShows={setShows}
                    shows={shows}
                  />

                  {shows.w_work == '1' &&
                    <TextBox
                      title='ワークの条件があれば教えて下さい。'
                      name='w_work_condition'
                      placeholder=''
                      maxlength={500}
                      value={data.w_work_condition}
                      handleChange={handleChange}
                    />
                  }

                  <ToggleRadioBox
                    title='複数の業態で併設をしていますか？'
                    name='multiple_business'
                    handleChange={handleChange}
                    value={data.multiple_business}
                    setShows={setShows}
                    shows={shows}
                  />

                  {shows.multiple_business == '1' &&
                    <div className="u-mt-sm">
                      <h4>併設する業態はなんでしょうか？</h4>

                      <div>
                        {inputBoxes.map(box =>
                          <CheckBox
                            key={box.value}
                            name={box.name}
                            box={box}
                            setData={setData}
                            data={data}
                            value={data.business_types}
                            checked={data.business_types.includes(box.value)}
                          />
                        )}
                      </div>
                    </div>
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
};

export default Feature3;