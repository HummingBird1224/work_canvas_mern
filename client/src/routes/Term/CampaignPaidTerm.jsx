import React from "react";

import './Term.css'

const CampaignPaidTerm = () => {
  return ( 
    <div className="enterprise__container">
      <div className="enterprise__box terms ">
        <h1 className='title__lv1 mb-40'>初期費用無料キャンペーン規約</h1>
        <section>
          <p>
            本利用規約には、「WORKCANVAS」（以下、「本サービス」といいます。）
            の初期費用無料キャンペーン（以下、「本キャンペーン」といいます。）に関する提供条件等が定められています。  
          </p>
        </section>
        <section >
          <h2 className="title__lv2">第1条（利用規約の適用）</h2>
          <ol className="mb-30 pl-20 list__style__decimal">
            <li className="mb-4">
              本規約の内容は、本サービスの利用企業に対する、本キャンペーンの適用条件を定めたものです。
            </li>
            <li className="mb-4">
              本キャンペーンの適用にあたっては、本規約及び当社サイトに掲載する本キャンペーンの個別の説明に従うものとします。
              個別の説明と本規約が矛盾する場合には、本規約が優先されます。
            </li>
            <li className="mb-4">
              本規約は、本サービス利用規約及び有料プラン規約の個別規約であり、本規約に規定がない事項は、
              本サービス利用規約及び有料プラン規約の規定によります。
            </li>
          </ol>
        </section>
        <section>
          <h2 className="title__lv2">第2条（本キャンペーンの適用条件）</h2>
          <ol className="mb-30 pl-20">
            <li className="mb-4">
              当社は、当社が別途当社ウェブサイトで定める本キャンペーン期間（以下、「本キャンペーン期間」といいます。）
              中に、本サービスの有料プラン（以下「有料プラン」といいます。）の利用申し込みをした利用企業に対し、
              本キャンペーンを適用します。ただし、本キャンペーン期間の開始日以降に有料プランを解約して、
              本キャンペーン期間中に再申込みをする企業は除きます。
            </li>
          </ol>
        </section>
        <section>
          <h2 className="title__lv2">第3条（本キャンペーンの内容）</h2>
          <ol className="mb-30 pl-20 ">
            <li className="mb-4">
              当社は、本キャンペーンが適用される企業に対し、有料プラン利用規約の定めにかかわらず、
              本サービスの有料プランに必要な初期費用を無料とします。なお、初期費用以外の利用料金（紹介手数料等）については、
              有料プラン利用規約のとおり発生します。
            </li>
          </ol>
        </section>
        <section>
          <h2 className="title__lv2">第4条（本キャンペーンの中止）</h2>
          <ol className="mb-30 pl-20 ">
            <li className="mb-4">
              当社は、本キャンペーン期間中、本キャンペーンを継続する義務を負わず、
              本キャンペーン期間にかかわらず、当社の判断により、予告なく、本キャンペーンを中止し、変更することができます。
            </li>
          </ol>
        </section>
        <section className="mt-30">
          <p>規約制定日　2020年6月18日</p>
        </section>
      </div>
    </div>
  );
}
 
export default CampaignPaidTerm;