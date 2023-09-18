import { $authHost, $host } from "./index";

export const createCommentary = async (name, body, merchId, commentaryId, userId) => {
    const { data } = await $authHost.post("api/commentary/create", {name, body, merchId, commentaryId, userId});
    return data;
};

export const deleteCommentary = async (commentaryId) => {
    const { data } = await $authHost.post("api/commentary/delete", commentaryId);
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