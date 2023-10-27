import { $authHost, $host } from "./index";

interface CommentaryData {
    commentaryId?: number | null;
    body?: string;
    merchId?: number;
    userId?: number | null;
}

export const createCommentary = async <T extends CommentaryData>(
    body: T["body"], merchId: T["merchId"], commentaryId: T["commentaryId"]
) => {
    const { data } = await $authHost.post("api/commentary/create", { name: "pofig", body, merchId, commentaryId });
    return data;
};

export const deleteCommentary = async <T extends CommentaryData>(commentaryId: T["commentaryId"]) => {
    const { data } = await $authHost.post("api/commentary/delete", { commentaryId });
    return data;
};

export const fetchCommentaries = async <T extends CommentaryData>(
    merchId: T["merchId"], commentaryId: T["commentaryId"], userId: T["userId"]
) => {
    const { data } = await $host.get("api/commentary/get-all", {
        params: {
            merchId, commentaryId, userId
        }
    });
    return data;
};