import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { setAuthAction, setUserAction } from "./store/userReducer";
import { check } from "./http/userAPI";

import Header from "./components/Header/Header";
import AppRouter from "./components/Router/AppRouter";

import { IUser } from "./types/userTypes";

import "./app.scss";

function App () {
    
    const dispatch = useDispatch();

    useEffect(() => {
        check().then((data: IUser) => {
            dispatch(setUserAction(data));
            dispatch(setAuthAction(true));
        });
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;