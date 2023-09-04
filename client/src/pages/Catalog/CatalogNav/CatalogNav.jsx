import { Link } from "react-router-dom";
import styles from "./catalog-nav.module.css";
import { BASKET_PAGE_ROUTE } from "../../../utils/consts";

const CatalogNav = () => {

    return (
        <nav className={styles.navigation}>
            <input
                className={styles.radio}
                name="sort-type"
                id={styles["cheap"]}
                type="radio"
                defaultChecked
            />
            <input
                className={styles.radio}
                name="sort-type"
                id={styles["expansive"]}
                type="radio"
            />
            <div className={styles.sortButtons}>
                <label className={[styles.sortButton, styles.leftButton].join(" ")} htmlFor={styles["cheap"]}>
                    Дешевше
                </label>
                <label className={[styles.sortButton, styles.rightButton].join(" ")} htmlFor={styles["expansive"]}>
                    Дорожче
                </label>
            </div>
            <div className={styles.search}>
                <Link to={BASKET_PAGE_ROUTE}>
                    <img className={styles.basket} src="./basket.png"></img>
                </Link>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search"
                />
            </div>
        </nav>
    );
};

export default CatalogNav;