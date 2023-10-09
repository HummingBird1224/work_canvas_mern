import React, { useState, useEffect } from 'react';

import { answer, getFeature } from '../../../actions/action.js';
import Auth from '../../../utils/Auth.js';
import SingleRadioBox from '../../../components/Feature/SingleRadioBox.js';
import ToggleRadioBox from '../../../components/Feature/ToggleRadioBox.js';
import DropdownBox from '../../../components/Feature/DropdownBox.js';
import NumberBox from '../../../components/Feature/NumberBox.js';
import TextBox from '../../../components/Feature/TextBox.js';
import Alert from '../../../components/Alert/Alert.js';

const options = {
  monthly: [
    {
      value: '1',
      text: '完全週休2日制'
    },
    {
      value: '2',
      text: '完全週休2日制ではないが月8日以上の休みがある'
    },
    {
      value: '3',
      text: 'その他（週休2日制で、月休日合計が7日以下になるケースなど）'
    }
  ],
  weekend: [
    {
      value: '1',
      text: 'いつでもOK'
    },
    {
      value: '2',
      text: '月に数回ならOK'
    },
    {
      value: '3',
      text: '冠婚葬祭ならOK'
    },
    {
      value: '4',
      text: '相談NG'
    }
  ],

};

const Feature2 = ({featureId}) => {
  const companyId=Auth.getCompanyId();
  const [alertOpen, setAlertOpen]=useState(false);
  const [text, setText]=useState('');
  const [error, setError]=useState(false);
  const [data, setData] = useState({});

  const [shows, setShows] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (shows.summer_holidays == '0') {
      setData({ ...data, summer_days: 0, summer_condition: '' });
    }
    if (shows.winter_holidays == '0') {
      setData({ ...data, winter_days: 0, winter_condition: '' });
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
              vacation: res.data.vacation,
              full_vacation: res.data.full_vacation,
              outsourcing_vacation: res.data.outsourcing_vacation,
              part_vacation: res.data.part_vacation,
              paid_holidays: res.data.paid_holidays,
              summer_holidays: res.data.summer_holidays,
              summer_days: res.data.summer_days,
              summer_condition: res.data.summer_condition,
              winter_holidays: res.data.winter_holidays,
              winter_days: res.data.winter_days,
              winter_condition: res.data.winter_condition
            });
            setShows({
              summer_holidays:res.data.summer_holidays,
              winter_holidays:res.data.winter_holidays
            })
          }
        })
        .catch(err=>{
          console.log(err)
        })
    }
    getData()
  }, [])
  console.log(data, shows);
  return (
    <div className="enterprise_box">
      <div className="enterprise_contents">
        <h4 className="u-ta-c u-bb-gray u-pb-sm u-w-100 u-posi-absolute u-top-0 u-left-0">採用に関するアンケート</h4>
        <div className="u-pt-xl">
          <div className="enqueteWrapper">
            <div className="enquete__dispersion__wrapper02 u-mt-sm">
              <div className="enquete__contents u-m-0a u-w-100">
                <div className="u-mt-sm">
                  <h3 className="u-c-darker"><span className="basic_enquete_numbering">1</span>休暇の取得</h3>
                </div>

                <form id="answerForm">

                  <DropdownBox
                    title='毎月の休暇について教えて下さい。（「完全週休2日制」の選択肢は、毎週確実に2日の休みが取れる場合のみ選択ください）'
                    options={options.monthly}
                    value={data.vacation}
                    handleChange={handleChange}
                    name='vacation'
                  />

                  <DropdownBox
                    title='正社員の土日休暇の取得条件を教えて下さい。'
                    options={options.weekend}
                    value={data.full_vacation}
                    handleChange={handleChange}
                    name='full_vacation'
                  />

                  <DropdownBox
                    title='業務委託の土日休暇の取得条件を教えて下さい。'
                    options={options.weekend}
                    value={data.outsourcing_vacation}
                    handleChange={handleChange}
                    name='outsourcing_vacation'
                  />

                  <DropdownBox
                    title='パートの土日休暇の取得条件を教えて下さい。'
                    options={options.weekend}
                    value={data.part_vacation}
                    handleChange={handleChange}
                    name='part_vacation'
                  />

                  <SingleRadioBox
                    title='有給休暇はありますか？'
                    name='paid_holidays'
                    handleChange={handleChange}
                    value={data.paid_holidays}
                  />

                  <ToggleRadioBox
                    title='有給休暇の利用以外で、別途夏季休暇はありますか？'
                    name='summer_holidays'
                    handleChange={handleChange}
                    value={data.summer_holidays}
                    setShows={setShows}
                    shows={shows}
                  />

                  {shows.summer_holidays == '1' &&
                    <>
                      <NumberBox
                        title='夏季休暇の日数を教えてください。(有給休暇を除く)'
                        name='summer_days'
                        min={0}
                        max={30}
                        unit='日'
                        value={data.summer_days}
                        handleChange={handleChange}
                      />
                      
                      <TextBox
                        title='夏季休暇の取得条件などがあれば教えて下さい。'
                        name='summer_condition'
                        placeholder=''
                        maxlength={500}
                        value={data.summer_condition}
                        handleChange={handleChange}
                      />
                    </>
                  }

                  <ToggleRadioBox
                    title='有給休暇の利用以外で、別途冬季休暇はありますか？'
                    name='winter_holidays'
                    handleChange={handleChange}
                    value={data.winter_holidays}
                    setShows={setShows}
                    shows={shows}
                  />

                  {shows.winter_holidays == '1' &&
                    <>
                      <NumberBox
                        title='冬季休暇の日数を教えてください。(有給休暇を除く)'
                        name='winter_days'
                        min={0}
                        max={30}
                        unit='日'
                        value={data.winter_days}
                        handleChange={handleChange}
                      />

                      <TextBox
                        title='冬季休暇の取得条件などがあれば教えて下さい。'
                        name='winter_vacation_condition'
                        placeholder=''
                        maxlength={500}
                        value={data.winter_condition}
                        handleChange={handleChange}
                      />
                    </>
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

export default Feature2;