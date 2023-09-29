import './NavBrand.css'
import { Link } from 'react-router-dom';
import logo from '../../../asset/img/logo-white.svg'

const NavBrand = () => {
    return (
        <div href="#home" className='navbrand__container pl-4'>
            <h5 className='navbrand'>
                <Link to="/">
                    <img src={logo} />
                    <span>サロン管理</span>
                </Link>
            </h5>
        </div>
    );
}

export default NavBrand;