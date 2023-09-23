import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AUTH_ROUTE, CATALOGE_ROUTE, HOME_ROUTE } from "../../utils/consts";

import styles from "./header.module.css";
import { setAuthAction } from "../../store/userReducer";

const Header = () => {
    const location = useLocation();
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(setAuthAction(false));
        localStorage.setItem("token", "");    
    };

    return (
        <header className={styles.header}>
            <NavLink className={styles.logo} to={HOME_ROUTE}>
                <h1>INTEX</h1>
            </NavLink>
            <nav className={styles.navigation}>
                <NavLink
                    className={location.pathname === HOME_ROUTE
                        ? [styles.link, styles.selectedLink].join(" ")
                        : styles.link
                    }
                    to={HOME_ROUTE}
                >
                    Головна
                </NavLink>
                <NavLink
                    className={location.pathname === CATALOGE_ROUTE
                        ? [styles.link, styles.selectedLink].join(" ")
                        : styles.link
                    }
                    to={CATALOGE_ROUTE}
                >
                    Каталог
                </NavLink>
                {isAuth
                    ?
                    <NavLink 
                        className={styles.link}
                        onClick={logout}
                    >
                        Вийти
                    </NavLink>
                    :
                    <NavLink
                        className={location.pathname === AUTH_ROUTE
                            ? [styles.link, styles.selectedLink].join(" ")
                            : styles.link
                        }
                        to={AUTH_ROUTE}
                    >
                        Увійти
                    </NavLink>
                }
                <div className={styles.contacts}>
                    <span>mail123@gmail.com</span>
                    <br />
                    <span>+380123456789</span>
                </div>
            </nav>
        </header>
    );
};

export default Header;