import { useEffect, useState } from "react";
import { fetchMerch } from "../../http/merchAPI";

import CatalogNav from "./CatalogNav/CatalogNav";
import CatalogAside from "./CatalogAside/CatalogAside";
import CatalogMerch from "./CatalogMerch/CatalogMerch";
import Loading from "../../components/UI/Loading/Loading";

import styles from "./catalog.module.css";

const CatalogPage = () => {
    const [merch, setMerch] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMerch(100, 1, null, null).then(data => { //limit, page, categoryId, companyId
            console.log(data.merch.rows, data.merch);
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
                    <CatalogAside />
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