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
                    <Button style={{marginLeft: "5px"}}>
                        Замовити
                    </Button>
                </div>
            </div>
            <div className="merch__description">
                <h4>Загальні характеристики</h4>
                <ul className="description__chars">
                    <li className="char__row">
                        <div className="char__name">
                            Виробник
                        </div>
                        <div className="char__body">
                            Агагагага
                        </div>
                    </li>
                    <li className="char__row">
                        <div className="char__name">
                            Ще щось
                        </div>
                        <div className="char__body">
                            Там щось
                        </div>
                    </li>
                </ul>
                <p className="description__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non ratione vitae, natus id quidem dignissimos eligendi, aspernatur doloribus
                    autem adipisci eaque! Amet voluptatum fuga cumque necessitatibus dicta praesentium ipsum perferendis quibusdam enim, neque molestiae qui unde ut
                    veritatis nulla sed recusandae in temporibus commodi nemo fugiat? Velit alias pariatur incidunt iste ut adipisci provident repudiandae at aut laudantium,
                    sapiente omnis architecto recusandae sequi ratione aliquam molestiae error numquam consequuntur unde, deleniti non! A repellat architecto rem porro perferendis
                    corporis dolores quidem dolore impedit, distinctio dicta labore soluta, fuga pariatur inventore earum dolorem. Nemo eveniet quia, non molestias eaque sunt.
                </p>
            </div>
            <div className="merch__commentaries">
                <div className="merch__commentary">
                    <h4 className="commentary__author">
                        I`m author!
                    </h4>
                    <p className="commentary__body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non ratione vitae, natus id quidem dignissimos eligendi, aspernatur doloribus
                        autem adipisci eaque! Amet voluptatum fuga cumque necessitatibus dicta praesentium ipsum perferendis quibusdam enim, neque molestiae qui unde ut
                        veritatis nulla sed recusandae in temporibus commodi nemo fugiat? Velit alias pariatur incidunt iste ut adipisci provident repudiandae at aut laudantium,
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Merch;