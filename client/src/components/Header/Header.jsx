import { NavLink, useLocation } from "react-router-dom";

import { AUTH_ROUTE, CATALOGE_ROUTE, HOME_ROUTE } from "../../utils/consts";

import "./header.css";

const Header = () => {
    const location = useLocation();

    return (
        <header className="header">
            <NavLink className="header__logo" to={HOME_ROUTE}>
                <h1>INTEX</h1>
            </NavLink>
            <nav className="navigation">
                <NavLink
                    className={location.pathname === HOME_ROUTE
                        ? "navigation__link navigation__link--selected"
                        : "navigation__link"
                    }
                    to={HOME_ROUTE}
                >
                    Головна
                </NavLink>
                <NavLink
                    className={location.pathname === CATALOGE_ROUTE
                        ? "navigation__link navigation__link--selected"
                        : "navigation__link"
                    }
                    to={CATALOGE_ROUTE}
                >
                    Каталог
                </NavLink>
                <NavLink
                    className={location.pathname === AUTH_ROUTE
                        ? "navigation__link navigation__link--selected"
                        : "navigation__link"
                    }
                    to={AUTH_ROUTE}
                >
                    Увійти
                </NavLink>
                <div className="header__contacts">
                    <span className="contacts_mail">mail123@gmail.com</span>
                    <br />
                    <span className="contacts__phone">+380123456789</span>
                </div>
            </nav>
        </header>
    );
};

export default Header;