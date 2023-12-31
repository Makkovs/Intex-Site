import { FC } from "react";
import { ICharacteristic } from "../../../types/merchTypes";

import styles from "./merch-info.module.scss";

interface MerchInfoProps {
    characteristics: ICharacteristic[];
    category: string;
    company: string;
};

const MerchInfo: FC<MerchInfoProps> = ({ characteristics, category, company }) => {

    return (
        <ul className={styles.informationBlock}>
            <h3>Загальні характеристики</h3>
            <li className={styles.row}>
                <div className={styles.charName}>
                    Категорія:
                </div>
                <div className={styles.charBody}>
                    {category}
                </div>
            </li>
            <li className={styles.row}>
                <div className={styles.charName}>
                    Виробник:
                </div>
                <div className={styles.charBody}>
                    {company}
                </div>
            </li>
            {characteristics.map(characteristic =>
                <li className={styles.row} key={characteristic.id}>
                    <div className={styles.charName}>
                        {characteristic.name}
                    </div>
                    <div className={styles.charBody}>
                        {characteristic.body}
                    </div>
                </li>
            )}
        </ul>
    );
};

export default MerchInfo;