import { Link } from 'react-router-dom';

const Dropdown = () => {
    return (
        <div className="dropdown--menu dropdown-user-menu">
            <ul className="menu menu--type_dropdown">
                <li>
                    <div className="dropdown_profile">
                        <div>
                            <span className="u-c-darker u-fs-8 u-bg-red u-c-white u-bo-radius u-pa-xxs">
                                初期費用無料プラン利用中
                            </span>
                            <div className="u-d-flex u-d-flex-sb u-f-ai-c">
                                <h5 className="u-m-reset u-c-darker">C・crew</h5>
                            </div>
                        </div>

                        <ul className="u-pa-reset u-ml-sm u-mt-xs is-none u-d-block">
                            <li className="u-m-reset u-fw-n u-fs-13">
                                <Link to="" className="u-td-none u-pa-reset u-d-block u-td-none btn-profile-modify">企業プロフィール</Link>
                            </li>
                            <li className="u-m-reset u-fw-n u-fs-13">
                                <Link to="" className="u-td-none u-pa-reset u-d-block u-td-none btn-staff-view">スタッフ管理</Link>
                            </li>
                            <li className="u-m-reset u-fw-n u-fs-13">
                                <Link to="" className="u-td-none u-pa-reset u-d-block u-td-none btn-store-view">店舗管理</Link>
                            </li>
                            <li className="u-m-reset u-fw-n u-fs-13">
                                <Link to="" className="u-td-none u-pa-reset u-d-block u-td-none btn-recruitment-view">募集一覧</Link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className="menu__item">
                    <Link to="/enterprise/feature" className="menu__link menu__icon menu__icon_feature">
                        <p className="menu__text">特徴管理</p>
                    </Link>
                </li>

                <li className="menu__item">
                    <Link to="/enterprise/entriesList" className="menu__link menu__icon menu__icon_apply">
                        <p className="menu__text">応募者一覧</p>
                    </Link>
                </li>

                <li className="menu__item">
                    <Link to="/enterprise/scoutsList" className="menu__link">
                        <p className="menu__text">
                            <span className="material-icons-outlined u-mr-xxs">people</span>
                            スカウト機能（β版）
                        </p>
                    </Link>
                </li>
                <li className="menu__item">
                    <Link to="/enterprise/plan" className="menu__link menu__icon menu__icon_plan">
                        <p className="menu__text">プラン情報</p>
                    </Link>
                    <ul className="menu--2dep">
                        <li className="menu__item">
                            <Link to="https://work-canvas.com/enterprise/plan?type=planList" className="menu__link">
                                <p className="menu__text">料金プラン</p>
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="https://work-canvas.com/enterprise/plan?type=currentPlan" className="menu__link">
                                <p className="menu__text">現在ご利用中のプラン</p>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu__item">
                    <Link to="/enterprise/payment" className="menu__link menu__icon menu__icon_payment">
                        <p className="menu__text">請求情報</p>
                    </Link>
                    <ul className="menu--2dep">
                        <li className="menu__item">
                            <Link to="https://work-canvas.com/enterprise/payment?type=billingInfo" className="menu__link">
                                <p className="menu__text">会社・請求先情報</p>
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="https://work-canvas.com/enterprise/payment?type=method" className="menu__link">
                                <p className="menu__text">お支払い方法</p>
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="https://work-canvas.com/enterprise/payment?type=statement" className="menu__link">
                                <p className="menu__text">請求・入金一覧</p>
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="https://work-canvas.com/enterprise/payment?type=bankInfo" className="menu__link">
                                <p className="menu__text">紹介手数料返金口座</p>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="menu__item">
                    <Link to="/enterprise/manual" className="menu__link menu__icon menu__icon_manual">
                        <p className="menu__text">マニュアル・規約</p>
                    </Link>
                </li>

                <li className="menu__item">
                    <Link to="https://gramn.notion.site/WORKCANVAS-2d319d5bd60d4f0f8b48784ca30d0b0c" className="menu__link menu__icon menu__icon_help" target="_blank" rel="noopener">
                        <p className="menu__text">公式ヘルプ・使い方の案内</p>
                    </Link>
                </li>

                <li className="menu__item">
                    <Link to="" className="menu__link btn-logout menu__icon menu__icon_logout">
                        <p className="menu__text">ログアウト</p>
                    </Link>
                </li>

                <li className="menu__item current-user-part border-line">
                    <Link to="/" className="menu__link">
                        <div>
                            <figure className="avatar">
                                <img src="https://cdn1.work-canvas.com/assets/images/default_profile.png?14" alt="星川豊" onError="this.src = 'https://cdn1.work-canvas.com/assets/images/icon-spinner-black.svg?14';this.setAttribute('data-error','true');" />
                            </figure>
                            <span className="is-inline-block u-va-m">星川豊</span>
                        </div>
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default Dropdown;