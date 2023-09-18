import { $authHost, $host } from "./index";

export const createMerch = async (merch) => {
    const { data } = await $authHost.post("api/merch/create", merch);
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
    const { data } = await $host.get("api/merch/" + id);
    return data;
};