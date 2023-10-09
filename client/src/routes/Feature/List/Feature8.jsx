import React, { useState, useEffect } from 'react';

import { answer, getFeature } from '../../../actions/action.js';
import Auth from '../../../utils/Auth.js';
import TextBox from '../../../components/Feature/TextBox.js';
import SingleRadioBox from '../../../components/Feature/SingleRadioBox.js';
import ToggleRadioBox from '../../../components/Feature/ToggleRadioBox.js';
import NumberBox from '../../../components/Feature/NumberBox.js';
import Alert from '../../../components/Alert/Alert.js';

const Feature8 = ({ featureId }) => {
  const companyId = Auth.getCompanyId();
  const [alertOpen, setAlertOpen] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    full_stylist_hiring: '',
    fs_basic_salary: 0,
    fs_nomination_fee: 0,
    fs_free_commission: 0,
    fs_trial: '',
    fs_trial_month: 0,
    fs_trial_full_employed: '0',
    fs_trial_salary_change: '0',
    fs_added_allowance_detail: '',
    fs_average_income: 0,
  });

  const [shows, setShows] = useState({
    full_stylist_hiring: '',
    fs_trial: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  // useEffect(() => {
  //   if (shows.full_stylist_hiring == '0') {
  //     setData({
  //       ...data,
  //       fs_basic_salary: 0,
  //       fs_nomination_fee: 0,
  //       fs_free_commission: 0,
  //       fs_trial: '',
  //       fs_trial_month: 0,
  //       fs_trial_full_employed: '',
  //       fs_trial_salary_change: '',
  //       fs_added_allowance_detail: '',
  //       fs_average_income: 0,
  //     });
  //   }
  //   if (shows.fs_trial == '0') {
  //     setData({
  //       ...data,
  //       fs_trial_month: 0,
  //       fs_trial_full_employed: '',
  //       fs_trial_salary_change: '',
  //       fs_added_allowance_detail: '',
  //       fs_average_income: 0,
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
              full_stylist_hiring: res.data.full_stylist_hiring,
              fs_basic_salary: res.data.fs_basic_salary,
              fs_nomination_fee: res.data.fs_nomination_fee,
              fs_free_commission: res.data.fs_free_commission,
              fs_trial: res.data.fs_trial,
              fs_trial_month: res.data.fs_trial_month,
              fs_trial_full_employed: res.data.fs_trial_full_employed,
              fs_trial_salary_change: res.data.fs_trial_salary_change,
              fs_added_allowance_detail: res.data.fs_added_allowance_detail,
              fs_average_income: res.data.fs_average_income,
            });
            setShows({
              full_stylist_hiring: res.data.full_stylist_hiring,
              fs_trial: res.data.fs_trial,
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
                  <h3 className="u-c-darker"><span className="basic_enquete_numbering">1</span>【美容師】正社員スタイリストの待遇</h3>
                </div>

                <form id="answerForm">

                  <ToggleRadioBox
                    title='今後1年以内に『正社員スタイリスト』を採用する可能性はありますか？'
                    name='full_stylist_hiring'
                    handleChange={handleChange}
                    value={data.full_stylist_hiring}
                    setShows={setShows}
                    shows={shows}
                  />

                  {shows.full_stylist_hiring == '1' &&
                    <>
                      <NumberBox
                        title='基本給はおいくらですか？(正社員スタイリスト)　＊基本給＝手当や歩合を含まない金額'
                        name='fs_basic_salary'
                        min={0}
                        max={999999}
                        unit='円'
                        value={data.fs_basic_salary}
                        handleChange={handleChange}
                      />
                      <NumberBox
                        title='指名歩合を教えて下さい。(業務委託)'
                        name='fs_nomination_fee'
                        min={0}
                        max={100}
                        unit='%'
                        value={data.fs_nomination_fee}
                        handleChange={handleChange}
                      />
                      <NumberBox
                        title='フリー歩合を教えて下さい。(正社員スタイリスト)'
                        name='fs_free_commission'
                        min={0}
                        max={100}
                        unit='%'
                        value={data.fs_free_commission}
                        handleChange={handleChange}
                      />
                      <ToggleRadioBox
                        title='アルバイト/試用期間はありますか？ (正社員スタイリスト)'
                        name='fs_trial'
                        handleChange={handleChange}
                        value={data.fs_trial}
                        setShows={setShows}
                        shows={shows}
                      />

                      {shows.fs_trial == '1' &&
                        <>
                          <NumberBox
                            title='試用期間は何ヶ月ですか？(正社員スタイリスト)'
                            name='fs_trial_month'
                            min={0}
                            max={12}
                            unit='ヶ月'
                            value={data.fs_trial_month}
                            handleChange={handleChange}
                          />
                          <SingleRadioBox
                            title='試用期間中も正社員として雇用されますか？(正社員スタイリスト)　※最初の数カ月は契約社員としての雇用になる場合は"いいえ"を選択してください'
                            name='fs_trial_full_employed'
                            handleChange={handleChange}
                            value={data.fs_trial_full_employed}
                          />
                          <SingleRadioBox
                            title='試用期間中の給料変動はありますか？(正社員スタイリスト)　＊試用期間中、基本給が記入額より下がる場合、「はい」を選択ください'
                            name='fs_trial_salary_change'
                            handleChange={handleChange}
                            value={data.fs_trial_salary_change}
                          />
                          <TextBox
                            title='基本給にプラスされる手当がある場合は、詳細を教えて下さい。(正社員スタイリスト)'
                            name='fs_added_allowance_detail'
                            placeholder='店販10%、皆勤、交通費'
                            maxlength={500}
                            value={data.fs_added_allowance_detail}
                            handleChange={handleChange}
                          />
                          <NumberBox
                            title='平均的な月収イメージを教えて下さい。(正社員スタイリスト)　＊月収＝月給＋手当＋歩合まで含めた1ヶ月の額面給与'
                            name='fs_average_income'
                            min={0}
                            max={999999}
                            unit='円'
                            value={data.fs_average_income}
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

export default Feature8;