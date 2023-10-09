import React, { useState, useEffect } from 'react';

import { answer, getFeature } from '../../../actions/action.js';
import Auth from '../../../utils/Auth.js';
import TextBox from '../../../components/Feature/TextBox.js';
import SingleRadioBox from '../../../components/Feature/SingleRadioBox.js';
import ToggleRadioBox from '../../../components/Feature/ToggleRadioBox.js';
import Alert from '../../../components/Alert/Alert.js';

const Feature10 = ({ featureId }) => {
  const companyId = Auth.getCompanyId();
  const [alertOpen, setAlertOpen] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const [data, setData] = useState({
    hair_makeup_offer: '',
    hair_makeup_detail: '',
    head_spa: '',
    head_spa_education: '',
    spanist_work: '',
    dressing: '',
    dressing_skill_education: '',
  });

  const [shows, setShows] = useState({
    hair_makeup_offer: '',
    head_spa: '',
    dressing: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (shows.hair_makeup_offer == '0') {
      setData({ ...data, hair_makeup_detail: '' });
    }
    if (shows.head_spa == '0') {
      setData({ ...data, head_spa_education: '' });
    }
    if (shows.dressing == '0') {
      setData({ ...data, dressing_skill_education: '' });
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
              hair_makeup_offer: res.data.hair_makeup_offer,
              hair_makeup_detail: res.data.hair_makeup_detail,
              head_spa: res.data.head_spa,
              head_spa_education: res.data.head_spa_education,
              spanist_work: res.data.spanist_work,
              dressing: res.data.dressing,
              dressing_skill_education: res.data.dressing_skill_education,
            });
            setShows({
              hair_makeup_offer: res.data.hair_makeup_offer,
              head_spa: res.data.head_spa,
              dressing: res.data.dressing,
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
                  <h3 className="u-c-darker"><span className="basic_enquete_numbering">1</span>【美容師】メニュー及び専門業務について</h3>
                </div>

                <form id="answerForm">

                  <ToggleRadioBox
                    title='ヘアセット・ヘアメイクの施術はありますか？'
                    name='hair_makeup_offer'
                    handleChange={handleChange}
                    value={data.hair_makeup_offer}
                    setShows={setShows}
                    shows={shows}
                  />

                  {shows.hair_makeup_offer == '1' &&
                    <>
                      <TextBox
                        title='ヘアセット・ヘアメイクに関して、メディアなど外部との関わりがあれば具体的に教えて下さい。'
                        name='hair_makeup_detail'
                        placeholder='記入例：外部の雑誌やイベント有り'
                        maxlength={500}
                        value={data.hair_makeup_detail}
                        handleChange={handleChange}
                      />
                    </>
                  }

                  <ToggleRadioBox
                    title='ヘッドスパのメニューはありますか？'
                    name='head_spa'
                    handleChange={handleChange}
                    value={data.head_spa}
                    setShows={setShows}
                    shows={shows}
                  />

                  {shows.head_spa == '1' &&
                    <>
                      <TextBox
                        title='ヘッドスパ技術を磨くための教育制度があれば、具体的に教えて下さい。'
                        name='head_spa_education'
                        placeholder='記入例：スパニストが在籍している'
                        maxlength={500}
                        value={data.head_spa_education}
                        handleChange={handleChange}
                      />
                    </>
                  }

                  <SingleRadioBox
                    title='"スパニスト"として働くことは可能ですか？　＊ヘッドスパ専任としての募集がある場合のみ「はい」を選択ください(カットやカラー等しない方)'
                    name='spanist_work'
                    handleChange={handleChange}
                    value={data.spanist_work}
                  />

                  <ToggleRadioBox
                    title='着付けのメニューはありますか？'
                    name='dressing'
                    handleChange={handleChange}
                    value={data.dressing}
                    setShows={setShows}
                    shows={shows}
                  />

                  {shows.dressing == '1' &&
                    <>
                      <TextBox
                        title='着付けのスキルを磨く教育制度があれば、具体的に教えて下さい。'
                        name='dressing_skill_education'
                        placeholder='記入例：七五三など 着付け講師がいる'
                        maxlength={500}
                        value={data.dressing_skill_education}
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
      <Alert open={alertOpen} handleClose={(open) => { setAlertOpen(open) }} text={text} error={error} />
    </div>
  );
};

export default Feature10;