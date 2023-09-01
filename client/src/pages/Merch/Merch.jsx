import Button from "../../components/UI/Button/Button";
import styles from "./merch.module.css";

const Merch = () => {

    const testVariable = true

    return (
        <main className={styles.content}>
            <div className={styles.information}>
                <div className={styles.galery}>
                    <img
                        className={styles.slide}
                        src="../gray-img.png"
                        alt=""
                    />
                </div>
                <div className={styles.generalInformation}>
                    <h1 className={styles.name}>Title</h1>
                    <span
                        className={testVariable
                            ? styles.greenStatus
                            : styles.redStatus
                        }
                    >
                        В наявності
                    </span>
                    <h1 className={styles.price}>
                        500грн
                    </h1>
                    <Button>
                        Додати у кошик
                    </Button>
                    <Button style={{ marginLeft: "5px" }}>
                        Замовити
                    </Button>
                </div>
            </div>
            <ul className={styles.informationBlock}>
                <h3>Загальні характеристики</h3>
                <li className={styles.row}>
                    <div className={styles.charName}>
                        Виробник:
                    </div>
                    <div className={styles.charBody}>
                        Агагагага
                    </div>
                </li>
                <li className={styles.row}>
                    <div className={styles.charName}>
                        Ще щось:
                    </div>
                    <div className={styles.charBody}>
                        Там щось
                    </div>
                </li>
            </ul>
            <div className={styles.informationBlock}>
                <h3>Опис</h3>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non ratione vitae, natus id quidem dignissimos eligendi, aspernatur doloribus
                    autem adipisci eaque! Amet voluptatum fuga cumque necessitatibus dicta praesentium ipsum perferendis quibusdam enim, neque molestiae qui unde ut
                    veritatis nulla sed recusandae in temporibus commodi nemo fugiat? Velit alias pariatur incidunt iste ut adipisci provident repudiandae at aut laudantium,
                    sapiente omnis architecto recusandae sequi ratione aliquam molestiae error numquam consequuntur unde, deleniti non! A repellat architecto rem porro perferendis
                    corporis dolores quidem dolore impedit, distinctio dicta labore soluta, fuga pariatur inventore earum dolorem. Nemo eveniet quia, non molestias eaque sunt.
                </p>
            </div>
            <div className={styles.informationBlock}>
                <h3>Коментарі</h3>
                <p className={styles.addCommentaryInput} contentEditable suppressContentEditableWarning={true}>Коментар</p>
                <Button>
                    Додати
                </Button>
            </div>
            <div className={styles.commentary}>
                <img className={styles.avatar} src="../gray-img.png" alt="avatar" />
                <div className={styles.commentaryInfo}>
                    <h4 className={styles.authorName}>
                        I'm author!
                    </h4>
                    <p className="commentary__body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non ratione vitae, natus id quidem dignissimos eligendi, aspernatur doloribus
                        autem adipisci eaque! Amet voluptatum fuga cumque necessitatibus dicta praesentium ipsum perferendis quibusdam enim, neque molestiae qui unde ut
                        veritatis nulla sed recusandae in temporibus commodi nemo fugiat? Velit alias pariatur incidunt iste ut adipisci provident repudiandae at aut laudantium.
                    </p>
                </div>
            </div>
            <div className={styles.commentary}>
                <img className={styles.avatar} src="../gray-img.png" alt="avatar" />
                <div className={styles.commentaryInfo}>
                    <h4 className={styles.authorName}>
                        I'm author!
                    </h4>
                    <p className="commentary__body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non ratione vitae, natus id quidem dignissimos eligendi, aspernatur doloribus
                        autem adipisci eaque! Amet voluptatum fuga cumque necessitatibus dicta praesentium ipsum perferendis quibusdam enim, neque molestiae qui unde ut
                        veritatis nulla sed recusandae in temporibus commodi nemo fugiat? Velit alias pariatur incidunt iste ut adipisci provident repudiandae at aut laudantium.
                    </p>
                </div>
            </div>
            <div className={styles.commentary}>
                <img className={styles.avatar} src="../gray-img.png" alt="avatar" />
                <div className={styles.commentaryInfo}>
                    <h4 className={styles.authorName}>
                        I'm author!
                    </h4>
                    <p className="commentary__body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non ratione vitae, natus id quidem dignissimos eligendi, aspernatur doloribus
                        autem adipisci eaque! Amet voluptatum fuga cumque necessitatibus dicta praesentium ipsum perferendis quibusdam enim, neque molestiae qui unde ut
                        veritatis nulla sed recusandae in temporibus commodi nemo fugiat? Velit alias pariatur incidunt iste ut adipisci provident repudiandae at aut laudantium.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Merch;