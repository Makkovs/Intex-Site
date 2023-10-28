import { FC } from "react";
import { Link } from "react-router-dom";

import { MERCH_PAGE_ROUTE, REACT_APP_API_URL } from "../../../utils/consts";

import Button from "../../../components/UI/Button/Button";

import styles from "./catalog-merch.module.scss";

interface CatalogMerchProps {
    name: string;
    status: boolean;
    price: number;
    img: string | null;
    categoryName: string;
    companyName: string;
    id: number;
};

const CatalogMerch: FC<CatalogMerchProps> = ({ name, status, price, img, categoryName, companyName, id }) => {

    let firstImg = null;
    if (img){
        const parsed = JSON.parse(img);
        if (Array.isArray(parsed)){
            firstImg = parsed[0];
        };
    };

    return (
        <div className={styles.merch}>
            {firstImg
                ?
                <img
                    className={styles.image}
                    src={REACT_APP_API_URL + firstImg}
                    alt={name}
                />
                :
                <img
                    className={styles.image}
                    src="./gray-img.png"
                    alt={name}
                />
            }
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