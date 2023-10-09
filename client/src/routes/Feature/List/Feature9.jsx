import React, { useState, useEffect } from 'react';

import { answer, getFeature } from '../../../actions/action.js';
import Auth from '../../../utils/Auth.js';
import TextBox from '../../../components/Feature/TextBox.js';
import SingleRadioBox from '../../../components/Feature/SingleRadioBox.js';
import ToggleRadioBox from '../../../components/Feature/ToggleRadioBox.js';
import NumberBox from '../../../components/Feature/NumberBox.js';
import Alert from '../../../components/Alert/Alert.js';

const Feature9 = ({ featureId }) => {
  const companyId = Auth.getCompanyId();
  const [alertOpen, setAlertOpen] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const [data, setData] = useState({
    full_assistant_hiring: '',
    fa_basic_salary: 0,
    fa_trial: '',
    fa_trial_month: '',
    fa_trial_full_employed: '',
    fa_trial_salary_change: '',
    fa_increase_salary_detail: '',
    fa_added_allowance_detail: '',
    fa_average_income: 0,
    fa_cs_average_income: 0
  });

  const [shows, setShows] = useState({
    full_assistant_hiring: data.full_assistant_hiring,
    fa_trial: data.fa_trial,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  // useEffect(() => {
  //   if (shows.full_assistant_hiring == '0') {
  //     setData({
  //       ...data,
  //       fa_basic_salary: 0,
  //       fa_trial: '0',
  //       fa_trial_month: '0',
  //       fa_trial_full_employed: '0',
  //       fa_trial_salary_change: '0',
  //       fa_increase_salary_detail: '',
  //       fa_added_allowance_detail: '',
  //       fa_average_income: 0,
  //       fa_cs_average_income: 0
  //     });
  //   }
  //   if (shows.fa_trial == '0') {
  //     setData({
  //       ...data,
  //       fa_trial_full_employed: '0',
  //       fa_trial_salary_change: '0',
  //       fa_increase_salary_detail: '',
  //       fa_added_allowance_detail: '',
  //       fa_average_income: 0,
  //       fa_cs_average_income: 0
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
            setText('作成した！');
          }
          setError(false);
        }
        else {
          setError(true);
          setText('失敗した！');
        }
      })
      .catch(err => {
        setError(true);
        setText('失敗した！');
      })
    setAlertOpen(true);
  };

  useEffect(() => {
    async function getData() {
      companyId && await getFeature(companyId, featureId)
        .then(res => {
          if (res.status == '200') {
            setData({
              full_assistant_hiring: res.data.full_assistant_hiring,
              fa_basic_salary: res.data.fa_basic_salary,
              fa_trial: res.data.fa_trial,
              fa_trial_month: res.data.fa_trial_month,
              fa_trial_full_employed: res.data.fa_trial_full_employed,
              fa_trial_salary_change: res.data.fa_trial_salary_change,
              fa_increase_salary_detail: res.data.fa_increase_salary_detail,
              fa_added_allowance_detail: res.data.fa_added_allowance_detail,
              fa_average_income: res.data.fa_average_income,
              fa_cs_average_income: res.data.fa_cs_average_income,
            });
            setShows({
              full_assistant_hiring: res.data.full_assistant_hiring,
              fa_trial: res.data.fa_trial,
            })
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
                  <h3 className="u-c-darker"><span className="basic_enquete_numbering">1</span>【美容師】正社員アシスタントの待遇</h3>
                </div>

                <form id="answerForm">

                  <ToggleRadioBox
                    title='今後1年以内に『正社員アシスタント』を採用する可能性はありますか？'
                    name='full_assistant_hiring'
                    handleChange={handleChange}
                    value={data.full_assistant_hiring}
                    setShows={setShows}
                    shows={shows}
                  />

                  {shows.full_assistant_hiring == '1' &&
                    <>
                      <NumberBox
                        title='基本給はおいくらですか？(正社員アシスタント)　＊基本給＝手当や歩合を含まない金額'
                        name='fa_basic_salary'
                        min={0}
                        max={999999}
                        unit='円'
                        value={data.fa_basic_salary}
                        handleChange={handleChange}
                      />

                      <ToggleRadioBox
                        title='試用期間はありますか？ (正社員アシスタント)'
                        name='fa_trial'
                        handleChange={handleChange}
                        value={data.fa_trial}
                        setShows={setShows}
                        shows={shows}
                      />

                      {shows.fa_trial == '1' &&
                        <>
                          <NumberBox
                            title='試用期間は何ヶ月ですか？(正社員アシスタント)'
                            name='fa_trial_month'
                            min={0}
                            max={12}
                            unit='ヶ月'
                            value={data.fa_trial_month}
                            handleChange={handleChange}
                          />

                          <SingleRadioBox
                            title='試用期間中も正社員として雇用されますか？(正社員アシスタント)　※最初の数カ月は契約社員としての雇用になる場合は"いいえ"を選択してください'
                            name='fa_trial_full_employed'
                            handleChange={handleChange}
                            value={data.fa_trial_full_employed}
                          />

                          <SingleRadioBox
                            title='試用期間中の給料変動はありますか？(正社員アシスタント)　＊試用期間中、基本給が記入額より下がる場合、「はい」を選択ください'
                            name='fa_trial_salary_change'
                            handleChange={handleChange}
                            value={data.fa_trial_salary_change}
                          />

                          <TextBox
                            title='アシスタント向けの昇給制度があれば、詳細を教えて下さい。'
                            name='fa_increase_salary_detail'
                            placeholder='記入例：シャンプー習得済みで5000円昇給'
                            maxlength={500}
                            value={data.fa_increase_salary_detail}
                            handleChange={handleChange}
                          />

                          <TextBox
                            title='アシスタント向けの昇給制度があれば、詳細を教えて下さい。'
                            name='fa_added_allowance_detail'
                            placeholder='店販10%、皆勤、交通費'
                            maxlength={500}
                            value={data.fa_added_allowance_detail}
                            handleChange={handleChange}
                          />

                          <NumberBox
                            title='平均的な月収イメージを教えて下さい。(正社員アシスタント)　＊月収＝月給＋手当＋歩合まで含めた1ヶ月の額面給与'
                            name='fa_average_income'
                            min={0}
                            max={999999}
                            unit='円'
                            value={data.fa_average_income}
                            handleChange={handleChange}
                          />

                          <NumberBox
                            title='通信生の平均的な月収イメージを教えて下さい。　＊月収＝月給＋手当＋歩合まで含めた1ヶ月の額面給与'
                            name='fa_cs_average_income'
                            min={0}
                            max={999999}
                            unit='円'
                            value={data.fa_cs_average_income}
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

export default Feature9;