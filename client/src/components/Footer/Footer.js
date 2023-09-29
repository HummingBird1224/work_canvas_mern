import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className='footer__wrapper'>
        <ul className='footer__navigation'>
          <li>
            <a href='https://gramn.com/' target='_blank' className='text-default'>運営会社</a>
          </li>
          <li>
            <Link to='content/t' target='_blank' className='text-default'>お役立ち情報</Link>
          </li>
          <li>
            <Link to='enterprise/manual' target='_blank' className='text-default'>マニュアル・規約</Link>
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
      </div>
    </footer>
  );
}

export default Footer;