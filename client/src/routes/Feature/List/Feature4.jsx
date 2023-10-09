import React, { useState, useEffect } from 'react';

import { answer, getFeature } from '../../../actions/action.js';
import Auth from '../../../utils/Auth.js';
import Alert from '../../../components/Alert/Alert.js';
import ToggleRadioBox from '../../../components/Feature/ToggleRadioBox.js';
import TextBox from '../../../components/Feature/TextBox.js';

const Equipment = ({featureId}) => {
  const companyId=Auth.getCompanyId();
  const [alertOpen, setAlertOpen]=useState(false);
  const [text, setText]=useState('');
  const [error, setError]=useState(false);
  const [data, setData] = useState({
    dormitory: '',
    dormitory_condition: '',
    housing_allowance: '',
    housing_allowance_detail: '',
    bonus: '',
    bonus_detail: '',
    retirement_allowance: '',
    retirement_allowance_detail: '',
    childcare_center: '',
    maternity_vacation: '',
    maternity_vacation_condition: '',
    car_commute: '',
    short_time_working: '',
    special_salary:''
  });

  const [shows, setShows] = useState({
    dormitory: '',
    housing_allowance: '',
    bonus: '',
    retirement_allowance: '',
    maternity_vacation: '',
    short_time_working: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (shows.dormitory == '0') {
      setData({ ...data, moving_condition: '' });
    }
    if (shows.housing_allowance == '0') {
      setData({ ...data, housing_allow_detail: '' });
    }
    if (shows.bonus == '0') {
      setData({ ...data, bonus_system_detail: '' });
    }
    if (shows.retirement_allowance == '0') {
      setData({ ...data, retirement_allow_detail: '' });
    }
    if (shows.maternity_vacation == '0') {
      setData({ ...data, maternity_system_condition: '' });
    }
    if (shows.short_time_working == '0') {
      setData({ ...data, shorttime_system_salary: '' });
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
              dormitory: res.data.dormitory ,
              dormitory_condition: res.data.dormitory_condition ,
              housing_allowance: res.data.housing_allowance ,
              housing_allowance_detail: res.data.housing_allowance_detail ,
              bonus: res.data.bonus ,
              bonus_detail: res.data.bonus_detail ,
              retirement_allowance: res.data.retirement_allowance ,
              retirement_allowance_detail: res.data.retirement_allowance_detail ,
              childcare_center: res.data.childcare_center ,
              maternity_vacation: res.data.maternity_vacation ,
              maternity_vacation_condition: res.data.maternity_vacation_condition ,
              car_commute: res.data.car_commute ,
              short_time_working: res.data.short_time_working ,
              special_salary:res.data.special_salary ,
            });
            setShows({
              dormitory: res.data.dormitory ,
              housing_allowance: res.data.housing_allowance ,
              bonus: res.data.bonus ,
              retirement_allowance: res.data.retirement_allowance ,
              maternity_vacation: res.data.maternity_vacation ,
              short_time_working: res.data.short_time_working ,
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
                  <h3 className="u-c-darker"><span className="basic_enquete_numbering">1</span>制度・設備</h3>
                </div>

                <form id="answerForm">

                  <ToggleRadioBox
                    title='寮や社宅の制度はありますか？'
                    name='dormitory'
                    handleChange={handleChange}
                    value={data.dormitory}
                    setShows={setShows}
                    shows={shows}
                  />
                  {shows.dormitory == '1' &&
                    <TextBox
                      title='入居の条件等があれば教えて下さい。'
                      name='dormitory_condition'
                      placeholder=''
                      maxlength={500}
                      value={data.dormitory_condition}
                      handleChange={handleChange}
                    />
                  }

                  <ToggleRadioBox
                    title='住宅手当の制度はありますか？'
                    name='housing_allowance'
                    handleChange={handleChange}
                    value={data.housing_allowance}
                    setShows={setShows}
                    shows={shows}
                  />
                  {shows.housing_allowance == '1' &&
                    <TextBox
                      title='住宅手当の詳細を教えて下さい。'
                      name='housing_allowance_detail'
                      placeholder=''
                      maxlength={500}
                      value={data.housing_allowance_detail}
                    handleChange={handleChange}
                    />
                  }
                  
                  <ToggleRadioBox
                    title='賞与の制度はありますか？'
                    name='bonus'
                    handleChange={handleChange}
                    value={data.bonus }
                    setShows={setShows}
                    shows={shows}
                  />
                  {shows.bonus == '1' &&
                    <TextBox
                      title='賞与の制度の詳細を教えて下さい。'
                      name='bonus_detail'
                      placeholder=''
                      maxlength={500}
                      value={data.bonus_detail}
                    handleChange={handleChange}
                    />
                  }

                  <ToggleRadioBox
                    title='退職金の制度はありますか？'
                    name='retirement_allowance'
                    handleChange={handleChange}
                    value={data.retirement_allowance }
                    setShows={setShows}
                    shows={shows}
                  />
                  {shows.retirement_allowance == '1' &&
                    <TextBox
                      title='退職金の制度の詳細を教えて下さい。'
                      name='retirement_allowance_detail'
                      placeholder=''
                      maxlength={500}
                      value={data.retirement_allowance_detail}
                    handleChange={handleChange}
                    />
                  }

                  <ToggleRadioBox
                    title='社内託児所はありますか？'
                    name='childcare_center'
                    handleChange={handleChange}
                    value={data.childcare_center }
                    setShows={setShows}
                    shows={shows}
                  />
                  
                  <ToggleRadioBox
                    title='育休/産休制度はありますか？'
                    name='maternity_vacation'
                    handleChange={handleChange}
                    value={data.maternity_vacation }
                    setShows={setShows}
                    shows={shows}
                  />
                  {shows.maternity_vacation == '1' &&
                    <TextBox
                      title='育休/産休の取得条件について教えて下さい。'
                      name='maternity_vacation_condition'
                      placeholder=''
                      maxlength={500}
                      value={data.maternity_vacation_condition}
                    handleChange={handleChange}
                    />
                  }
                  
                  <ToggleRadioBox
                    title='車通勤は可能ですか？'
                    name='car_commute'
                    handleChange={handleChange}
                    value={data.car_commute }
                    setShows={setShows}
                    shows={shows}
                  />
                  
                  <ToggleRadioBox
                    title='正社員向けの時短勤務制度はございますか？'
                    name='short_time_working'
                    handleChange={handleChange}
                    value={data.short_time_working }
                    setShows={setShows}
                    shows={shows}
                  />
                  {shows.short_time_working == '1' &&
                    <TextBox
                      title='時短勤務など特殊な勤務形態に合わせた正社員向けの給与制度があれば教えて下さい。'
                      name='special_salary'
                      placeholder=''
                      maxlength={500}
                      value={data.special_salary}
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
}; export default Equipment;