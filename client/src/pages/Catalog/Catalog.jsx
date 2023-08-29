import "./catalog.css";

import CatalogNav from "./CatalogNav/CatalogNav";
import CatalogAside from "./CatalogAside/CatalogAside";
import CatalogMerch from "./CatalogMerch/CatalogMerch";

const CatalogPage = () => {
    return (
        <main className="catalog">
            <CatalogNav />
            <article className="catalog__content">
                <CatalogAside />
                <section className="catalog__merch">
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
 
export default  CatalogPage;