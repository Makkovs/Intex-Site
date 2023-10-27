import axios from "axios";

import { REACT_APP_API_URL } from "../utils/consts";

const $host = axios.create({
    baseURL: REACT_APP_API_URL
});

const $authHost = axios.create({
    baseURL: REACT_APP_API_URL
});

const authInterceptor = (config: any) => {
    let token = localStorage.getItem("token") || "";
    config.headers.authorization = `Bearer ${token}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
};