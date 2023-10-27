import { FC } from "react";

import styles from "./merch-galery.module.scss";
import { REACT_APP_API_URL } from "../../../utils/consts";

interface MerchGaleryProps {
    img: string | null;
};

const MerchGalery: FC<MerchGaleryProps> = ({img}) => {
    //It's going be bigger x2
    return (
        <div className={styles.galery}>
            {img
                ?
                <img
                    className={styles.slide}
                    src={REACT_APP_API_URL + img}
                    alt={"slide"}
                />
                :
                <img
                    className={styles.slide}
                    src="./gray-img.png"
                    alt={"slide"}
                />
            }
        </div>
    );
};

export default MerchGalery