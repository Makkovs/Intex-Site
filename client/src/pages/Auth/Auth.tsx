import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { IUser } from "../../types/userTypes";
import { HOME_ROUTE } from "../../utils/consts";

import { createUser, loginUser } from "../../http/userAPI";
import { setAuthAction, setUserAction } from "../../store/userReducer";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import Button from "../../components/UI/Button/Button";

import styles from "./auth.module.scss";

const AuthPage: FC = () => {

    const [login, setLogin] = useState<boolean>(true);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [authError, setAuthError] = useState<boolean>(false);
    const [textError, setTextError] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isAuth = useTypedSelector(state => state.userReducer.isAuth);

    const loginParamsLength = email.length > 0 && password.length > 0;
    const registrationParamsLength = name.length > 2 && email.length > 0 && password.length > 7;

    useEffect(() => {
        if (isAuth) {
            navigate(HOME_ROUTE);
        };
    }, []);

    const checkLength = (value: string, length: number) => {
        if (value.length >= 1 && value.length < length) {
            return false;
        } else {
            return true;
        };
    };

    const checkForErrors = (data: string | IUser) => {
        if (typeof data === "string") {
            setTextError(data);
            setAuthError(true);
        } else if (typeof data === "object") {
            dispatch(setAuthAction(true));
            dispatch(setUserAction(data));
            navigate(HOME_ROUTE);
        };
    };

    const confirm = (checkParams: boolean) => {
        if (checkParams) {
            if (login) {
                loginUser(email, password).then(data => {
                    checkForErrors(data)
                });
            } else {
                createUser(name, email, password, phone).then(data => {
                    checkForErrors(data)
                });
            };
        } else {
            setTextError("Вкажіть всі обов'язкові поля");
            setAuthError(true);
        };
    };

    return (
        <main className={styles.main}>
            <article className={styles.login}>
                {login
                    ? <h1 className={styles.title}>Увійти</h1>
                    : <h1 className={styles.title}>Реєстрація</h1>
                }
                {!login &&
                    <>
                        <input
                            className={
                                checkLength(name, 3)
                                    ? styles.input
                                    : [styles.input, styles.inputError].join(" ")
                            }
                            type="text"
                            placeholder="ім'я"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {!checkLength(name, 3) &&
                            <span className={styles.textError}>
                                Ім'я має бути довше за 2 символи
                            </span>
                        }
                    </>
                }
                <input
                    className={styles.input}
                    type="text"
                    placeholder="електронна пошта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {!login &&
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="номер телефону (необов.)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                }
                <input
                    className={
                        checkLength(password, 7)
                            ? styles.input
                            : [styles.input, styles.inputError].join(" ")
                    }
                    type="text"
                    placeholder="пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {!login && !checkLength(password, 7) &&
                    <span className={styles.textError}>
                        Пароль має бути довший за 7 символів
                    </span>
                }
                {authError &&
                    <span className={styles.textError}>
                        {textError}
                    </span>
                }
                {login
                    ?
                    <span className={styles.another}>
                        У Вас ще немає аккаунту?
                        <a className={styles.redirect} onClick={() => setLogin(false)}>Реєстрація</a>
                    </span>
                    :
                    <span className={styles.another}>
                        У Вас вже є аккаунт?
                        <a className={styles.redirect} onClick={() => setLogin(true)}>Вхід</a>
                    </span>
                }
                {login
                    ?
                    <Button onClick={() => confirm(loginParamsLength)}>
                        Увійти
                    </Button>
                    :
                    <Button onClick={() => confirm(registrationParamsLength)}>
                        Зареєструватись
                    </Button>
                }
            </article>
        </main>
    );
};

export default AuthPage;