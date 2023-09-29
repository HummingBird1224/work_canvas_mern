import React from 'react';

import './Faq.css';

const faqList = [
  {
    id: 1,
    qs: '費用は発生しますか？',
    as: '求職者様のご採用時のみ、紹介手数料が発生します。'
  },
  {
    id: 2,
    qs: 'プランの期間は？',
    as: '永久利用が可能です。'
  },
  {
    id: 3,
    qs: 'プランの開始時期は？',
    as: 'お申し込みを頂いてから、プランを開始させて頂きます。'
  },
  {
    id: 4,
    qs: '募集を停止したい',
    as: '募集をしない期間は、求人票を募集停止にすることができます。再公開はいつでも無料で可能です。'
  },
  {
    id: 5,
    qs: 'お支払いサイクルは？',
    as: '銀行振込の場合、採用報告を受けた月の月末締め、翌月払いとなっております。クレジットカード払いの場合、採用報告を受けたその日に入金が発生します。'
  },
  {
    id: 6,
    qs: '採用した人がすぐ退職してしまったら？',
    as: '入社後最大30日間の返金保証があるので、安心してご採用いただけます。'
  },
  {
    id: 7,
    qs: '詳しい資料はありますか？',
    as: 'こちらから、ダウンロードできます。',
    link: 'https://share.hsforms.com/1RYfV0QB5SUyXalMc9mLR5g3rd41'
  },
]

const Faq = () => {
  return (
    <div className='faq__container text-default'>
      <h2 className='w-100 text-center fw-700 mb-40'>よくある質問</h2>
      <div className='w-100 row'>
        {faqList.map((faq) => (
          <div className='col-md-6 mb-40' key={faq.id}>
            <div className='faq faq__qs w-100'>
              {faq.qs}
            </div>
            <div className='faq faq__as w-100'>
              <p className='ballon__left__as'>
                {faq.as}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq;