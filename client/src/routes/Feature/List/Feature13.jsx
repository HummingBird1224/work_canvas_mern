import React, { useState, useEffect } from 'react';

import { answer, getFeature } from '../../../actions/action.js';
import Auth from '../../../utils/Auth.js';
import CheckBox from '../../../components/Feature/CheckBox.js';
import TextBox from '../../../components/Feature/TextBox.js';
import SingleRadioBox from '../../../components/Feature/SingleRadioBox.js';
import ToggleRadioBox from '../../../components/Feature/ToggleRadioBox.js';
import DropdownBox from '../../../components/Feature/DropdownBox.js';
import NumberBox from '../../../components/Feature/NumberBox.js';
import Alert from '../../../components/Alert/Alert.js';


  const options = {
    business: [
      {
        value: '1',
        text: '営業時間内練習可'
      },
      {
        value: '2',
        text: '営業時間不可だが練習自由'
      },
      {
        value: '3',
        text: '練習不可'
      }
    ],
    customer: [
      {
        value: '1',
        text: 'マンツーマン施術'
      },
      {
        value: '2',
        text: 'アシスタント入れて施術'
      },
      {
        value: '3',
        text: ''
      }
    ]
  };

  const inputBoxes = [
    {
      value: '1',
      name: 'hairdresser_working_type',
      text: '時短正社員'
    },
    {
      value: '2',
      name: 'hairdresser_working_type',
      text: 'パート/アルバイト'
    },
    {
      value: '3',
      name: 'hairdresser_working_type',
      text: '業務委託'
    },
    {
      value: '4',
      name: 'hairdresser_working_type',
      text: 'その他'
    }
  ];

const Feature13 = ({featureId}) => {
  const companyId = Auth.getCompanyId();
  const [alertOpen, setAlertOpen] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const [data, setData] = useState({
    practice_session: '',
    practice_times: 0,
    business_practice: '',
    mtm_training: '',
    new_employee_training: '',
    inexperience_debut_years: 0,
    mid_debut_months: 0,
    lesson_place: '',
    missing_skill_follow_up: '',
    missing_follow_up_detail: '',
    contest_support: '',
    contest_support_detail: '',
    hairdresser_working_type: [],
    customer_service_style: '',
    stylist_average_customers: '',
  });

  const [shows, setShows] = useState({
    practice_session: '',
    missing_skill_follow_up: '',
    contest_support:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (shows.practice_session == '0') {
      setData({
        ...data,
        'practice_times': 0
      });
    }
    if (shows.missing_skill_follow_up == '0') {
      setData({
        ...data,
        'missing_follow_up_detail': ''
      });
    }
    if (shows.contest_support == '0') {
      setData({
        ...data,
        contest_support_detail: ''
      });
    }
  }, [shows]);

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
              practice_session: res.data.practice_session,
              practice_times: res.data.practice_times,
              business_practice: res.data.business_practice,
              mtm_training: res.data.mtm_training,
              new_employee_training: res.data.new_employee_training,
              inexperience_debut_years: res.data.inexperience_debut_years,
              mid_debut_months: res.data.mid_debut_months,
              lesson_place: res.data.lesson_place,
              missing_skill_follow_up: res.data.missing_skill_follow_up,
              missing_follow_up_detail: res.data.missing_follow_up_detail,
              contest_support: res.data.contest_support,
              contest_support_detail: res.data.contest_support_detail,
              hairdresser_working_type: res.data.hairdresser_working_type,
              customer_service_style: res.data.customer_service_style,
              stylist_average_customers: res.data.stylist_average_customers,
            });
            setShows({
              practice_session: res.data.practice_session,
              missing_skill_follow_up: res.data.missing_skill_follow_up,
              contest_support: res.data.contest_support,
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
    <div class="enterprise_box">
      <div class="enterprise_contents">
        <h4 class="u-ta-c u-bb-gray u-pb-sm u-w-100 u-posi-absolute u-top-0 u-left-0">採用に関するアンケート</h4>
        <div class="u-pt-xl">
          <div class="enqueteWrapper">
            <div class="enquete__dispersion__wrapper02 u-mt-sm">
              <div class="enquete__contents u-m-0a u-w-100">

                <div class="u-mt-sm">
                  <h3 class="u-c-darker"><span class="basic_enquete_numbering">1</span>【美容師】教育・勤務例</h3>
                </div>

                <form id="answerForm">

                  <ToggleRadioBox
                    title='練習会はありますか？'
                    name='practice_session'
                    handleChange={handleChange}
                    value={data.practice_session}
                    setShows={setShows}
                    shows={shows}
                  />

                  {shows.practice_session == '1' &&
                    <>
                      <NumberBox
                        title='練習会は週に何回程度行いますか？'
                        name='practice_times'
                        min={0}
                        max={1000}
                        unit='回'
                        value={data.practice_times}
                        handleChange={handleChange}
                      />
                    </>
                  }

                  <DropdownBox
                    title='営業時間内に練習することは可能ですか？'
                    options={options.business}
                    value={data.business_practice}
                    handleChange={handleChange}
                    name='business_practice'
                  />

                  <SingleRadioBox
                    title='マンツーマンでの教育はありますか？'
                    name='mtm_training'
                    handleChange={handleChange}
                    value={data.mtm_training}
                  />

                  <SingleRadioBox
                    title='新人教育向けのカリキュラムはありますか？'
                    name='new_employee_training'
                    handleChange={handleChange}
                    value={data.new_employee_training}
                  />

                  <NumberBox
                    title='未経験の方のスタイリストデビューまでの平均的な期間を教えて下さい。'
                    name='inexperience_debut_years'
                    min={0}
                    max={100}
                    unit='年'
                    value={data.inexperience_debut_years}
                    handleChange={handleChange}
                  />

                  <NumberBox
                    title='中途アシスタントのスタイリストデビューまでの平均的な期間を教えて下さい。'
                    name='mid_debut_months'
                    min={0}
                    max={12}
                    unit='ヶ月'
                    value={data.mid_debut_months}
                    handleChange={handleChange}
                  />

                  <SingleRadioBox
                    title='レッスン専用のスタジオ/練習場/店舗はありますか？'
                    name='lesson_place'
                    handleChange={handleChange}
                    value={data.lesson_place}
                  />

                  <ToggleRadioBox
                    title='ブランクのある求職者向けの不足スキルのフォロー体制はありますか？'
                    name='missing_skill_follow_up'
                    handleChange={handleChange}
                    value={data.missing_skill_follow_up}
                    setShows={setShows}
                    shows={shows}
                  />

                  {shows.missing_skill_follow_up == '1' &&
                    <TextBox
                      title='ブランクのある求職者向けフォロー体制の詳細を教えて下さい。'
                      name='missing_follow_up_detail'
                      placeholder=''
                      maxlength={500}
                      value={data.missing_follow_up_detail}
                      handleChange={handleChange}
                    />
                  }

                  <ToggleRadioBox
                    title='コンテストなどへのサポート制度はありますか？'
                    name='contest_support'
                    handleChange={handleChange}
                    value={data.contest_support}
                    setShows={setShows}
                    shows={shows}
                  />

                  {shows.contest_support == '1' &&
                    <TextBox
                      title='ブランクのある求職者向けフォロー体制の詳細を教えて下さい。'
                      name='contest_support_detail'
                      placeholder=''
                      maxlength={500}
                      value={data.contest_support_detail}
                      handleChange={handleChange}
                    />
                  }

                  <div class="u-mt-sm">
                    <h4>ママさん美容師の勤務例で当てはまるものがあれば教えて下さい。</h4>

                    <div>
                      {inputBoxes.map(box =>
                        <CheckBox
                          key={box.value}
                          box={box}
                          name={box.name}
                          value={data.hairdresser_working_type}
                          setData={setData}
                          data={data}
                          checked={data.hairdresser_working_type.includes(box.value)}
                        />
                      )}
                    </div>
                  </div>

                  <DropdownBox
                    title='接客スタイルについて教えて下さい。'
                    options={options.customer}
                    value={data.customer_service_style}
                    handleChange={handleChange}
                    name='customer_service_style'
                  />

                  <NumberBox
                    title='スタイリスト１人あたりの月間の入客数を教えて下さい。（平均）'
                    name='stylist_average_customers'
                    min={0}
                    max={999999}
                    unit='人'
                    value={data.stylist_average_customers}
                    handleChange={handleChange}
                  />
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

export default Feature13;