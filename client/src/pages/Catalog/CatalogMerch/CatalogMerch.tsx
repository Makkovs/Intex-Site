import { FC } from "react";
import { Link } from "react-router-dom";

import { MERCH_PAGE_ROUTE } from "../../../utils/consts";

import Button from "../../../components/UI/Button/Button";

import styles from "./catalog-merch.module.scss";

interface CatalogMerchProps {
    name: string;
    status: boolean;
    price: number;
    categoryName: string;
    companyName: string;
    id: number;
};

const CatalogMerch: FC<CatalogMerchProps> = ({ name, status, price, categoryName, companyName, id }) => {

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
                    {categoryName}
                </div>
                <div className={styles.company}>
                    {companyName}
                </div>
            </div>
            <Link to={MERCH_PAGE_ROUTE + `/${id}`}>
                <Button margin={"20px 0px 0px 0px"}>
                    Переглянути
                </Button>
            </Link>
        </div>
    );
};

export default CatalogMerch;