import { FC, useEffect, useState } from "react";

import { ICategory, ICompany, IMerch } from "../../types/merchTypes";

import { fetchCategories } from "../../http/categoryAPI";
import { fetchCompanies } from "../../http/companyAPI";
import { fetchMerch } from "../../http/merchAPI";
import useFilteredMerch from "../../hooks/useFilteredMerch";

import Loading from "../../components/UI/Loading/Loading";
import CatalogNav from "./CatalogNav/CatalogNav";
import CatalogAside from "./CatalogAside/CatalogAside";
import CatalogMerch from "./CatalogMerch/CatalogMerch";

import styles from "./catalog.module.scss";

const CatalogPage: FC = () => {

    const [merch, setMerch] = useState<IMerch[]>([]);
    const [filteredMerch, setFilteredMerch] = useState<IMerch[]>([]);

    const [categories, setCategories] = useState<ICategory[]>([]);
    const [companies, setCompanies] = useState<ICompany[]>([]);

    const [searchFilter, setSearchFilter] = useState<string>("");
    const [priceSort, setPriceSort] = useState<string>("");
    const [categoryFilters, setCategoryFilters] = useState<number[]>([]);
    const [companyFilters, setCompanyFilters] = useState<number[]>([]);

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchCategories().then(data => {
            setCategories(data.categories.rows);
        });

        fetchCompanies().then(data => {
            setCompanies(data.companies.rows);
        });

        fetchMerch(100, 1, null, null).then(data => {
            setMerch(data.merch.rows);
            setFilteredMerch(data.merch.rows);
        }).finally(() => setLoading(false));
    }, []);

    useFilteredMerch(searchFilter, categoryFilters, companyFilters, merch, priceSort, setFilteredMerch);


    return (
        <main className={styles.catalog}>
            <CatalogNav
                categories={categories}
                companies={companies}
                searchFilter={searchFilter}
                setSearchFilter={setSearchFilter}
                setPriceSort={setPriceSort}
            />
            {loading
                ?
                <Loading loading={loading} />
                :
                <article className={styles.content}>
                    <CatalogAside
                        categories={categories}
                        companies={companies}
                        categoryFilters={categoryFilters}
                        setCategoryFilters={setCategoryFilters}
                        companyFilters={companyFilters}
                        setCompanyFilters={setCompanyFilters}
                    />
                    {filteredMerch.length < 1 && !loading
                        ?
                        <span className={styles.notFound}>Ми не знайшли жодного товару . . .</span>
                        :
                        <section className={styles.merchCatalog}>
                            {filteredMerch.map((merch) =>
                                <CatalogMerch
                                    name={merch.name}
                                    status={merch.status}
                                    price={merch.price}
                                    categoryName={`Категорія: ${categories && categories.find(category => category.id === merch.categoryId)
                                        ? categories.find(category => category.id === merch.categoryId)?.name || "-"
                                        : "-"
                                        }`}
                                    companyName={`Виробник: ${companies.find(company => company.id === merch.companyId)
                                        ? companies.find(company => company.id === merch.companyId)?.name || "-"
                                        : "-"
                                        }`}
                                    img={merch.img}
                                    id={merch.id}
                                    key={merch.id}
                                />
                            )}
                        </section>
                    }
                </article>
            }
        </main>
    );
};

export default CatalogPage;