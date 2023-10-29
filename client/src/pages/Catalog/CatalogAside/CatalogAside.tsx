import { FC } from "react";

import { ICategory, ICompany } from "../../../types/merchTypes";

import OrbCheckbox from "../../../components/UI/OrbCheckbox/OrbCheckbox";

import styles from "./catalog-aside.module.scss";

interface CatalogAsideProps {
    categories: ICategory[];
    companies: ICompany[];
    categoryFilters: number[];
    companyFilters: number[];
    setCategoryFilters: (newFilters: number[]) => void;
    setCompanyFilters: (newFilters: number[]) => void;
};

const CatalogAside: FC<CatalogAsideProps> = ({
    categories, companies, categoryFilters,
    setCategoryFilters, companyFilters, setCompanyFilters
}) => {

    const addCategoryFilter = (categoryId: number, checked: boolean) => {
        if (checked) {
            setCategoryFilters([...categoryFilters, categoryId]);
        }else {
            setCategoryFilters(categoryFilters.filter((id: number) => id !== categoryId));
        };
    };

    const addCompanyFilter = (companyId: number, checked: boolean) => {
        if (checked) {
            setCompanyFilters([...companyFilters, companyId]);
        }else {
            setCompanyFilters(companyFilters.filter(id => id !== companyId));
        };
    };

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
                                <OrbCheckbox text={category.name} onClick={(e) => addCategoryFilter(category.id, (e.target as HTMLInputElement).checked)} />
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
                                <OrbCheckbox text={company.name} onClick={(e) => addCompanyFilter(company.id, (e.target as HTMLInputElement).checked)} />
                            </span>
                        )}
                    </>
                }
            </div>
        </aside>
    );
};

export default CatalogAside;