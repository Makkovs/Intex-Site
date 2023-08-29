import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

import "./catalog.css";
import OrbCheckbox from "../../components/UI/OrbCheckbox/OrbCheckbox";

const CatalogPage = () => {

    return (
        <main className="catalog">
            <nav className="catalog__navigation">
                <input
                    className="navigation__radio"
                    name="sort-type"
                    id="cheap"
                    type="radio"
                    defaultChecked
                />
                <input
                    className="navigation__radio"
                    name="sort-type"
                    id="expansive"
                    type="radio"
                />
                <div className="sort-buttons">
                    <label className="sort-button sort-button--left" htmlFor="cheap">
                        Дешевше
                    </label>
                    <label className="sort-button sort-button--right" htmlFor="expansive">
                        Дорожче
                    </label>
                </div>
                <input className="sort-search" type="text" placeholder="Search" />
            </nav>
            <article className="catalog__content">
                <aside className="catalog__filters">
                    <div className="categories">
                        <h3 className="filter__title">Категорії</h3>
                        <span className="catalog__filter">
                            <OrbCheckbox text={"filter"} />
                        </span><br />
                        <span className="catalog__filter">
                            <OrbCheckbox text={"filter"} />
                        </span><br />
                        <span className="catalog__filter">
                            <OrbCheckbox text={"filter"} />
                        </span><br />
                        <span className="catalog__filter">
                            <OrbCheckbox text={"filter"} />
                        </span><br />
                        <span className="catalog__filter">
                            <OrbCheckbox text={"filter"} />
                        </span><br />
                    </div>
                    <div className="companies">
                        <h3 className="filter__title">Виробники</h3>
                        <span className="catalog__filter">
                            <OrbCheckbox text={"filter"} />
                        </span><br />
                        <span className="catalog__filter">
                            <OrbCheckbox text={"filter"} />
                        </span><br />
                        <span className="catalog__filter">
                            <OrbCheckbox text={"filter"} />
                        </span><br />
                        <span className="catalog__filter">
                            <OrbCheckbox text={"filter"} />
                        </span><br />
                        <span className="catalog__filter">
                            <OrbCheckbox text={"filter"} />
                        </span><br />
                    </div>
                </aside>
                <section className="catalog__merch">
                    <div className="merch">
                        <img className="merch__img" src="./gray-img.png" alt="" />
                        <h3 className="merch__name">Title</h3>
                        <div className="merch__info">
                            <div className="merch__status merch__status--green">
                                В наявності
                            </div>
                            <div className="merch__price">
                                999$
                            </div>
                        </div>
                        <div className="merch__info">
                            <div className="merch__category">
                                Зошит
                            </div>
                            <div className="merch__company">
                                Виробник
                            </div>
                        </div>
                        <Link className="merch__view-button">
                            Переглянути
                        </Link>
                    </div>
                    <div className="merch">
                        <img className="merch__img" src="./gray-img.png" alt="" />
                        <h3 className="merch__name">Title</h3>
                        <div className="merch__info">
                            <div className="merch__status merch__status--green">
                                В наявності
                            </div>
                            <div className="merch__price">
                                999$
                            </div>
                        </div>
                        <div className="merch__info">
                            <div className="merch__category">
                                Зошит
                            </div>
                            <div className="merch__company">
                                Виробник
                            </div>
                        </div>
                        <Link className="merch__view-button">
                            Переглянути
                        </Link>
                    </div>
                    <div className="merch">
                        <img className="merch__img" src="./gray-img.png" alt="" />
                        <h3 className="merch__name">Title</h3>
                        <div className="merch__info">
                            <div className="merch__status merch__status--red">
                                Немає в наявності
                            </div>
                            <div className="merch__price">
                                999$
                            </div>
                        </div>
                        <div className="merch__info">
                            <div className="merch__category">
                                Зошит
                            </div>
                            <div className="merch__company">
                                Виробник
                            </div>
                        </div>
                        <Link className="merch__view-button">
                            Переглянути
                        </Link>
                    </div>
                </section>
            </article>
        </main>
    );
};

export default CatalogPage;