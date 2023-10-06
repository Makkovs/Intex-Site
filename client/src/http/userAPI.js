import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createUser = async (name, email, password, phone) => {
    try {
        const { data } = await $host.post("api/user/registration", { name, email, password, phone, role: "USER" });
        localStorage.setItem("token", data.token);
        return jwt_decode(data.token);
    } catch (error) {
        return error.response.data.error;
    };
};

export const loginUser = async (email, password) => {
    try {
        const { data } = await $host.post("api/user/login", { email, password });
        localStorage.setItem("token", data.token);
        return jwt_decode(data.token);
    } catch (error) {
        return error.response.data.error;
    }
}

export const check = async () => {
    const { data } = await $authHost.get("api/user/auth");
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
};

export const fetchOneUser = async (id) => {
    const { data } = await $host.get("api/user/get-user", { params: { id } });
    return data;
};