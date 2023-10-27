import { $authHost, $host } from "./index";

interface CategoryData {
    id?: number;
    name?: string;
};

export const createCategory = async <T extends CategoryData>(name: T["name"]) => {
    const { data } = await $authHost.post("api/category/create", { name });
    return data;
};

export const deleteCategory = async <T extends CategoryData>(id: T["id"]) => {
    const { data } = await $authHost.post("api/category/delete", id);
    return data;
}

export const fetchCategories = async () => {
    const { data } = await $host.get("api/category/get-all");
    return data;
};

export const fetchOneCategory = async <T extends CategoryData>(id: T["id"]) => {
    const { data } = await $host.get("api/category/get-one", { params: { id } });
    return data;
};