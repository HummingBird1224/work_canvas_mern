import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <h1 className="header__id">
            <Link to="/enterprise">
                <span className="enterprise_logo">WORKCANVAS</span>
                <span className="logo_text">サロン管理</span>
            </Link>
        </h1>
    );
};

export default Logo;