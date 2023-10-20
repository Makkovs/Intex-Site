import { useEffect, useState } from "react";

import { fetchCommentaries } from "../http/commentaryAPI";

const useCommentaries = (merchId, setLoading) => {
    const [commentaries, setCommentaries] = useState([]);
    const [commentaryAnswers, setCommentaryAnswers] = useState([]);

    const addAnswer = (commentaryId) => {
        setCommentaryAnswers(commentaryAnswersState =>
            [...commentaryAnswersState, { body: "", status: false, id: commentaryId }]
        );
    };

    useEffect(() => {
        fetchCommentaries(merchId, null, null).then(data => {
            setCommentaries([]);
            setCommentaryAnswers([]);

            data.commentaries.rows.filter(commentary => !commentary.commentaryId).forEach(commentary => {
                setCommentaries(lastCommentaries =>
                    [...lastCommentaries, { ...commentary, replies: [] }]
                );
            });

            data.commentaries.rows.filter(commentary => commentary.commentaryId).forEach(commentary => {
                setCommentaries(lastCommentaries =>
                    lastCommentaries.map(
                        comment => comment.id === commentary.commentaryId
                            ? { ...comment, replies: [...comment.replies, commentary] }
                            : comment
                    )
                );
            });

            data.commentaries.rows.forEach(commentary => {
                addAnswer(commentary.id);
            });
            
        }).finally(() => setLoading(false));
    }, []);

    return [commentaries, setCommentaries, commentaryAnswers, setCommentaryAnswers];
};

export default useCommentaries;