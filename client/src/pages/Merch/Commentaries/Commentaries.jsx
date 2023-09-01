import styles from "./commentaries.module.css";
import Button from "../../../components/UI/Button/Button";
import Commentary from "./Commentary/Commentary";

const Commentaries = () => {
    const body = ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non ratione vitae, natus id quidem dignissimos eligendi, aspernatur doloribus
    autem adipisci eaque! Amet voluptatum fuga cumque necessitatibus dicta praesentium ipsum perferendis quibusdam enim, neque molestiae qui unde ut
    veritatis nulla sed recusandae in temporibus commodi nemo fugiat? Velit alias pariatur incidunt iste ut adipisci provident repudiandae at aut laudantium.`
    return (
        <>
            <div className={styles.informationBlock}>
                <h3>Коментарі</h3>
                <p className={styles.addCommentaryInput} contentEditable suppressContentEditableWarning={true}>Коментар</p>
                <Button>
                    Додати
                </Button>
            </div>
            <Commentary
                avatar={"../gray-img.png"}
                author={"Author"}
                body={body}
            />
            <Commentary
                avatar={"../gray-img.png"}
                author={"Author"}
                body={body}
            />
            <Commentary
                avatar={"../gray-img.png"}
                author={"Author"}
                body={body}
            />
        </>
    );
};

export default Commentaries;