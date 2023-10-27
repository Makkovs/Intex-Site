import { $authHost, $host } from "./index";

interface CompanyData {
    id?: number;
    name?: string;
};

export const createCompany = async <T extends CompanyData>(name: T["name"]) => {
    const { data } = await $authHost.post("api/company/create", { name });
    return data;
};

export const deleteCompany = async <T extends CompanyData>(id: T["id"]) => {
    const { data } = await $authHost.post("api/company/delete", id);
    return data;
};

export const fetchCompanies = async () => {
    const { data } = await $host.get("api/company/get-all");
    return data;
};

export const fetchOneCompany = async <T extends CompanyData>(id: T["id"]) => {
    const { data } = await $host.get("api/company/get-one", { params: { id } });
    return data;
};