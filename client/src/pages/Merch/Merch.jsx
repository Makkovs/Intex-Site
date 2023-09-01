import Button from "../../components/UI/Button/Button";
import Commentaries from "./Commentaries/Commentaries";
import MerchGalery from "./MerchGalery/MerchGalery";
import MerchInfo from "./MerchInfo/MerchInfo";
import styles from "./merch.module.css";

const Merch = () => {

    const testVariable = true

    return (
        <main className={styles.content}>
            <div className={styles.information}>
                <MerchGalery />
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
            <MerchInfo />
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
            <Commentaries />
        </main>
    );
};

export default Merch;