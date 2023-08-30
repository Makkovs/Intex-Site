import styles from "./catalog-nav.module.css";

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
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Search"
            />
        </nav>
    );
};

export default CatalogNav;