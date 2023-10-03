import { useEffect, useState } from "react";

import { fetchMerch } from "../../http/merchAPI";
import { fetchCategories } from "../../http/categoryAPI";
import { fetchCompanies } from "../../http/companyAPI";

import CatalogNav from "./CatalogNav/CatalogNav";
import CatalogAside from "./CatalogAside/CatalogAside";
import CatalogMerch from "./CatalogMerch/CatalogMerch";
import Loading from "../../components/UI/Loading/Loading";

import styles from "./catalog.module.css";

const CatalogPage = () => {
    const [merch, setMerch] = useState([]);
    const [filteredMerch, setFilteredMerch] = useState([]);
    const [categories, setCategories] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchFilter, setSearchFilter] = useState("");
    const [priceSort, setPriceSort] = useState("CHEAP");
    const [categoryFilters, setCategoryFilters] = useState([]);
    const [companyFilters, setCompanyFilters] = useState([]);

    useEffect(() => {
        fetchCategories().then(data => {
            setCategories(data.categories.rows);
        });

        fetchCompanies().then(data => {
            setCompanies(data.companies.rows);
        });

        fetchMerch(100, 1).then(data => {
            setMerch(data.merch.rows);
            setFilteredMerch(data.merch.rows);
        }).finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        setFilteredMerch(
            searchFilter.length > 0
                ? merch.filter(merch => merch.name.toLowerCase().includes(searchFilter.toLowerCase()))
                    .sort((a, b) => a.price < b.price ? 1 : -1)
                : merch.sort((a, b) => a.price < b.price ? 1 : -1)
        );
        if (categoryFilters.length > 0) {
            setFilteredMerch(
                (state) =>
                    state.filter(merch => categoryFilters.includes(merch.categoryId))
            );
        }
        if (companyFilters.length > 0) {
            setFilteredMerch(
                (state) =>
                    state.filter(merch => companyFilters.includes(merch.companyId))
            );
        }
        if (priceSort == "CHEAP") {
            setFilteredMerch(
                (state) =>
                    state.sort((a, b) => a.price < b.price ? 1 : -1)
            );
        }else if (priceSort == "EXPANSIVE") {
            setFilteredMerch(
                (state) =>
                    state.sort((a, b) => a.price > b.price ? 1 : -1)
            );
        };
    }, [searchFilter, priceSort, categoryFilters, companyFilters]);

    return (
        <main className={styles.catalog}>
            <button onClick={() => console.log(categories.find(category => category.id === 2).name)}></button>
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
                        <>Ми не знайшли жодного товару . . .</>
                        :
                        <section className={styles.merchCatalog}>
                            {filteredMerch.map((merch) =>
                                <CatalogMerch
                                    name={merch.name}
                                    status={merch.status}
                                    price={merch.price}
                                    category={`Категорія: ${
                                        categories.find(category => category.id === merch.categoryId) 
                                        ? categories.find(category => category.id === merch.categoryId).name 
                                        : "-"
                                    }`}
                                    company={`Виробник: ${
                                        companies.find(company => company.id === merch.companyId) 
                                        ? companies.find(company => company.id === merch.companyId).name 
                                        : "-"
                                    }`}
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