import { $authHost } from "./index";

interface BasketData {
    merchId?: number;
};

export const getBasket = async () => {
    const { data } = await $authHost.get("api/basket/get");
    return data;
};

export const addToBasket = async <T extends BasketData>(merchId: T["merchId"]) => {
    const { data } = await $authHost.post("api/basket/add-merch", { merchId });
    return data;
};

export const removeFromBasket = async <T extends BasketData>(merchId: T["merchId"]) => {
    const { data } = await $authHost.post("api/basket/remove-merch", { merchId });
    return data;
};