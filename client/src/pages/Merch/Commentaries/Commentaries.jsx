import { useState } from "react";
import { useEffect } from "react";

import { fetchCommentaries } from "../../../http/commentaryAPI";

import Button from "../../../components/UI/Button/Button";
import Loading from "../../../components/UI/Loading/Loading";
import Commentary from "./Commentary/Commentary";

import styles from "./commentaries.module.css";

const Commentaries = ({ merchId }) => {
    const [commentaries, setCommentaries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCommentaries(merchId, null, null).then(data => {
            setCommentaries(data.commentaries.rows);
        }).finally(() => setLoading(false));
    }, []);

    return (
        <>
            {loading
                ?
                <Loading loading={loading} />
                :
                <>
                    <div className={styles.informationBlock}>
                        <h3>Коментарі</h3>
                        <p className={styles.addCommentaryInput} contentEditable suppressContentEditableWarning={true}>Коментар</p>
                        <Button>
                            Додати
                        </Button>
                    </div>
                    {commentaries.map((commentary) => 
                        <Commentary 
                            avatar={"../gray-img.png"}
                            author={"Author"}
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