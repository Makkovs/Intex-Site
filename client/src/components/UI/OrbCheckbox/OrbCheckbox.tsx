import { FC, MouseEventHandler } from "react";
import styles from "./orb-checkbox.module.scss";

interface OrbCheckboxProps {
    text?: string;
    onClick?: MouseEventHandler;
};

const OrbCheckbox: FC<OrbCheckboxProps> = ({text, onClick}) => {

    return (
        <label className={styles.container}>
            <input type="checkbox" onClick={onClick}/>
            {
                text && <span className={styles.text}>{text}</span>
            }
            <span className={styles.checkmark}></span>
        </label>
    );
};

export default OrbCheckbox;