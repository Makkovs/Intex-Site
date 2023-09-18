import OrbCheckbox from "../../../components/UI/OrbCheckbox/OrbCheckbox";
import styles from "./catalog-aside.module.css";

const CatalogAside = ({ categories, companies }) => {

    return (
        <aside className={styles.filters}>
            <div>
                <h3 className={styles.title}>
                    Категорії
                </h3>
                {categories.length < 1
                    ?
                    <>none</>
                    :
                    <>
                        {categories.map((category) =>
                            <span className={styles.filter} key={category.id}>
                                <OrbCheckbox text={category.name} />
                            </span>
                        )}
                    </>
                }
            </div>
            <div>
                <h3 className={styles.title}>
                    Виробники
                </h3>
                {companies.length < 1
                    ?
                    <>none</>
                    :
                    <>
                        {companies.map((company) =>
                            <span className={styles.filter} key={company.id}>
                                <OrbCheckbox text={company.name} />
                            </span>
                        )}
                    </>
                }
            </div>
        </aside>
    );
};

export default CatalogAside;