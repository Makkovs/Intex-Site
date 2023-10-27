import { FC, useState } from "react";
import { Link } from "react-router-dom";

import { ICategory, ICompany } from "../../../types/merchTypes";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { BASKET_PAGE_ROUTE } from "../../../utils/consts";

import AddMerchModal from "../AddMerchModal/AddMerchModal";
import AddCategoryModal from "../AddCategoryModal/AddCategoryModal";
import AddCompanyModal from "../AddCompanyModal/AddCompanyModal";

import Button from "../../../components/UI/Button/Button";

import styles from "./catalog-nav.module.scss";

interface CatalogNavProps {
    categories: ICategory[];
    companies: ICompany[];
    searchFilter: string;
    setSearchFilter: (sort: string) => void;
    setPriceSort: (sort: string) => void;
}

const CatalogNav: FC<CatalogNavProps> = ({ categories, companies, searchFilter, setSearchFilter, setPriceSort }) => {

    const user = useTypedSelector(state => state.userReducer.user);

    const [merchVisible, setMerchVisible] = useState<boolean>(false);
    const [categoryVisible, setCategoryVisible] = useState<boolean>(false);
    const [companyVisible, setCompanyVisible] = useState<boolean>(false);

    return (
        <nav className={styles.navigation}>
            <input
                className={styles.radio}
                name="sort-type"
                id={styles["cheap"]}
                type="radio"
                value={"CHEAP"}
                onChange={(e) => setPriceSort(e.target.value)}
            />
            <input
                className={styles.radio}
                name="sort-type"
                id={styles["expansive"]}
                type="radio"
                value={"EXPANSIVE"}
                onChange={(e) => setPriceSort(e.target.value)}
            />
            <div className={styles.sortButtons}>
                <label className={[styles.sortButton, styles.leftButton].join(" ")} htmlFor={styles["cheap"]}>
                    Дешевше
                </label>
                <label className={[styles.sortButton, styles.rightButton].join(" ")} htmlFor={styles["expansive"]}>
                    Дорожче
                </label>
            </div>
            {user?.role === "ADMIN" &&
                <>
                    <Button onClick={() => setMerchVisible(true)}>
                        Додати товар
                    </Button>
                    <Button onClick={() => setCategoryVisible(true)}>
                        Додати категорію
                    </Button>
                    <Button onClick={() => setCompanyVisible(true)}>
                        Додати виробника
                    </Button>
                </>
            }
            {merchVisible &&
                <AddMerchModal
                    visible={merchVisible}
                    setVisible={setMerchVisible}
                    categories={categories}
                    companies={companies}
                />
            }
            {categoryVisible &&
                <AddCategoryModal
                    visible={categoryVisible}
                    setVisible={setCategoryVisible}
                />
            }
            {companyVisible &&
                <AddCompanyModal
                    visible={companyVisible}
                    setVisible={setCompanyVisible}
                />
            }
            <div className={styles.search}>
                <Link to={BASKET_PAGE_ROUTE}>
                    <img className={styles.basket} src="./basket.png"></img>
                </Link>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                />
            </div>
        </nav>
    );
};

export default CatalogNav;