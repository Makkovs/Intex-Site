import { FC } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom"

import { setAuthAction } from "../../store/userReducer";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { HOME_ROUTE, CATALOGE_ROUTE, AUTH_ROUTE } from "../../utils/consts";

import styles from "./header.module.scss";

const Header: FC = () => {
    const location = useLocation();
    const isAuth = useTypedSelector(state => state.userReducer.isAuth);
    const dispatch = useDispatch();

    const logOut = (): void => {
        dispatch(setAuthAction(false));
        localStorage.setItem("token", "");
    };

    return (
        <header className={styles.header}>
            <NavLink
                className={styles.logo}
                to={HOME_ROUTE}
            >
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
                        onClick={logOut}
                        to={HOME_ROUTE}
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
                    <span>+380123456789</span>
                </div>
            </nav>
            <div className={styles.contactsPhone}>
                <span>mail123@gmail.com</span>
                <span>+380123456789</span>
            </div>
        </header>
    );
};

export default Header;