import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { BASKET_PAGE_ROUTE } from "../../../utils/consts";

import AddMerchModal from "../AddMerchModal/AddMerchModal";
import AddCategoryModal from "../AddCategoryModal/AddCategoryModal";
import AddCompanyModal from "../AddCompanyModal/AddCompanyModal";
import Button from "../../../components/UI/Button/Button";

import styles from "./catalog-nav.module.css";

const CatalogNav = ({ categories, companies }) => {

    const user = useSelector(state => state.user.user);
    const [merchVisible, setMerchVisible] = useState(false);
    const [categoryVisible, setCategoryVisible] = useState(false);
    const [companyVisible, setCompanyVisible] = useState(false);

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
            {user.role === "ADMIN" &&
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
                />
            </div>
        </nav>
    );
};

export default CatalogNav;