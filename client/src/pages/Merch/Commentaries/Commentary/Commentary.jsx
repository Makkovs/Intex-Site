import styles from "./commentary.module.css";

const Commentary = ({avatar, author, body}) => {

    return (
        <div className={styles.commentary}>
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <div className={styles.commentaryInfo}>
                <h4 className={styles.authorName}>
                    {author}
                </h4>
                <p className={styles.commentaryBody}>
                   {body}
                </p>
            </div>
        </div>
    );
};

export default Commentary;