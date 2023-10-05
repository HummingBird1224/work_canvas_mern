import { Link } from 'react-router-dom'
import { useState, Fragment } from 'react';
import LineModal from '../Modal/LineModal'

import './Footer.css'

const Footer = () => {
  const [alertOpen, setAlertOpen] = useState(false);
  const handleClick = () => {
    setAlertOpen(true);
  };

  return (
    <footer className="footer__container enterprise_footer">
      <div className='footer__wrapper'>
        <ul className='footer__navigation'>
          <li>
            <a href='https://gramn.com/' target='_blank' className='text-default'>運営会社</a>
          </li>
          <li>
            <Link to='/content/t' target='_blank' className='text-default'>お役立ち情報</Link>
          </li>
          <li>
            <Link to='/enterprise/manual' target='_blank' className='text-default'>マニュアル・規約</Link>
          </li>
          <li>
            <a href='https://gramn.notion.site/a338552b675442ec91dc78e90abe700b' target='_blank' className='text-default'>募集記事クオリティガイドライン</a>
          </li>
          <li>
            <a href='https://gramn.notion.site/WORKCANVAS-2d319d5bd60d4f0f8b48784ca30d0b0c' target='_blank' className='text-default'>FAQ</a>
          </li>
        </ul>
        <p className='footer__copylight'>
          © Gramn Inc.
        </p>
        <LineModal open={alertOpen} handleChange={(open) => setAlertOpen(open)} />
        <div
          className="line-sp"
          id="openEnterpriseLiffModal"
          onClick={handleClick}
          style={{ right: '50px', bottom: '50px', cursor: 'pointer' }}>
          <img
            src="https://cdn1.work-canvas.com/assets/images/icons/line-icon-white.svg?14"
            alt=""
            decoding="async"
            loading="lazy" />
          <strong>LINE友達追加の<br />お願い</strong>
        </div>
      </div>
    </footer>
  );
}

export default Footer;