import { $authHost, $host } from "./index";

export const createMerch = async (name, desc, price, status, companyId, categoryId) => {
    const { data } = await $authHost.post("api/merch/create", { name, desc, price, status, companyId, categoryId });
    return data;
};

export const deleteMerch = async (merchId) => {
    const { data } = await $authHost.post("api/merch/delete", merchId);
    return data;
};

export const fetchMerch = async (limit, page, categoryId, companyId) => {
    const { data } = await $host.get("api/merch/get-all", {
        params: {
            limit, page, categoryId, companyId
        }
    });
    return data;
};

export const fetchOneMerch = async (merchId) => {
    const { data } = await $host.get("api/merch/" + merchId);
    return data;
};

export const createCharacteristic = async (name, body, merchId) => {
    const { data } = await $authHost.post("api/characteristic/create", { name, body, merchId });
    return data;
};