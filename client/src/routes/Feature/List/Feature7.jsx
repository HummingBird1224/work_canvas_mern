import React, { useState, useEffect } from 'react';

import { answer, getFeature } from '../../../actions/action.js';
import Auth from '../../../utils/Auth.js';
import TextBox from '../../../components/Feature/TextBox.js';
import SingleRadioBox from '../../../components/Feature/SingleRadioBox.js';
import ToggleRadioBox from '../../../components/Feature/ToggleRadioBox.js';
import NumberBox from '../../../components/Feature/NumberBox.js';
import Alert from '../../../components/Alert/Alert.js';

const inputBoxes = [
  {
    value: '1',
    name: 'insurance',
    text: '健康保険'
  },
  {
    value: '2',
    name: 'insurance',
    text: '厚生年金'
  },
  {
    value: '3',
    name: 'insurance',
    text: '雇用保険'
  },
  {
    value: '4',
    name: 'insurance',
    text: '労災保険'
  },
  {
    value: '5',
    name: 'insurance',
    text: '保険加入なし'
  }
];

const options = [
  {
    value: '1',
    text: '協会けんぽ'
  },
  {
    value: '2',
    text: '理美けんぽ'
  },
  {
    value: '3',
    text: '美容国保'
  },
  {
    value: '4',
    text: '整容国保'
  },
  {
    value: '5',
    text: 'わからない'
  },
  {
    value: '6',
    text: '加入不可'
  }
];

const Feature7 = ({ featureId }) => {
  const companyId = Auth.getCompanyId();
  const [alertOpen, setAlertOpen] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const [data, setData] = useState({
    contract_stylist_hiring: '',
    cs_nomination_fee: 0,
    cs_free_commission: 0,
    cs_guaranteed_salary: '',
    cs_guaranteed_salary_condition: '',
    cs_other_salary: '',
    cs_average_income: 0,
    cs_drug_costs: '',
    cs_utility_costs: '',
  });

  const [shows, setShows] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (shows.cs_guaranteed_salary == '0') {
      setData({ ...data, cs_guaranteed_salary_condition: '' });
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
              contract_stylist_hiring: res.data.contract_stylist_hiring,
              cs_nomination_fee: res.data.cs_nomination_fee,
              cs_free_commission: res.data.cs_free_commission,
              cs_guaranteed_salary: res.data.cs_guaranteed_salary,
              cs_guaranteed_salary_condition: res.data.cs_guaranteed_salary_condition,
              cs_other_salary: res.data.cs_other_salary,
              cs_average_income: res.data.cs_average_income,
              cs_drug_costs: res.data.cs_drug_costs,
              cs_utility_costs: res.data.cs_utility_costs,
            });
            setShows({
              contract_stylist_hiring:res.data.contract_stylist_hiring,
              cs_guaranteed_salary:res.data.cs_guaranteed_salary
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
                  <h3 className="u-c-darker"><span className="basic_enquete_numbering">1</span>【美容師】業務委託スタイリストの待遇</h3>
                </div>

                <form id="answerForm">

                  <ToggleRadioBox
                    title='今後1年以内に『業務委託スタイリスト』を採用する可能性はありますか？'
                    name='contract_stylist_hiring'
                    handleChange={handleChange}
                    value={data.contract_stylist_hiring}
                    setShows={setShows}
                    shows={shows}
                  />

                  {shows.contract_stylist_hiring == '1' &&
                    <>
                      <NumberBox
                        title='指名歩合を教えて下さい。(業務委託)'
                        name='cs_nomination_fee'
                        min={0}
                        max={100}
                        unit='%'
                        value={data.cs_nomination_fee}
                        handleChange={handleChange}
                      />

                      <NumberBox
                        title='フリー歩合を教えて下さい。(業務委託)'
                        name='cs_free_commission'
                        min={0}
                        max={100}
                        unit='%'
                        value={data.cs_free_commission}
                        handleChange={handleChange}
                      />

                      <ToggleRadioBox
                        title='保障給はありますか？(業務委託)'
                        name='cs_guaranteed_salary'
                        handleChange={handleChange}
                        value={data.cs_guaranteed_salary}
                        setShows={setShows}
                        shows={shows}
                      />

                      {shows.cs_guaranteed_salary == '1' &&
                      <TextBox
                        title='保障給の受給に条件があれば教えて下さい。(業務委託)　＊保障額も合わせて記載ください。'
                        name='cs_guaranteed_salary_condition'
                        placeholder='記入例：最低勤務日数〇〇日以上、最低勤務時間〇〇時間'
                        maxlength={500}
                        value={data.cs_guaranteed_salary_condition}
                        handleChange={handleChange}
                      />}

                      <TextBox
                        title='給与以外の手当がある場合は教えて下さい。(業務委託)'
                        name='cs_other_salary'
                        placeholder=''
                        maxlength={500}
                        value={data.cs_other_salary}
                        handleChange={handleChange}
                      />

                      <NumberBox
                        title='仮にフルタイムで勤務した場合の平均的な月収イメージを教えて下さい。(業務委託)　＊月収＝月給＋手当＋歩合まで含めた1ヶ月の額面給与'
                        name='cs_average_income'
                        min={0}
                        max={99999999999999}
                        unit='円'
                        value={data.cs_average_income}
                        handleChange={handleChange}
                      />

                      <SingleRadioBox
                        title='薬剤費の本人負担はありますか？(業務委託)　＊別途徴収がある場合は「はい」に回答ください。'
                        name='cs_drug_costs'
                        handleChange={handleChange}
                        value={data.cs_drug_costs}
                      />
                      
                      <SingleRadioBox
                        title='光熱費の本人負担はありますか？(業務委託)　＊別途徴収がある場合は「はい」に回答ください。'
                        name='cs_utility_costs'
                        handleChange={handleChange}
                        value={data.cs_utility_costs}
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

export default Feature7;