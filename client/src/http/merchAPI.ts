import { $authHost, $host } from "./index";

interface MerchData {
    id?: number;
    name?: string;
    desc?: string;
    price?: number;
    status?: boolean;
    limit?: number;
    page?: number;
    img?: Array<File>;
    categoryId?: number | null;
    companyId?: number | null;
}

interface CharacteristicData {
    name?: string;
    body?: string;
    merchId?: number;
};

export const createMerch = async <T extends MerchData>(
    name: T["name"], desc: T["desc"],
    price: T["price"], status: T["status"],
    img: T["img"], categoryId: T["categoryId"], 
    companyId: T["companyId"]
) => {

    const formData = new FormData();
    formData.append("name", String(name));
    formData.append("desc", String(desc));
    formData.append("price", String(price));
    formData.append("status", String(status));
    formData.append("categoryId", String(categoryId));
    formData.append("companyId", String(companyId));
    img?.forEach((value: File) => 
        formData.append("img", value)
    );
    const { data } = await $authHost.post("api/merch/create", formData);
    return data;
};

export const deleteMerch = async <T extends MerchData>(id: T["id"]) => {
    const { data } = await $authHost.post("api/merch/delete", id);
    return data;
};

export const fetchMerch = async <T extends MerchData>(
    limit: T["limit"], page: T["page"],
    categoryId: T["categoryId"], companyId: T["companyId"]
) => {
    const { data } = await $host.get("api/merch/get-all", {
        params: {
            limit, page, categoryId, companyId
        }
    });
    return data;
};

export const fetchOneMerch = async <T extends MerchData>(id: T["id"]) => {
    const { data } = await $host.get("api/merch/" + id);
    return data;
};

export const createCharacteristic = async <T extends CharacteristicData>(
    name: T["name"], body: T["body"], merchId: T["merchId"]
) => {
    const { data } = await $authHost.post("api/characteristic/create", { name, body, merchId });
    return data;
};

export const fetchCharacteristic = async <T extends CharacteristicData>(merchId: T["merchId"]) => {
    const { data } = await $host.get("api/characteristic/get-all", {
        params: {
            merchId
        }
    });
    return data;
};