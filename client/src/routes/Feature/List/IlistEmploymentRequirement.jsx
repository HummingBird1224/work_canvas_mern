const IlistEmploymentRequirement = () => {
  return (
    





      <div className="enterprise_box">
        <div className="enterprise_contents">






          <h4 className="u-ta-c u-bb-gray u-pb-sm u-w-100 u-posi-absolute u-top-0 u-left-0">採用に関するアンケート</h4>
          <div className="u-pt-xl">




            <div className="enqueteWrapper">

              <div className="enquete__dispersion__wrapper02 u-mt-sm">
                <div className="enquete__contents u-m-0a u-w-100">

                  <div className="u-mt-sm">
                    <h3 className="u-c-darker"><span className="basic_enquete_numbering">1</span>【アイリスト】採用の要件</h3>
                  </div>

                  <form id="answerForm">




                    <div className="u-mt-sm">
                      <h4>アイリスト採用において求める経験を教えて下さい。（年数条件がない場合は「0」で反映ください）</h4>


                      <div className="u-d-flex">
                        <input type="number" className="form--type_text formPart" name="4_W8nT7HLmBzxWKTcR3" min="0" />
                          <span style={{ margin: 'auto, 0' }} className="u-pl-xs">年以上</span>
                      </div>

                    </div>







                    <div className="u-mt-sm">
                      <h4>アイリスト</h4>

                      <div>

                        <div className="form--type_checkbox_group">
                          <input type="checkbox" className="formPart" id="checkbox_oG8jdvZt2H6pcutra_1" name="6_oG8jdvZt2H6pcutra" value="1" />
                            <label for="checkbox_oG8jdvZt2H6pcutra_1">
                              <span>マツエク経験あり</span>
                            </label>
                        </div>

                        <div className="form--type_checkbox_group">
                          <input type="checkbox" className="formPart" id="checkbox_oG8jdvZt2H6pcutra_2" name="6_oG8jdvZt2H6pcutra" value="2" />
                            <label for="checkbox_oG8jdvZt2H6pcutra_2">
                              <span>マツパ経験あり</span>
                            </label>
                        </div>

                        <div className="form--type_checkbox_group">
                          <input type="checkbox" className="formPart" id="checkbox_oG8jdvZt2H6pcutra_3" name="6_oG8jdvZt2H6pcutra" value="3" />
                            <label for="checkbox_oG8jdvZt2H6pcutra_3">
                              <span>アイブロウ経験あり</span>
                            </label>
                        </div>

                        <div className="form--type_checkbox_group">
                          <input type="checkbox" className="formPart" id="checkbox_oG8jdvZt2H6pcutra_4" name="6_oG8jdvZt2H6pcutra" value="4" />
                            <label for="checkbox_oG8jdvZt2H6pcutra_4">
                              <span>求めるスキルなし</span>
                            </label>
                        </div>

                      </div>

                    </div>







                    <div className="u-mt-sm">
                      <h4>アルバイトを募集する場合、1週間あたりの最低勤務日数を教えて下さい。</h4>

                      <div className="u-d-flex">
                        <input type="number" className="form--type_text formPart" name="4_wQnnXrLymjtY4yaLL" min="0" />
                          <span style={{ margin: 'auto, 0' }} className="u-pl-xs">日</span>
                      </div>

                    </div>







                    <div className="u-mt-sm">
                      <h4>アルバイトを募集する場合、1日あたりの最低勤務時間を教えて下さい。</h4>

                      <div className="u-d-flex">
                        <input type="number" className="form--type_text formPart" name="4_P9amA5sWRAqNzR2k2" min="0" />
                          <span style={{ margin: 'auto, 0' }} className="u-pl-xs">時間</span>
                      </div>

                    </div>







                    <div className="u-mt-sm">
                      <h4>ブランク期間のある求職者の採用状況について教えてください。</h4>


                      <div className="u-w-100">
                        <select className="form--type_select u-w-100 formPart" name="3_tfp2KbZRJQRdMiZkS" style={{ borderRadius: 4 }}>
                          <option value="">選択してください</option>

                          <option value="1">積極採用</option>

                          <option value="2">相談可能</option>

                          <option value="3">採用しない</option>

                        </select>
                      </div>

                    </div>







                    <div className="u-mt-sm">
                      <h4>時短勤務希望の求職者の採用状況について教えてください。</h4>

                      <div className="u-w-100">
                        <select className="form--type_select u-w-100 formPart" name="3_PEWJW6c2gFufF3tKk" style={{ borderRadius: 4 }}>
                          <option value="">選択してください</option>

                          <option value="1">時短勤務も積極採用</option>

                          <option value="2">時短勤務も相談可能</option>

                          <option value="3">時短勤務は採用しない</option>

                        </select>
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

export default IlistEmploymentRequirement;