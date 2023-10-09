import React, { useState, useEffect } from 'react';

import { answer, getFeature } from '../../../actions/action.js';
import Auth from '../../../utils/Auth.js';
import Alert from '../../../components/Alert/Alert.js';
import CheckBox from '../../../components/Feature/CheckBox.js';
import SingleRadioBox from '../../../components/Feature/SingleRadioBox.js';
import DropdownBox from '../../../components/Feature/DropdownBox.js';
import NumberBox from '../../../components/Feature/NumberBox.js';

const inputBoxes = [
  {
    value: '1',
    name: 'assistant_skills',
    text: 'カラー習得済み'
  },
  {
    value: '2',
    name: 'assistant_skills',
    text: 'カット習得済み'
  },
  {
    value: '3',
    name: 'assistant_skills',
    text: 'パーマ習得済み'
  },
  {
    value: '4',
    name: 'assistant_skills',
    text: '求めるスキルなし'
  }
];

const options = {
  shorter: [
    {
      value: '1',
      text: '時短勤務も積極採用'
    },
    {
      value: '2',
      text: '時短勤務も相談可能'
    },
    {
      value: '3',
      text: '時短勤務は採用しない'
    }
  ],
  blank: [
    {
      value: '1',
      text: '積極採用'
    },
    {
      value: '2',
      text: '相談可能'
    },
    {
      value: '3',
      text: '採用しない'
    }
  ]
};

const Feature6 = ({ featureId }) => {
  const companyId = Auth.getCompanyId();
  const [alertOpen, setAlertOpen] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    hiring_status: '',
    no_license_hiring: '',
    blank_period_hiring: '',
    colorist_hiring: '',
    assistant_skills: [],
    part_min_days: 0,
    part_min_hours: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

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
              hiring_status: res.data.hiring_status,
              no_license_hiring: res.data.no_license_hiring,
              blank_period_hiring: res.data.blank_period_hiring,
              colorist_hiring: res.data.colorist_hiring,
              assistant_skills: res.data.assistant_skills,
              part_min_days: res.data.part_min_days,
              part_min_hours: res.data.part_min_hours,
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
                  <h3 className="u-c-darker"><span className="basic_enquete_numbering">1</span>【美容師】採用の要件</h3>
                </div>

                <form id="answerForm">

                  <DropdownBox
                    title='時短勤務希望者の採用状況について教えてください。'
                    options={options.shorter}
                    value={data.hiring_status}
                    handleChange={handleChange}
                    name='hiring_status'
                  />

                  <SingleRadioBox
                    title='美容師免許がない方の採用は可能ですか？ (通信生の採用予定がある場合も、『はい』を選択して下さい)'
                    name='no_license_hiring'
                    handleChange={handleChange}
                    value={data.no_license_hiring}
                  />

                  <DropdownBox
                    title='ブランク期間のある求職者の採用状況について教えてください。'
                    options={options.blank}
                    value={data.blank_period_hiring}
                    handleChange={handleChange}
                    name='blank_period_hiring'
                  />

                  <SingleRadioBox
                    title='カラーリストの採用は行っていますか？　＊カラー専任としての募集がある場合のみ「はい」を選択ください(カット等しない方)'
                    name='colorist_hiring'
                    handleChange={handleChange}
                    value={data.colorist_hiring}
                  />

                  <div className="u-mt-sm">
                    <h4>アシスタントに求めるスキル教えて下さい。（中途アシスタントのみ募集の際ご回答ください。新卒・既卒・通信生募集の場合は「求めるスキルなし」を選択ください）</h4>
                    <div>
                      {inputBoxes.map(box =>
                        <CheckBox
                          key={box.value}
                          box={box}
                          name={box.name}
                          setData={setData}
                          data={data}
                          checked={data.assistant_skills.includes(box.value)}
                          value={data.assistant_skills}
                        />
                      )}
                    </div>
                  </div>

                  <NumberBox
                    title='アルバイトを募集する場合、1週間あたりの最低勤務日数を教えて下さい。(/月)を教えて下さい。(上限がない場合は999999と記入)'
                    name='part_min_days'
                    min={0}
                    max={7}
                    unit='日以上'
                    value={data.part_min_days}
                    handleChange={handleChange}
                  />

                  <NumberBox
                    title='アルバイトを募集する場合、1日あたりの最低勤務時間を教えて下さい。(/月)を教えて下さい。(上限がない場合は999999と記入)'
                    name='part_min_hours'
                    min={0}
                    max={24}
                    unit='時間以上'
                    value={data.part_min_hours}
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
      <Alert open={alertOpen} handleClose={(open)=>{setAlertOpen(open)}} text={text} error={error}/>
    </div>
  );
};

export default Feature6;