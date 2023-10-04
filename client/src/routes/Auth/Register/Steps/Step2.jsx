import React, {useState} from 'react'
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';

// import UnivapayCheckout from 'https://widget.univapay.com/client/checkout.js';

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

const Step2 = () => {
  const [tab, setTab]=useState('bank');
  // let UnivapayCheckout = window.UnivapayCheckout;
  // const checkout=UnivapayCheckout.create({
	// 		appId: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcHBfdG9rZW4iLCJpYXQiOjE2ODAzNjY4NjQsIm1lcmNoYW50X2lkIjoiMTFlZGE3YzktYzRlZi02MzAwLTk0OTEtNGJjNjNlMzIzNDcxIiwic3RvcmVfaWQiOiIxMWVkYTdjOS1jNWM0LTRjYjQtYTA2Zi0wM2MxMzI2NzY0YjEiLCJkb21haW5zIjpbIm1ldGFscHJvLmpwIl0sIm1vZGUiOiJ0ZXN0IiwiY3JlYXRvcl9pZCI6IjExZWRhN2M5LWM0ZWYtNjMwMC05NDkxLTRiYzYzZTMyMzQ3MSIsInZlcnNpb24iOjEsImp0aSI6IjExZWRkMGFiLTEwMGUtNDk5MS1iMzg2LThiZDY4ZDhmYjVhZSJ9.IYuiaCuNKiG82z2DU5Fj42sGia3Fsm9476huMW_NSCA",
	// 		checkout: "payment",
	// 		amount: 1000,
	// 		currency: "jpy",
	// 		size: "large",
	// 		text: "注文手続きに進む>>",
	// 		class: "btn btn-block btn-info text-white p-3",
	// 		submitButtonText: "決済",
	// 		locale: "ja-jp"
	// 	});
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
              id="paymentMethod-1" 
              checked={tab=='card'}
              onChange={()=>setTab('card')}
              />
            <label htmlFor="paymentMethod-1">
              カード払い
            <div className='checked__icon'>
              <RadioButtonCheckedOutlinedIcon fontSize='small' />
            </div>
            <div className='unchecked__icon'>
              <RadioButtonUncheckedOutlinedIcon fontSize='small' sx={{color:'lightgrey'}}/>
            </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              value="2"
              name="paymentMethod"
              id="paymentMethod-2" 
              checked={tab=='bank'}
              onChange={()=>setTab('bank')}
              />
            <label htmlFor="paymentMethod-2">
              銀行振込
            <div className='checked__icon'>
              <RadioButtonCheckedOutlinedIcon fontSize='small' />
            </div>
            <div className='unchecked__icon'>
              <RadioButtonUncheckedOutlinedIcon fontSize='small' sx={{color:'lightgrey'}}/>
            </div>
            </label>
          </li>
        </ul>
      </div>
      {tab == 'card'?
        <div id="formApplyStep2">
          <h4 className="u-fs-14">ご利用可能なカード一覧</h4>
          <div className="list--row--wrap cardlogo-list">
            <img src='/asset/img/logo-visa.png' alt='card-logo' />
            <img src='/asset/img/logo-mastercard.png' alt='card-logo' />
            <img src='/asset/img/logo-jcb.png' alt='card-logo' />
            <img src='/asset/img/logo-amex.png' alt='card-logo' />
            <img src='/asset/img/logo-diner.png' alt='card-logo' />
            <img src='/asset/img/logo-discover.png' alt='card-logo' />
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
        :
        <div className='text-center'>
          よろしければ、「次に進む」ボタンを押してください
        </div>
      }
      <span id="uniPayBtn"
          data-app-id="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcHBfdG9rZW4iLCJpYXQiOjE2Nzc0Nzc2OTksIm1lcmNoYW50X2lkIjoiMTFlZGE3YzktYzRlZi02MzAwLTk0OTEtNGJjNjNlMzIzNDcxIiwic3RvcmVfaWQiOiIxMWVkYTdjOS1jNWM0LTRjYjQtYTA2Zi0wM2MxMzI2NzY0YjEiLCJkb21haW5zIjpbIm1ldGFscHJvLmpwIl0sIm1vZGUiOiJ0ZXN0IiwiY3JlYXRvcl9pZCI6IjExZWRhN2M5LWM0ZWYtNjMwMC05NDkxLTRiYzYzZTMyMzQ3MSIsInZlcnNpb24iOjEsImp0aSI6IjExZWRiNjY0LTMzNzktYWJhZS1iNDZhLThkMDQyY2UyZjU3MyJ9.cy72Tc4FWezkUlpTci_801etCQU1r7OwNuDszOkRH10"
        data-checkout="payment"
        data-amount="10000"
        data-currency="jpy"
        data-size="large"
        data-text="注文手続きに進む>>"
        data-className="btn btn-block btn-info text-white p-3"
        data-submit-button-text="決済"
        data-locale="ja-jp">
      </span> 
    </div>
  );
}
 
export default Step2;