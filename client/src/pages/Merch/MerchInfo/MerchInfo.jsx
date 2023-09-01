import styles from "./merch-info.module.css";

const MerchInfo = () => {
    return (
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
    );
};

export default MerchInfo;