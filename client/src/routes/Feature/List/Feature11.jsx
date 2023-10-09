import React, { useState, useEffect } from 'react';

import { answer, getFeature } from '../../../actions/action.js';
import Auth from '../../../utils/Auth.js';
import CheckBox from '../../../components/Feature/CheckBox.js';
import TextBox from '../../../components/Feature/TextBox.js';
import ToggleRadioBox from '../../../components/Feature/ToggleRadioBox.js';
import DropdownBox from '../../../components/Feature/DropdownBox.js';
import Alert from '../../../components/Alert/Alert.js';

const options = [
  {
    value:'1',
    text:'理容室'
  },
  {
    value:'2',
    text:'メンズ専門美容室'
  },
  {
    value:'3',
    text:'どちらでもない'
  },
  {
    value:'4',
    text:'どちらでもある'
  },
]

const inputBoxes = [
  {
    value: '1',
    name: 'shampoo_types',
    text: 'バックシャンプー'
  },
  {
    value: '2',
    name: 'shampoo_types',
    text: 'サイドシャンプー'
  },
  {
    value: '3',
    name: 'shampoo_types',
    text: 'フルフラット'
  },
  {
    value: '4',
    name: 'shampoo_types',
    text: 'その他'
  }
];

const Feature11 = ({featureId}) => {
  const companyId = Auth.getCompanyId();
  const [alertOpen, setAlertOpen] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const [data, setData] = useState({
    shampoo_types: [],
    photo_session: '',
    photo_session_detail: '',
    men_salon_type: '',
  });

  const [shows, setShows] = useState({
    photo_session: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (shows.photo_session == '0') {
      setData({ ...data, 'photo_session_detail': '' });
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
              shampoo_types: res.data.shampoo_types,
              photo_session: res.data.photo_session,
              photo_session_detail: res.data.photo_session_detail,
              men_salon_type: res.data.men_salon_type,
            });
            setShows({
              photo_session: res.data.photo_session,
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
                  <h3 className="u-c-darker"><span className="basic_enquete_numbering">1</span>【美容師】その他の特徴</h3>
                </div>

                <form id="answerForm">

                  <div className="u-mt-sm">
                    <h4>シャンプー台の種類を教えて下さい。　＊複数選択可能。フルフラットであり、バックシャンプーであれば「フルフラット」「バック」二つ選択ください</h4>
                    <div>
                      {inputBoxes.map(box =>
                        <CheckBox
                          key={box.value}
                          box={box}
                          name={box.name}
                          setData={setData}
                          data={data}
                          value={data.shampoo_types}
                          checked={data.shampoo_types.includes(box.value)}
                        />
                      )}
                    </div>
                  </div>

                  <ToggleRadioBox
                    title='撮影会はありますか？'
                    name='photo_session'
                    handleChange={handleChange}
                    value={data.photo_session}
                    setShows={setShows}
                    shows={shows}
                  />

                  {shows.photo_session == '1' &&
                    <>
                      <TextBox
                        title='撮影会の詳細について教えて下さい。'
                        name='photo_session_detail'
                        placeholder=''
                        maxlength={500}
                        value={data.photo_session_detail}
                        handleChange={handleChange}
                      />
                    </>
                  }

                  <DropdownBox
                    title='理容室またはメンズ専用美容室でしょうか。'
                    options={options}
                    value={data.men_salon_type}
                    handleChange={handleChange}
                    name='men_salon_type'
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

export default Feature11;