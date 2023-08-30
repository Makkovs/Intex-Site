import OrbCheckbox from "../../../components/UI/OrbCheckbox/OrbCheckbox";
import styles from "./catalog-aside.module.css";

const CatalogAside = () => {

    return (
        <aside className={styles.filters}>
            <div>
                <h3 className={styles.title}>
                    Категорії
                </h3>
                <span className={styles.filter}>
                    <OrbCheckbox text={"filter"} />
                </span><br />
                <span className={styles.filter}>
                    <OrbCheckbox text={"filter"} />
                </span><br />
                <span className={styles.filter}>
                    <OrbCheckbox text={"filter"} />
                </span><br />
                <span className={styles.filter}>
                    <OrbCheckbox text={"filter"} />
                </span><br />
                <span className={styles.filter}>
                    <OrbCheckbox text={"filter"} />
                </span><br />
            </div>
            <div>
                <h3 className={styles.title}>
                    Виробники
                </h3>
                <span className={styles.filter}>
                    <OrbCheckbox text={"filter"} />
                </span><br />
                <span className={styles.filter}>
                    <OrbCheckbox text={"filter"} />
                </span><br />
                <span className={styles.filter}>
                    <OrbCheckbox text={"filter"} />
                </span><br />
                <span className={styles.filter}>
                    <OrbCheckbox text={"filter"} />
                </span><br />
                <span className={styles.filter}>
                    <OrbCheckbox text={"filter"} />
                </span><br />
            </div>
        </aside>
    );
};

export default CatalogAside;