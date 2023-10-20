import { useRef, useState } from "react";

import { createCommentary } from "../../../http/commentaryAPI";
import useCommentaries from "../../../hooks/useCommentaries";

import Button from "../../../components/UI/Button/Button";
import Loading from "../../../components/UI/Loading/Loading";
import Commentary from "./Commentary/Commentary";

import styles from "./commentaries.module.scss";

const Commentaries = ({ merchId }) => {

    const commentaryBodyInput = useRef(null);
    const [commentaryError, setCommentaryError] = useState("");
    const [loading, setLoading] = useState(true);

    const [
        commentaries, setCommentaries,
        commentaryAnswers, setCommentaryAnswers
    ] = useCommentaries(merchId, setLoading);

    const changeAnswer = (commentaryId, key, value) => {
        setCommentaryAnswers(commentaryAnswers.map(
            answer => answer.id === commentaryId
                ? { ...answer, [key]: value }
                : answer
        ));
    };

    const addNewCommentary = (commentaryBody, commentaryId) => {
        if (commentaryBody.length < 5) {
            setCommentaryError("Коментар має містити більше 4-х символів!");
        } else {
            setCommentaryError("");
            commentaryBodyInput.current.textContent = "";
            createCommentary(commentaryBody, merchId, commentaryId);
        };
    };

    const addNewAnswer = (commentaryId) => {
        addNewCommentary(
            commentaryAnswers.find((answer) => answer.id === commentaryId).body, 
            commentaryId
        );
        changeAnswer(commentaryId, "body", "");
        changeAnswer(commentaryId, "status", false);
    };

    return (
        <>
            {loading
                ?
                <Loading loading={loading} />
                :
                <>
                    <div className={styles.informationBlock}>
                        <h3>Коментарі</h3>
                        <p
                            className={styles.addCommentaryInput}
                            contentEditable
                            suppressContentEditableWarning={true}
                            ref={commentaryBodyInput}
                        ></p>
                        {commentaryError.length > 0 &&
                            <span className={styles.textError}>
                                {commentaryError}
                            </span>
                        }
                        <Button
                            onClick={() => addNewCommentary(commentaryBodyInput.current.textContent, null)}
                        >
                            Додати
                        </Button>
                    </div>
                    {commentaries.map((commentary) =>
                        <div key={commentary.id}>
                            <Commentary
                                avatar={"../gray-img.png"}
                                commentary={commentary}
                                changeAnswer={changeAnswer}
                                reply={false}
                            />
                            {commentary.replies.length > 0 &&
                                commentary.replies.map(reply =>
                                    <Commentary
                                        key={reply.id}
                                        avatar={"../gray-img.png"}
                                        commentary={reply}
                                        changeAnswer={changeAnswer}
                                        reply={true}
                                        replyParent={commentary}
                                    />
                                )}
                            {commentaryAnswers.find((answer) => answer.id == commentary.id)?.status &&
                                <div className={styles.commentaryAnswer}>
                                    <h4>Відподь на коментар:</h4>
                                    <p
                                        className={styles.addCommentaryInput}
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                        onInput={(e) => changeAnswer(commentary.id, "body", e.target.textContent)}
                                    ></p>
                                    {
                                        commentaryError.length > 0 &&
                                        <span className={styles.textError}>
                                            {commentaryError}
                                        </span>
                                    }
                                    <Button
                                        onClick={() => addNewAnswer(commentary.id)}
                                    >
                                        Додати
                                    </Button>
                                </div>

                            }
                        </div>
                    )}
                </>
            }
        </>
    );
};

export default Commentaries;