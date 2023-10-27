import { useEffect, useState } from "react";
import { ICommentary, ICommentaryAnswer, ICommentaryWithReplies } from "../types/merchTypes"
import { fetchCommentaries } from "../http/commentaryAPI";

const useCommentaries = (merchId: number, setLoading: (state: boolean) => void) => {

    const [commentaries, setCommentaries] = useState<ICommentaryWithReplies[]>([]);
    const [commentaryAnswers, setCommentaryAnswers] = useState<ICommentaryAnswer[]>([]);

    const addAnswer = (commentaryId: number) => {
        setCommentaryAnswers(commentaryAnswersState =>
            [...commentaryAnswersState, { body: "", status: false, id: commentaryId }]
        );
    };

    useEffect(() => {
        fetchCommentaries(merchId, null, null).then(data => {
            setCommentaries([]);
            setCommentaryAnswers([]);

            data.commentaries.rows.filter((commentary: ICommentary) => !commentary.commentaryId)
                .forEach((commentary: ICommentary) => {
                    setCommentaries(lastCommentaries =>
                        [...lastCommentaries, { ...commentary, replies: [] }]
                    );
                });

            data.commentaries.rows.filter((commentary: ICommentary) => commentary.commentaryId)
                .forEach((commentary: ICommentary) => {
                    setCommentaries(lastCommentaries =>
                        lastCommentaries.map(
                            comment => comment.id === commentary.commentaryId
                                ? { ...comment, replies: [...comment.replies, commentary] }
                                : comment
                        )
                    );
                });

            data.commentaries.rows.forEach((commentary: ICommentary) => {
                addAnswer(commentary.id);
            });

        }).finally(() => setLoading(false));
    }, []);

    return [commentaries, setCommentaries, commentaryAnswers, setCommentaryAnswers] as const;
};

export default useCommentaries;