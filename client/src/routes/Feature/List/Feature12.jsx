import React, { useState, useEffect } from 'react';

import { answer, getFeature } from '../../../actions/action.js';
import Auth from '../../../utils/Auth.js';
import TextBox from '../../../components/Feature/TextBox.js';
import SingleRadioBox from '../../../components/Feature/SingleRadioBox.js';
import ToggleRadioBox from '../../../components/Feature/ToggleRadioBox.js';
import NumberBox from '../../../components/Feature/NumberBox.js';
import Alert from '../../../components/Alert/Alert.js';

const Feature12 = ({ featureId }) => {
  const companyId = Auth.getCompanyId();
  const [alertOpen, setAlertOpen] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const [data, setData] = useState({
    part_worker_hiring: '',
    ps_hourly: 0,
    pa_hourly: 0,
    p_trial: '',
    p_trial_month: 0,
    p_trial_salary_change:'',
    p_added_allowance_detail:''
  });

  const [shows, setShows] = useState({
    part_worker_hiring: '',
    p_trial: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  // useEffect(() => {
  //   if (shows.part_worker_hiring == '0') {
  //     setData({
  //       ...data,
  //       ps_hourly: 0,
  //       pa_hourly: 0,
  //       p_trial: '0',
  //       p_trial_month: 0
  //     });
  //   }
  //   if (shows.p_trial == '0') {
  //     setData({
  //       ...data,
  //       p_trial_month: 0
  //     });
  //   }
  // }, [shows]);

  const handleClick = async () => {
    await answer(data, featureId)
      .then(res => {
        if (res.status == '200') {
          if (res.data == '1') {
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
      .catch(err => {
        setError(true);
        setText('失敗しました！');
      })
    setAlertOpen(true);
  };

  useEffect(() => {
    async function getData() {
      companyId && await getFeature(companyId, featureId)
        .then(res => {
          if (res.status == '200') {
            setData({
              part_worker_hiring: res.data.part_worker_hiring,
              ps_hourly: res.data.ps_hourly,
              pa_hourly: res.data.pa_hourly,
              p_trial: res.data.p_trial,
              p_trial_month: res.data.p_trial_month,
              p_trial_salary_change: res.data.p_trial_salary_change,
              p_added_allowance_detail: res.data.p_added_allowance_detail,
            });
            setShows({
              part_worker_hiring: res.data.part_worker_hiring,
              p_trial: res.data.p_trial,
            });
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
    getData()
  }, []);

  return (
    <div className="enterprise_box">
      <div className="enterprise_contents">
        <h4 className="u-ta-c u-bb-gray u-pb-sm u-w-100 u-posi-absolute u-top-0 u-left-0">採用に関するアンケート</h4>
        <div className="u-pt-xl">
          <div className="enqueteWrapper">
            <div className="enquete__dispersion__wrapper02 u-mt-sm">
              <div className="enquete__contents u-m-0a u-w-100">
                <div className="u-mt-sm">
                  <h3 className="u-c-darker"><span className="basic_enquete_numbering">1</span>【美容師】アルバイト/パートの待遇</h3>
                </div>

                <form id="answerForm">
                  <ToggleRadioBox
                    title='今後1年以内に『アルバイト/パート』を採用する可能性はありますか？'
                    name='part_worker_hiring'
                    handleChange={handleChange}
                    value={data.part_worker_hiring}
                    setShows={setShows}
                    shows={shows}
                  />

                  {shows.part_worker_hiring == '1' &&
                    <>
                      <NumberBox
                        title='スタイリストの時給を教えて下さい。(アルバイト)'
                        name='ps_hourly'
                        min={0}
                        max={999999}
                        unit='円'
                        value={data.ps_hourly}
                        handleChange={handleChange}
                      />
                      <NumberBox
                        title='アシスタントの時給を教えて下さい。(アルバイト)'
                        name='pa_hourly'
                        min={0}
                        max={999999}
                        unit='円'
                        value={data.pa_hourly}
                        handleChange={handleChange}
                      />

                      <ToggleRadioBox
                        title='試用期間はありますか？ (アルバイト)'
                        name='p_trial'
                        handleChange={handleChange}
                        value={data.p_trial}
                        setShows={setShows}
                        shows={shows}
                      />

                      {shows.p_trial == '1' &&
                        <>
                          <NumberBox
                            title='試用期間は何ヶ月ですか？ (アルバイト)'
                            name='p_trial_month'
                            min={0}
                            max={12}
                            unit='ヶ月'
                            value={data.p_trial_month}
                            handleChange={handleChange}
                          />

                          <SingleRadioBox
                            title='試用期間中の給料変動はありますか？(アルバイト)　＊試用期間中、基本給が記入額より下がる場合、「はい」を選択ください'
                            name='p_trial_salary_change'
                            handleChange={handleChange}
                            value={data.p_trial_salary_change}
                          />

                          <TextBox
                            title='時給にプラスされる手当がある場合は教えて下さい。(アルバイト)'
                            name='p_added_allowance_detail'
                            placeholder='店販10%、皆勤、交通費'
                            maxlength={500}
                            value={data.p_added_allowance_detail}
                            handleChange={handleChange}
                          />
                        </>
                      }
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
      <Alert open={alertOpen} handleClose={(open) => { setAlertOpen(open) }} text={text} error={error} />
    </div>
  );
};

export default Feature12;