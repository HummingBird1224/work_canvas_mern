import { Link } from 'react-router-dom';

const Oshirase = () => {
    return (
        <div className="dropdown--menu dropdown-notice-menu">
            <ul>
                <li className="title--link-part">
                    <div className="title-part">お知らせ</div>
                    <div className="link-part">
                        <Link to="/enterprise/notifications">すべて見る</Link>
                    </div>
                </li>

                <li className="border-line">
                    <a data-href="https://www.mhlw.go.jp/content/11302000/001136128.pdf" className="notice__link" data-id="D2wcX9rs7XpNx5F84">
                        <div className="notice__header">
                            <div>
                                <figure className="avatar">
                                    <img src="https://cdn1.work-canvas.com/assets/images/default_profile.png?14" className="notification__avatar" />
                                </figure>
                            </div>
                        </div>
                        <div className="notice__body">
                            <p>
                                <div style={{ textAlign: 'center', fontSize: 1.5 + 'rem', marginBottom: 40 + 'px' }}>
                                    【令和5年10月】 地域別最低賃金改定に伴う労働条件確認のお願い
                                </div>
                                <div>
                                    2023年10月より各都道府県の最低賃金額が改定されます。<br /><br />
                                    改定の詳細に関しては、下記の厚生労働省HPをご覧ください。<br />
                                    https://www.mhlw.go.jp/content/11302000/001136128.pdf<br /><br />
                                    もし労働条件を変更された、またはこれから変更される場合は、LINE又はメールにてWORKCANVAS宛にご連絡をいただけますと幸いです。<br />
                                    ※最低賃金改定以降にWORKCANVASにて確認できる給与情報が最低賃金を下回っている場合、WORKCANVASより確認連絡をさせていただくことがございますので、予めご了承ください。<br /><br />
                                    引き続き、よろしくお願いいたします。
                                </div>
                                <p>WORKCANVAS</p>
                            </p>
                            <p><time>2023/09/21</time></p>
                        </div>
                    </a>
                </li>

                <li className="border-line">
                    <a data-href="/privacy" className="notice__link" data-id="69gDcCGZYKTqJd7Es">
                        <div className="notice__header">
                            <div>
                                <figure className="avatar">
                                    <img src="https://cdn1.work-canvas.com/assets/images/default_profile.png?14" className="notification__avatar" />
                                </figure>
                            </div>
                        </div>
                        <div className="notice__body">
                            <p>【重要なお知らせ】プライバシーポリシー改定のお知らせ<br /><br />
                                いつもWORKCANVASをご利用いただきまして、ありがとうございます。<br />
                                2023年9月6日にプライバシーポリシーの内容が一部改定されます。<br /><br />ご確認のほどよろしくお願いします。</p>
                            <p><time>2023/09/06</time></p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Oshirase;