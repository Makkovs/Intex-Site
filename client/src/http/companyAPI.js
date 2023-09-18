import { $authHost, $host } from "./index";

export const createCompany = async (name) => {
    const { data} = await $authHost.post("api/company/create", name);
    return data;
};

export const deleteCompany = async (companyId) => {
    const { data} = await $authHost.post("api/company/delete", companyId);
    return data;
};

export const fetchCompanies = async () => {
    const { data } = await $host.get("api/company/get-all");
    return data;
}