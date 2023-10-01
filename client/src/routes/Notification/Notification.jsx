import './Notification.css';
import './../../asset/main.css';
import Note from './Note';


const Notification = () => {

  const contents = [
    {
      id: 1,
      status: 'is-unread',
      link: '/enterprise/terms_notice',
      message: '＜重要なお知らせ＞2019年9月3日よりサービス利用規約（企業向け）が改定されますので、ご確認のほどよろしくお願いいたします。',
      time: '2019/09/03',
    },
    {
      id: 2,
      status: 'is-unread',
      link: '/enterprise/paid_terms_notice',
      message: `<div style="text-align: center; font-size: 1.5rem; margin-bottom: 40px;">
                  【令和5年10月】 地域別最低賃金改定に伴う労働条件確認のお願い
                </div>
                <div>
                  2023年10月より各都道府県の最低賃金額が改定されます。<br>
                  <br>
                  改定の詳細に関しては、下記の厚生労働省HPをご覧ください。<br>
                  https://www.mhlw.go.jp/content/11302000/001136128.pdf<br>
                  <br>
                  もし労働条件を変更された、またはこれから変更される場合は、LINE又はメールにてWORKCANVAS宛にご連絡をいただけますと幸いです。<br>
                  ※最低賃金改定以降にWORKCANVASにて確認できる給与情報が最低賃金を下回っている場合、WORKCANVASより確認連絡をさせていただくことがございますので、予めご了承ください。<br>
                  <br>
                  引き続き、よろしくお願いいたします。
                </div>
                <p>WORKCANVAS</p>`,
      time: '2019/09/03',
    }
  ]

  return(
    // <>Notification</>
    <div class="enterprise__container">
      <div className="enterprise__box d-flex flex-wrap justify-content-between">
        <div className="enterprise_contents e--c">
          <h1 className="title__lv1 mt-30">お知らせ</h1>
          <table className="table--default notification_wrapper">
            <tbody>
              {contents.map((content) => (
                <Note
                  id = {content.id}
                  status = {content.status}
                  dataLink = {content.link}
                  message = {content.message}
                  elapsedtime = {content.time} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Notification;