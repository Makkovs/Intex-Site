import { useEffect, useState } from "react";
import styles from "./commentary.module.css";
import { fetchOneUser } from "../../../../http/userAPI";

const Commentary = ({avatar, authorId, body}) => {

    const [authorName, setAuthorName] = useState("");

    useEffect(() => {
        fetchOneUser(authorId).then(data => setAuthorName(data.userProfile.name))
    }, [])

    return (
        <div className={styles.commentary}>
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <div className={styles.commentaryInfo}>
                <h4 className={styles.authorName}>
                    {authorName}
                </h4>
                <p className={styles.commentaryBody}>
                   {body}
                </p>
                <div className={styles.commentaryMenu}>
                    <span className={styles.textButton}>Відповісти</span>
                    <span className={styles.textButton}>Поскаржитись</span>
                </div>
            </div>
        </div>
    );
};

export default Commentary;