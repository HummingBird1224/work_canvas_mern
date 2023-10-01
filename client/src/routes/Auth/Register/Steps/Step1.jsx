const Step1 = () => {

  return (
    <div className="modal__form__wrapper">
      <ol className="form__number__wrapper u-mt-reset u-mb-lg">
        <li className="active">
          <span className="number__span selected__number">1</span>
          <p>請求先情報</p>
        </li>
        <li>
          <span className="number__span">2</span>
          <p>お支払い方法</p>
        </li>
        <li>
          <span className="number__span">3</span>
          <p>返金口座</p>
        </li>
        <li>
          <span className="number__span">4</span>
          <p>ご確認</p>
        </li>
      </ol>
      <h2 className="modal__title smaller">会社情報を入力してください</h2>
      <div id="formApplyStep1">
        <div id="script_div">
          <script type="text/javascript" src="https://ajaxzip3.github.io/ajaxzip3.js"></script>
          <script type="text/javascript" src="https://ajaxzip3.github.io/ajaxzip3.js"></script>
        </div>
        <div>
          <div className="tag tag--type_primary">必須</div>
          <p>会社名 (または屋号)</p>
          <input
            type="text"
            name="companyName"
            className="form--type_text companyName" />
        </div>
        <div>
          <div className="tag tag--type_primary">必須</div>
          <p>代表取締役名</p>
          <input
            type="text"
            name="representativeDirectorName"
            className="form--type_text u-w-50 representativeDirectorName" />
        </div>
        <div>
          <div className="tag tag--type_primary">必須</div>
          <p>会社電話番号 (半角・ハイフンなし)</p>
          <input
            type="tel"
            name="tel"
            className="form--type_text f-none-spin u-w-50 tel" />
        </div>
        <div>
          <div className="tag tag--type_primary">必須</div>
          <p>会社郵便番号 (半角・ハイフンなし)</p>
          <input
            type="text" 
            name="zipCode"
            className="form--type_text f-none-spin zipCode" />
        </div>
        <div>
          <div className="tag tag--type_primary">必須</div>
          <p>会社都道府県</p>
          <select name="prefecture" className="form--type_select u-w-sp-100 prefectures">

            <option value="none">選択してください</option>

            <option value="eiiN9wW7HJDhbaNWM">北海道</option>

            <option value="yTtRAonDAW8rBY7ja">青森県</option>

            <option value="waqo7PKNghB3jNnA5">岩手県</option>

            <option value="RLgMemihXp3xGYuR9">宮城県</option>

            <option value="uRwPqwTK4Mdc2vKCG">秋田県</option>

            <option value="zivu2j5cW4HuRdivr">山形県</option>

            <option value="fNrwtkuu9dS2sJwip">福島県</option>

            <option value="uXmPKDgDZZuqbchxt">茨城県</option>

            <option value="hSvRtDrz8BDnec4nq">栃木県</option>

            <option value="dp66hk2WaLDCscJvQ">群馬県</option>

            <option value="QnYYQKpufB8MQymk3">埼玉県</option>

            <option value="jYQZqHMopxjp8mB7X">千葉県</option>

            <option value="3Qm6kC6SsEBnhQqyH">東京都</option>

            <option value="MXuyCY2vuyRWSHSAn">神奈川県</option>

            <option value="ECGKs3JhZ5vxokxeJ">新潟県</option>

            <option value="amBrFDWsAXgZbGDGh">富山県</option>

            <option value="sbs79iydeoC4xQ3m5">石川県</option>

            <option value="Z69LsRTS2JdwCA7No">福井県</option>

            <option value="reHdmgGTGhDTzdzYK">山梨県</option>

            <option value="fh2TrXYDx2XiHsmme">長野県</option>

            <option value="Dt7xQdSxQGEjTmvXL">岐阜県</option>

            <option value="drcEp5R2A8K3xQciN">静岡県</option>

            <option value="3B9jz8cmBL9H9vQeJ">愛知県</option>

            <option value="Sen9nB7rwEbrurX3k">三重県</option>

            <option value="eHnx2c8q46rS5q2Fu">滋賀県</option>

            <option value="EpjAMmgL4uF7wMnGf">京都府</option>

            <option value="Yn33fcZEGg3NTkSzy">大阪府</option>

            <option value="nh8SZgjqRWqcdGJbR">兵庫県</option>

            <option value="KfzZjfMpLgccvYqZh">奈良県</option>

            <option value="xxvvQacP9fEYXQgsa">和歌山県</option>

            <option value="mZq9Z62AfYtrvKyoF">鳥取県</option>

            <option value="GTjTXnfwr26AWddQ3">島根県</option>

            <option value="L7T7wYpPWXJy2imfn">岡山県</option>

            <option value="Y6N8AgrcNibA8eG4k">広島県</option>

            <option value="AQYCc5xxByEKuu4dN">山口県</option>

            <option value="SBcToX8NGk9YT8KsY">徳島県</option>

            <option value="RLdT6BZs2eAz5dxDM">香川県</option>

            <option value="rdTJCdnDAWXae65au">愛媛県</option>

            <option value="M7ikxRizduc7kKZMa">高知県</option>

            <option value="bs9eKdQqGWPSo6cR3">福岡県</option>

            <option value="r3L2bgcEk5fMwGEvd">佐賀県</option>

            <option value="RKJNgofgN8MJhTADu">長崎県</option>

            <option value="GW44pQSK8dzzAunAe">熊本県</option>

            <option value="tfTurEM3bnHuACB3t">大分県</option>

            <option value="vtBEdFL5de5tPCXMc">宮崎県</option>

            <option value="ACwwozWS8a8NgAJWm">鹿児島県</option>

            <option value="5Z8J5zSFbXNwZgGse">沖縄県</option>

            <option value="r5rxTa5CPBKo9nFxn">【その他・海外】</option>

          </select>
        </div>
        <div>
          <div className="tag tag--type_primary">必須</div>
          <p>会社住所 (番地まで)</p>
          <input
            type="text"
            name="address1"
            className="form--type_text address1" />
        </div>
        <div>
          <div className="tag tag--type_secondary">任意</div>
          <p>会社住所 (ビル名・部屋番号)</p>
          <input
            type="text"
            name="address2"
            className="form--type_text address2" />
        </div>
        <span className="tag tag--type_primary u-mt-sm">必須</span>
        <h2 className="modal__title smaller u-mt-reset">お申し込み業種を選択してください</h2>
        <div>
          <div className="form--type_checkbox_group u-mb-xs">
            <input
              type="checkbox"
              value="1"
              name="sectors"
              className="sectors"
              id="sector-1" />
            <label htmlFor="sector-1"><span>美容師</span></label>
          </div>
          <div className="form--type_checkbox_group u-mb-xs">
            <input
              type="checkbox"
              value="2"
              name="sectors"
              className="sectors"
              id="sector-2" />
            <label htmlFor="sector-2"><span>アイリスト</span></label>
          </div>
          <div className="form--type_checkbox_group u-mb-xs">
            <input
              type="checkbox"
              value="3"
              name="sectors"
              className="sectors"
              id="sector-3" />
            <label htmlFor="sector-3"><span>ネイリスト</span></label>
          </div>
          <div className="form--type_checkbox_group u-mb-xs">
            <input
              type="checkbox"
              value="4"
              name="sectors"
              className="sectors"
              id="sector-4" />
            <label htmlFor="sector-4"><span>エステティシャン</span></label>
          </div>
        </div>
        <h2 className="modal__title smaller u-mt-lg">請求先情報を入力してください</h2>
        <div className=" u-mb-sm">
          <button className="button sameAsCompanyInfo">会社情報と同じにする</button>
        </div>
        <div id="script_div"></div>
        <div>
          <div className="tag tag--type_primary">必須</div>
          <p>請求先会社名</p>
          <input
            type="text"
            name="billingCompanyName"
            className="form--type_text billingCompanyName" />
        </div>
        <div>
          <div className="tag tag--type_primary">必須</div>
          <p>請求先郵便番号(半角・ハイフンなし)</p>
          <input
            type="tel"
            name="billingZipCode"
            className="form--type_text f-none-spin billingZipCode" />
        </div>
        <div>
          <div className="tag tag--type_primary">必須</div>
          <p>請求先都道府県</p>
          <select name="billingPrefecture" className="form--type_select billingPrefecture">

            <option value="none">選択してください</option>

            <option value="eiiN9wW7HJDhbaNWM">北海道</option>

            <option value="yTtRAonDAW8rBY7ja">青森県</option>

            <option value="waqo7PKNghB3jNnA5">岩手県</option>

            <option value="RLgMemihXp3xGYuR9">宮城県</option>

            <option value="uRwPqwTK4Mdc2vKCG">秋田県</option>

            <option value="zivu2j5cW4HuRdivr">山形県</option>

            <option value="fNrwtkuu9dS2sJwip">福島県</option>

            <option value="uXmPKDgDZZuqbchxt">茨城県</option>

            <option value="hSvRtDrz8BDnec4nq">栃木県</option>

            <option value="dp66hk2WaLDCscJvQ">群馬県</option>

            <option value="QnYYQKpufB8MQymk3">埼玉県</option>

            <option value="jYQZqHMopxjp8mB7X">千葉県</option>

            <option value="3Qm6kC6SsEBnhQqyH">東京都</option>

            <option value="MXuyCY2vuyRWSHSAn">神奈川県</option>

            <option value="ECGKs3JhZ5vxokxeJ">新潟県</option>

            <option value="amBrFDWsAXgZbGDGh">富山県</option>

            <option value="sbs79iydeoC4xQ3m5">石川県</option>

            <option value="Z69LsRTS2JdwCA7No">福井県</option>

            <option value="reHdmgGTGhDTzdzYK">山梨県</option>

            <option value="fh2TrXYDx2XiHsmme">長野県</option>

            <option value="Dt7xQdSxQGEjTmvXL">岐阜県</option>

            <option value="drcEp5R2A8K3xQciN">静岡県</option>

            <option value="3B9jz8cmBL9H9vQeJ">愛知県</option>

            <option value="Sen9nB7rwEbrurX3k">三重県</option>

            <option value="eHnx2c8q46rS5q2Fu">滋賀県</option>

            <option value="EpjAMmgL4uF7wMnGf">京都府</option>

            <option value="Yn33fcZEGg3NTkSzy">大阪府</option>

            <option value="nh8SZgjqRWqcdGJbR">兵庫県</option>

            <option value="KfzZjfMpLgccvYqZh">奈良県</option>

            <option value="xxvvQacP9fEYXQgsa">和歌山県</option>

            <option value="mZq9Z62AfYtrvKyoF">鳥取県</option>

            <option value="GTjTXnfwr26AWddQ3">島根県</option>

            <option value="L7T7wYpPWXJy2imfn">岡山県</option>

            <option value="Y6N8AgrcNibA8eG4k">広島県</option>

            <option value="AQYCc5xxByEKuu4dN">山口県</option>

            <option value="SBcToX8NGk9YT8KsY">徳島県</option>

            <option value="RLdT6BZs2eAz5dxDM">香川県</option>

            <option value="rdTJCdnDAWXae65au">愛媛県</option>

            <option value="M7ikxRizduc7kKZMa">高知県</option>

            <option value="bs9eKdQqGWPSo6cR3">福岡県</option>

            <option value="r3L2bgcEk5fMwGEvd">佐賀県</option>

            <option value="RKJNgofgN8MJhTADu">長崎県</option>

            <option value="GW44pQSK8dzzAunAe">熊本県</option>

            <option value="tfTurEM3bnHuACB3t">大分県</option>

            <option value="vtBEdFL5de5tPCXMc">宮崎県</option>

            <option value="ACwwozWS8a8NgAJWm">鹿児島県</option>

            <option value="5Z8J5zSFbXNwZgGse">沖縄県</option>

            <option value="r5rxTa5CPBKo9nFxn">【その他・海外】</option>

          </select>
        </div>
        <div>
          <div className="tag tag--type_primary">必須</div>
          <p>請求先会社住所 (番地まで)</p>
          <input
            type="text"
            name="billingAddress1"
            className="form--type_text billingAddress1" />
        </div>
        <div>
          <div className="tag tag--type_secondary">任意</div>
          <p>請求先会社住所 (ビル名・部屋番号)</p>
          <input
            type="text"
            name="billingAddress2"
            className="form--type_text billingAddress2" />
        </div>
      </div>
    </div>
  );
}
 
export default Step1;