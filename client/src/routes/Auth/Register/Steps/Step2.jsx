const Step2 = () => {

  const card_style = {
    margin: '0px !important',
    padding: '0px !important',
    border: 'none !important',
    display: 'block !important',
    width: '1px !important',
    minWidth: '100% !important',
    overflow: 'hidden !important',
    userSelect: 'none !important',
    transform: 'translate(0px) !important',
    height: '40px',
  };




  return (
    <div className="modal__form__wrapper">
      <ol className="form__number__wrapper u-mt-reset u-mb-lg">
        <li className="">
          <span className="number__span">1</span>
          <p>請求先情報</p>
        </li>
        <li className="active">
          <span className="number__span selected__number">2</span>
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

      <h1 className="modal__title smaller u-mb-xs">お支払い方法入力</h1>
      <div className="box_simple u-w-100 text-left u-mt-sm u-pa-xs">
        <div className="u-mb-reset">
          <p className="u-c-red u-fs-sm">現在「初期費用無料キャンペーン」期間中のため、ご登録に際し料金は発生致しません。</p>
          <p className="u-fs-sm">こちらは求職者様の採用が決定した際、紹介手数料のお支払い方法をお選びいただく画面です。</p>
        </div>
      </div>
      <div id="paymentMethods" className="enterprise_navi__tab__type2">
        <ul className="form--type_radio_card">
          <li>
            <input
              type="radio"
              value="1"
              name="paymentMethod"
              id="paymentMethod-1" />
            <label for="paymentMethod-1">カード払い</label>
          </li>
          <li>
            <input
              type="radio"
              value="2"
              name="paymentMethod"
              id="paymentMethod-2" />
            <label for="paymentMethod-2">銀行振込</label>
          </li>
        </ul>
      </div>
      <div id="formApplyStep2">
        <h4 className="u-fs-14">ご利用可能なカード一覧</h4>
        <div className="list--row--wrap cardlogo-list">
          <img src="https://cdn1.work-canvas.com/assets/images/card/logo-visa.png?14" />
          <img src="https://cdn1.work-canvas.com/assets/images/card/logo-mastercard.png?14" />
          <img src="https://cdn1.work-canvas.com/assets/images/card/logo-jcb.gif?14" />
          <img src="https://cdn1.work-canvas.com/assets/images/card/logo-amex.png?14" />
          <img src="https://cdn1.work-canvas.com/assets/images/card/logo-diner.png?14" />
          <img src="https://cdn1.work-canvas.com/assets/images/card/logo-discover.gif?14" />
        </div>
        <div id="script_div"></div>
        <div>
          <div className="tag tag--type_primary">必須</div>
          <p>カード番号</p>
        </div>
        <div type="number" id="cardNumber" className="form--type_text f-none-spin PayjpElement PayjpElement--empty" style={{height: '50px'}} placeholder="1234567890123456">
          <iframe
            name="_payjpElements1_cardNumber"
            title="Secure payment input frame"
            scrolling="no"
            allow="payment"
            allowtransparency="true"
            src="https://js.pay.jp/v2/iframe.1682731599632.html#locale=ja&amp;origin=https%3A%2F%2Fwork-canvas.com&amp;componentName=cardNumber&amp;controllerName=_payjpController1&amp;groupId=Elements1&amp;ltr=true&amp;style%5Bbase%5D%5B%3A%3Aplaceholder%5D%5Bcolor%5D=%23B8BBC1&amp;style%5Bbase%5D%5BfontSize%5D=16px&amp;style%5Bbase%5D%5BlineHeight%5D=40px&amp;style%5Binvalid%5D%5Bcolor%5D=%23F9494F&amp;disabled=false&amp;placeholder=1234567890123456&amp;hideIcon=false"
            style={{card_style}}>
          </iframe>
        </div>
        
        <div>
          <div className="tag tag--type_primary">必須</div>
          <p>セキュリティコード</p>
        </div>
        <div type="number" id="cardCvc" className="form--type_text f-none-spin PayjpElement PayjpElement--empty" style={{height: '50px'}} placeholder="※カード裏記載の３-４桁の番号">
          <iframe
            name="_payjpElements1_cardCvc"
            title="Secure payment input frame"
            scrolling="no"
            allow="payment"
            allowtransparency="true"
            src="https://js.pay.jp/v2/iframe.1682731599632.html#locale=ja&amp;origin=https%3A%2F%2Fwork-canvas.com&amp;componentName=cardCvc&amp;controllerName=_payjpController1&amp;groupId=Elements1&amp;ltr=true&amp;style%5Bbase%5D%5B%3A%3Aplaceholder%5D%5Bcolor%5D=%23B8BBC1&amp;style%5Bbase%5D%5BfontSize%5D=16px&amp;style%5Bbase%5D%5BlineHeight%5D=40px&amp;style%5Binvalid%5D%5Bcolor%5D=%23F9494F&amp;disabled=false&amp;placeholder=%E2%80%BB%E3%82%AB%E3%83%BC%E3%83%89%E8%A3%8F%E8%A8%98%E8%BC%89%E3%81%AE%EF%BC%93-%EF%BC%94%E6%A1%81%E3%81%AE%E7%95%AA%E5%8F%B7&amp;hideIcon=false"
            style={{card_style}} >
          </iframe>
        </div>

        <div>
          <div className="tag tag--type_primary">必須</div>
          <p>有効期限</p>
        </div>
        <div className="list--single--row u-mb-reset">
          <div id="cardExpiry" className="form--type_text f-none-spin PayjpElement PayjpElement--empty" style={{height: '50px'}}>
            <iframe
              name="_payjpElements1_cardExpiry"
              title="Secure payment input frame"
              scrolling="no"
              allow="payment"
              allowtransparency="true"
              src="https://js.pay.jp/v2/iframe.1682731599632.html#locale=ja&amp;origin=https%3A%2F%2Fwork-canvas.com&amp;componentName=cardExpiry&amp;controllerName=_payjpController1&amp;groupId=Elements1&amp;ltr=true&amp;style%5Bbase%5D%5B%3A%3Aplaceholder%5D%5Bcolor%5D=%23B8BBC1&amp;style%5Bbase%5D%5BfontSize%5D=16px&amp;style%5Bbase%5D%5BlineHeight%5D=40px&amp;style%5Binvalid%5D%5Bcolor%5D=%23F9494F&amp;disabled=false&amp;placeholder=%E6%9C%88%20%2F%20%E5%B9%B4&amp;hideIcon=false"
              style={{card_style}}>
            </iframe>
          </div>
        </div>
        
        <div>
          <div className="tag tag--type_primary">必須</div>
          <p>カード名義</p>
          <input type="text" id="cardOwner" className="form--type_text" placeholder="TARO YAMADA" />
        </div>
      </div>
      {/* <div className="wrapper--button">
        <a className="button go-prev">戻る</a>
        <a className="button button--type_primary button--state_disabled is-none-active">未入力の項目があります</a>
      </div> */}
    </div>
  );
}
 
export default Step2;