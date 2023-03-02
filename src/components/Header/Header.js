import { Link } from 'react-router-dom';

import './Header.scss';
import logo from './fast-pace-logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrap">
                    <a href="#" className="header-logo">
                        <img src={logo} alt="Fast Pace logo" />
                    </a>
                    <nav className="header-nav">
                        <ul className="header-list">
                            <li className="header-list-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="header-list-item">
                                <Link to="/">About</Link>
                            </li>
                            <li className="header-list-item">
                            <Link to="/catalog">Catalog</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;