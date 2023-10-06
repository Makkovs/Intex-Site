import { $authHost, $host } from "./index";

export const createCategory = async (name) => {
    const { data } = await $authHost.post("api/category/create", { name });
    return data;
};

export const deleteCategory = async (categoryId) => {
    const { data } = await $authHost.post("api/category/delete", categoryId);
    return data;
};

export const fetchCategories = async () => {
    const { data } = await $host.get("api/category/get-all");
    return data;
};

export const fetchOneCategory = async (id) => {
    const { data } = await $host.get("api/category/get-one", { params: { id } });
    return data;
};