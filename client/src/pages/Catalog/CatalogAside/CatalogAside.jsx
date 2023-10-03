import OrbCheckbox from "../../../components/UI/OrbCheckbox/OrbCheckbox";

import styles from "./catalog-aside.module.css";

const CatalogAside = ({ categories, companies, categoryFilters, setCategoryFilters, companyFilters, setCompanyFilters }) => {

    const addCategoryFilter = (categoryId, checked) => {
        if (checked) {
            setCategoryFilters([...categoryFilters, categoryId]);
        }else{
            setCategoryFilters(categoryFilters.filter(id => id != categoryId));
        };
    };

    const addCompanyFilter = (companyId, checked) => {
        if (checked) {
            setCompanyFilters([...companyFilters, companyId]);
        }else{
            setCompanyFilters(companyFilters.filter(id => id != companyId));
        };
    }

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
                                <OrbCheckbox text={category.name} onClick={(e) => addCategoryFilter(category.id, e.target.checked)}/>
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
                                <OrbCheckbox text={company.name} onClick={(e) => addCompanyFilter(company.id, e.target.checked)}/>
                            </span>
                        )}
                    </>
                }
            </div>
        </aside>
    );
};

export default CatalogAside;