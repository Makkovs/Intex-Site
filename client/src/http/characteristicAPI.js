import { $authHost, $host } from "./index";

export const createCharacteristic = async (name, body, merchId) => {
    const { data } = await $authHost.post("api/characteristic/create", { name, body, merchId });
    return data;
};

export const fetchCharacteristic = async (merchId) => {
    const { data } = await $host.get("api/characteristic/get-all", {
        params: {
            merchId
        }
    });
    return data;
};