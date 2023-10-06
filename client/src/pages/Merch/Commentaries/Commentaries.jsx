import { useRef, useState } from "react";
import { useEffect } from "react";

import { createCommentary, fetchCommentaries } from "../../../http/commentaryAPI";

import Button from "../../../components/UI/Button/Button";
import Loading from "../../../components/UI/Loading/Loading";
import Commentary from "./Commentary/Commentary";

import styles from "./commentaries.module.css";

const Commentaries = ({ merchId }) => {
    const commentaryBodyInput = useRef(null);
    const [commentaries, setCommentaries] = useState([]);
    const [commentaryError, setCommentaryError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCommentaries(merchId, null, null).then(data => {
            setCommentaries(data.commentaries.rows);
        }).finally(() => setLoading(false));
    }, []);

    const addNewCommentary = () => {
        let commentaryBody = commentaryBodyInput.current.textContent; 
        if (commentaryBody.length < 5) {
            setCommentaryError("Коментар має містити більше 4-х символів!");
        }else{
            setCommentaryError("");
            commentaryBodyInput.current.textContent = "";
            createCommentary("pofig", commentaryBody, merchId, null);
        };
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
                        <Button onClick={addNewCommentary}>
                            Додати
                        </Button>
                    </div>
                    {commentaries.map((commentary) =>
                        <Commentary
                            avatar={"../gray-img.png"}
                            authorId={commentary.userId}
                            body={commentary.body}
                            key={commentary.id}
                        />
                    )}
                </>
            }
        </>
    );
};

export default Commentaries;