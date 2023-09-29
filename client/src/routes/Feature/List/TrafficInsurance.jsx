import CheckBox from '../../../components/Feature/CheckBox';

const inputBoxes = [
  {
    value: '1',
    text: '健康保険'
  },
  {
    value: '2',
    text: '厚生年金'
  },
  {
    value: '3',
    text: '雇用保険'
  },
  {
    value: '4',
    text: '労災保険'
  },
  {
    value: '5',
    text: '保険加入なし'
  }
];

const TrafficInsurance = () => {
  return (
    
      <div className="enterprise_box">
        <div className="enterprise_contents">
          <h4 className="u-ta-c u-bb-gray u-pb-sm u-w-100 u-posi-absolute u-top-0 u-left-0">採用に関するアンケート</h4>
          <div className="u-pt-xl">
            <div className="enqueteWrapper">
              <div className="enquete__dispersion__wrapper02 u-mt-sm">
                <div className="enquete__contents u-m-0a u-w-100">
                  <div className="u-mt-sm">
                    <h3 className="u-c-darker"><span className="basic_enquete_numbering">1</span>交通費・社会保険</h3>
                  </div>

                  <form id="answerForm">
                    <div className="u-mt-sm">
                      <h4>加入可能な保険を教えて下さい。(複数選択可。加入予定のものは反映せず、確実に加入できるもののみを選択ください。加入できない場合は「保険加入なし」を選択ください)</h4>
                      <div>
                        {inputBoxes.map((box) => {
                          <CheckBox key={box.value} props={box}/>
                        })}
                      </div>
                    </div>

                    <div className="u-mt-sm">
                      <h4>時短勤務・パートで社会保険加入できますか？（フルタイムの4分の3以上勤務の場合）</h4>
                      <ul className="form--type_checkbox_card">
                        <li>
                          <input type="radio" className="form--type_radio_card formPart" name="2_yW7vefjRwaf97n8YM" value="1" id="radiobutton0-yW7vefjRwaf97n8YM" />
                            <label for="radiobutton0-yW7vefjRwaf97n8YM">はい</label>
                        </li>

                        <li>
                          <input type="radio" className="form--type_radio_card formPart" name="2_yW7vefjRwaf97n8YM" value="0" id="radiobutton1-yW7vefjRwaf97n8YM" />
                            <label for="radiobutton1-yW7vefjRwaf97n8YM">いいえ</label>
                        </li>
                      </ul>
                    </div>

                    <div className="u-mt-sm">
                      <h4>健康保険の種類について教えて下さい。</h4>

                      <div className="u-w-100">
                        <select className="form--type_select u-w-100 formPart" name="3_4cm88d9bPC4vAgQ2h" style={{ borderRadius: 4 }}>
                          <option value="">選択してください</option>

                          <option value="1">協会けんぽ</option>

                          <option value="2">理美けんぽ</option>

                          <option value="3">美容国保</option>

                          <option value="4">整容国保</option>

                          <option value="5">わからない</option>

                          <option value="6">加入不可</option>

                        </select>
                      </div>
                    </div>

                    <div className="u-mt-sm">
                      <h4>正社員の交通費は支給されますか？</h4>

                      <ul className="form--type_checkbox_card">
                        <li>
                          <input type="radio" className="form--type_radio_card formPart" name="2_RwARufdi5SDmgNqQT" value="1" id="radiobutton0-RwARufdi5SDmgNqQT" />
                            <label for="radiobutton0-RwARufdi5SDmgNqQT">はい</label>
                        </li>

                        <li>
                          <input type="radio" className="form--type_radio_card formPart" name="2_RwARufdi5SDmgNqQT" value="0" id="radiobutton1-RwARufdi5SDmgNqQT" />
                            <label for="radiobutton1-RwARufdi5SDmgNqQT">いいえ</label>
                        </li>
                      </ul>

                    </div>

                    <div className="u-mt-sm">
                      <h4>正社員への交通費支給上限額(/月)を教えて下さい。(上限がない場合は999999と記入)</h4>
                      <div className="u-d-flex">
                        <input type="number" className="form--type_text formPart" name="4_SfPNuTcA4bdFRnrhu" min="0" />
                          <span style={{ margin: 'auto, 0' }} className="u-pl-xs">円</span>
                      </div>
                    </div>

                    <div className="u-mt-sm">
                      <h4>アルバイト/パートの交通費は支給されますか？</h4>
                      <ul className="form--type_checkbox_card">
                        <li>
                          <input type="radio" className="form--type_radio_card formPart" name="2_deksMwSbNbBApRcQ2" value="1" id="radiobutton0-deksMwSbNbBApRcQ2" />
                            <label for="radiobutton0-deksMwSbNbBApRcQ2">はい</label>
                        </li>

                        <li>
                          <input type="radio" className="form--type_radio_card formPart" name="2_deksMwSbNbBApRcQ2" value="0" id="radiobutton1-deksMwSbNbBApRcQ2" />
                            <label for="radiobutton1-deksMwSbNbBApRcQ2">いいえ</label>
                        </li>
                      </ul>
                    </div>

                    <div className="u-mt-sm">
                      <h4>アルバイト/パートへの交通費支給上限額(/月)を教えて下さい。(上限がない場合は999999と記入)</h4>
                      <div className="u-d-flex">
                        <input type="number" className="form--type_text formPart" name="4_nYMSkMCqzwimArTFL" min="0" />
                          <span style={{ margin: 'auto, 0' }} className="u-pl-xs">円</span>
                      </div>
                    </div>

                  </form>
                </div>

                <div className="enquete__button__wrapper basic_enquete_button_wrapper">
                  <p className="u-c-gray u-fs-12">※複数店舗をお持ちのサロン様はメインの店舗に関してご回答ください</p>
                  <a className="go-next u-f-1 goNext u-w-100 button button--type_primary">回答する</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default TrafficInsurance;