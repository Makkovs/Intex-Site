import jwtDecode from "jwt-decode";
import { $authHost, $host } from "./index";
import { IUser } from "../types/userTypes";

interface UserData {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    phone?: string | null;
}

export const createUser = async <T extends UserData>(
    name: T["name"], email: T["email"], 
    password: T["password"], phone: T["phone"]
) => {
    try {
        const { data } = await $host.post("api/user/registration", { name, email, password, phone, role: "USER" });
        localStorage.setItem("token", data.token);
        return jwtDecode(data.token);
    } catch (error: any) {
        return error.response.data.error;
    };
};

export const loginUser = async <T extends UserData>(
    email: T["email"], password: T["password"]
) => {
    try {
        const { data } = await $host.post("api/user/login", { email, password });
        localStorage.setItem("token", data.token);
        return jwtDecode(data.token);
    } catch (error: any) {
        return error.response.data.error;
    };
};

export const check = async () => {
    const { data } = await $authHost.get("api/user/auth");
    localStorage.setItem("token", data.token);
    const decoded:IUser = jwtDecode(data.token);
    return decoded;
};

export const fetchOneUser = async <T extends UserData>(id: T["id"]) => {
    const { data } = await $host.get("api/user/get-user", { params: { id } });
    return data;
};