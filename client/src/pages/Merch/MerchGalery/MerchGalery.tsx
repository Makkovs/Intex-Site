import { FC } from "react";

import styles from "./merch-galery.module.scss";

const MerchGalery: FC = () => {
    //It's going be bigger x2
    return (
        <div className={styles.galery}>
            <img
                className={styles.slide}
                src="../gray-img.png"
                alt=""
            />
        </div>
    );
};

export default MerchGalery