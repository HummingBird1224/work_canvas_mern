import React, { useState, useEffect } from 'react';

import { answer, getFeature } from '../../../actions/action.js';
import Auth from '../../../utils/Auth.js';
import Alert from '../../../components/Alert/Alert.js';
import CheckBox from '../../../components/Feature/CheckBox.js';
import DropdownBox from '../../../components/Feature/DropdownBox.js';

const options = {
  tour_interview: [
    {
      value: '1',
      text: '見学面談のみ（最終選考）'
    },
    {
      value: '2',
      text: '見学面談→面接（最終選考）'
    },
    {
      value: '3',
      text: '見学面談→面接→2次面接（最終選考）'
    },
    {
      value: '4',
      text: '見学面談→面接→その他：技術チェックや3次選考などがある'
    },
    {
      value: '5',
      text: '見学面談NG'
    }
  ],
  first_interview: [
    {
      value: '1',
      text: '初回面接NG'
    },
    {
      value: '2',
      text: '面接（最終選考）'
    },
    {
      value: '3',
      text: '面接→2次面接（最終選考）'
    },
    {
      value: '4',
      text: '面接→その他：技術チェックや3次選考などがある'
    }
  ]
};

const inputBoxes = {
  final: [
    {
      value: '1',
      name: 'new_hiring',
      text: '1週間以内'
    },
    {
      value: '2',
      name: 'new_hiring',
      text: '2週間以内'
    },
    {
      value: '3',
      name: 'new_hiring',
      text: '1ヶ月以内'
    },
    {
      value: '4',
      name: 'new_hiring',
      text: '1ヶ月を超える'
    }
  ],
  mid: [
    {
      value: '1',
      name: 'mid_hiring',
      text: '1週間以内'
    },
    {
      value: '2',
      name: 'mid_hiring',
      text: '2週間以内'
    },
    {
      value: '3',
      name: 'mid_hiring',
      text: '1ヶ月以内'
    },
    {
      value: '4',
      name: 'mid_hiring',
      text: '1ヶ月を超える'
    }
  ]
};

const SelectionMethod = ({featureId}) => {
  const companyId=Auth.getCompanyId();
  const [alertOpen, setAlertOpen]=useState(false);
  const [text, setText]=useState('');
  const [error, setError]=useState(false);
  const [data, setData] = useState({
    tour_interview: '',
    first_interview: '',
    new_hiring: [],
    mid_hiring: []
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

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
              tour_interview: res.data.tour_interview,
              first_interview: res.data.first_interview,
              new_hiring: res.data.new_hiring,
              mid_hiring: res.data.mid_hiring,
            });
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
                  <h3 className="u-c-darker"><span className="basic_enquete_numbering">1</span>選考方法</h3>
                </div>

                <form id="answerForm">

                  <DropdownBox
                    title='見学面談からの選考の流れを教えてください'
                    options={options.tour_interview}
                    value={data.tour_interview}
                    handleChange={handleChange}
                    name='tour_interview'
                  />

                  <DropdownBox
                    title='初回面接からの選考の流れを教えてください'
                    options={options.first_interview}
                    value={data.first_interview}
                    handleChange={handleChange}
                    name='first_interview'
                  />

                  <div className="u-mt-sm">
                    <h4>新卒採用の場合の最終面接から合否までの期間の目安を教えてください</h4>
                    {inputBoxes.final.map(box =>
                      <CheckBox
                        key={box.value}
                        box={box}
                        name={box.name}
                        setData={setData}
                        data={data}
                        value={data.new_hiring}
                        checked={data.new_hiring.includes(box.value)}
                      />
                    )}
                  </div>

                  <div className="u-mt-sm">
                    <h4>中途採用の場合の最終面接から合否までの期間の目安を教えてください</h4>
                    {inputBoxes.mid.map(box =>
                      <CheckBox
                        key={box.value}
                        box={box}
                        name={box.name}
                        setData={setData}
                        data={data}
                        value={data.mid_hiring}
                        checked={data.mid_hiring.includes(box.value)}
                      />
                    )}
                  </div>
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

export default SelectionMethod;