import { Link } from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from './Logo.jsx';
// import Oshirase from './Oshirase.jsx';
// import Dropdown from './Dropdown.jsx';

const Header = () => {
    return (
        <header className="enterprise_header" role="banner">
            <div className="header__inner">

                <Logo />

                <div className="header__items">

                    {/* <Oshirase /> */}
                    
                    {/* <Link to="/enterprise/notifications" className="enterprise_header_notification u-mr-xxs">
                        <NotificationsNoneIcon color="white" fontSize="medium" />
                    </Link>

                    <p className="header__menu">
                        <Link>
                            <MenuIcon color="white" fontSize="medium" />
                        </Link>
                    </p> */}

                    {/* <Dropdown /> */}
                    
                </div>
            </div>
        </header>
    );
};

export default Header;