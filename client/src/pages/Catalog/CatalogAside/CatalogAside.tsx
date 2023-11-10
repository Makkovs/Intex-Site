import { FC, useState } from "react";

import { ICategory, ICompany } from "../../../types/merchTypes";

import styles from "./catalog-aside.module.scss";
import AsideBody from "./AsideBody/AsideBody";
import Modal from "../../../components/UI/Modal/Modal";

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

    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            <label className={styles.asideButton}>
                <input type="checkbox" onClick={() => setVisible(true)} />
                <span className={styles.asideButton_line}></span>
                <span className={styles.asideButton_line}></span>
                <span className={styles.asideButton_line}></span>
            </label>
            <aside className={styles.filtersPC}>
                <AsideBody
                    categories={categories}
                    companies={companies}
                    categoryFilters={categoryFilters}
                    setCategoryFilters={setCategoryFilters}
                    companyFilters={companyFilters}
                    setCompanyFilters={setCompanyFilters}
                />
            </aside>
            <aside className={styles.filtersPhone}>
                <Modal visible={visible} setVisible={setVisible}>
                    <AsideBody
                        categories={categories}
                        companies={companies}
                        categoryFilters={categoryFilters}
                        setCategoryFilters={setCategoryFilters}
                        companyFilters={companyFilters}
                        setCompanyFilters={setCompanyFilters}
                    />
                </Modal>
            </aside>
        </>
    );
};

export default CatalogAside;