import { $authHost, $host } from "./index";

export const createCommentary = async (body, merchId, commentaryId) => {
    const { data } = await $authHost.post("api/commentary/create", { name: "pofig", body, merchId, commentaryId });
    return data;
};

export const deleteCommentary = async (commentaryId) => {
    const { data } = await $authHost.post("api/commentary/delete", { commentaryId });
    return data;
};

export const fetchCommentaries = async (merchId, commentaryId, userId) => {
    const { data } = await $host.get("api/commentary/get-all", {
        params: {
            merchId, commentaryId, userId
        }
    });
    return data;
};