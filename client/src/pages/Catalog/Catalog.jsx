import CatalogNav from "./CatalogNav/CatalogNav";
import CatalogAside from "./CatalogAside/CatalogAside";
import CatalogMerch from "./CatalogMerch/CatalogMerch";

import styles from "./catalog.module.css";

const CatalogPage = () => {
    return (
        <main className={styles.catalog}>
            <CatalogNav />
            <article className={styles.content}>
                <CatalogAside />
                <section className={styles.merchCatalog}>
                    <CatalogMerch
                        name={"Title"}
                        status={true}
                        price={199}
                        category={"Категорія"}
                        company={"Виробник"}
                        id={0}
                    />
                    <CatalogMerch
                        name={"Title"}
                        status={true}
                        price={199}
                        category={"Категорія"}
                        company={"Виробник"}
                        id={0}
                    />
                    <CatalogMerch
                        name={"Title"}
                        status={false}
                        price={199}
                        category={"Категорія"}
                        company={"Виробник"}
                        id={0}
                    />
                    <CatalogMerch
                        name={"Title"}
                        status={true}
                        price={199}
                        category={"Категорія"}
                        company={"Виробник"}
                        id={0}
                    />
                    <CatalogMerch
                        name={"Title"}
                        status={true}
                        price={199}
                        category={"Категорія"}
                        company={"Виробник"}
                        id={0}
                    />
                    <CatalogMerch
                        name={"Title"}
                        status={false}
                        price={199}
                        category={"Категорія"}
                        company={"Виробник"}
                        id={0}
                    />
                    <CatalogMerch
                        name={"Title"}
                        status={true}
                        price={199}
                        category={"Категорія"}
                        company={"Виробник"}
                        id={0}
                    />
                </section>
            </article>
        </main>
    );
};

export default CatalogPage;