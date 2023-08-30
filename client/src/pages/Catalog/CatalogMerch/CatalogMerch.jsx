import { MERCH_PAGE_ROUTE } from "../../../utils/consts";
import { Link } from "react-router-dom";
import styles from "./catalog-merch.module.css";

const CatalogMerch = ({ name, status, price, category, company, id }) => {

    return (
        <div className={styles.merch}>
            <img
                className={styles.image}
                src="./gray-img.png"
                alt={name}
            />
            <h3 className={styles.name}>
                {name}
            </h3>
            <div className={styles.info}>
                <div
                    className={status
                        ? [styles.status, styles.greenStatus].join(" ")
                        : [styles.status, styles.redStatus].join(" ")
                    }
                >
                    {status
                        ? "В наявності"
                        : "Немає в наявності"
                    }
                </div>
                <div className={styles.price}>
                    {price}грн
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.category}>
                    {category}
                </div>
                <div className={styles.company}>
                    {company}
                </div>
            </div>
            <Link className={styles.viewButton} to={MERCH_PAGE_ROUTE + `/${id}`}>
                Переглянути
            </Link>
        </div>
    );
};

export default CatalogMerch;