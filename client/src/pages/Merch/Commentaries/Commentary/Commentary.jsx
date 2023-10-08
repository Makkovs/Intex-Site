import { useEffect, useState } from "react";
import styles from "./commentary.module.css";
import { fetchOneUser } from "../../../../http/userAPI";

const Commentary = ({ avatar, commentary, changeAnswer, reply, replyParent }) => {

    const [authorName, setAuthorName] = useState("");
    const [replyName, setReplyName] = useState("");

    useEffect(() => {
        fetchOneUser(commentary.userId).then(data => setAuthorName(data.userProfile.name))
        if (reply && replyParent) {
            fetchOneUser(replyParent.userId).then(data => setReplyName(` | Відповідь для ${data.userProfile.name}`));
        };
    }, []);

    return (
        <div className={reply ? [styles.commentary, styles.commentaryReply].join(" ") : styles.commentary}>
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <div className={styles.commentaryInfo}>
                <h4 className={styles.authorName}>
                    {authorName}
                    {reply && <span className={styles.replyName}>{replyName}</span>}
                </h4>
                <p className={styles.commentaryBody}>
                    {commentary.body}
                </p>
                <div className={styles.commentaryMenu}>
                    {!reply && <span className={styles.textButton} onClick={() => changeAnswer(commentary.id, "status", true)}>Відповісти</span>}
                    <span className={styles.textButton}>Поскаржитись</span>
                </div>
            </div>
        </div>
    );
};

export default Commentary;