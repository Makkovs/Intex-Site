import { useEffect, useState } from "react";
import { fetchMerch } from "../../http/merchAPI";

import CatalogNav from "./CatalogNav/CatalogNav";
import CatalogAside from "./CatalogAside/CatalogAside";
import CatalogMerch from "./CatalogMerch/CatalogMerch";
import Loading from "../../components/UI/Loading/Loading";

import styles from "./catalog.module.css";
import { fetchCategories } from "../../http/categoryAPI";
import { fetchCompanies } from "../../http/companyAPI";

const CatalogPage = () => {
    const [merch, setMerch] = useState([]);
    const [categories, setCategories] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCategories().then(data => {
            setCategories(data.categories.rows);
        });

        fetchCompanies().then(data => {
            setCompanies(data.companies.rows);
        });

        fetchMerch(100, 1, null, null).then(data => { //limit, page, categoryId, companyId
            setMerch(data.merch.rows);
        }).finally(() => setLoading(false));
    }, []);

    return (
        <main className={styles.catalog}>
            <CatalogNav />
            {loading
                ?
                <Loading loading={loading} />
                :
                <article className={styles.content}>
                    <CatalogAside
                        categories={categories}
                        companies={companies}
                    />
                    {merch.length < 1 && !loading
                        ?
                        <>Ми не знайшли жодного товару . . .</>
                        :
                        <section className={styles.merchCatalog}>
                            {merch.map((merch) =>
                                <CatalogMerch
                                    name={merch.name}
                                    status={merch.status}
                                    price={merch.price}
                                    category={"Категорія"}
                                    company={"Виробник"}
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