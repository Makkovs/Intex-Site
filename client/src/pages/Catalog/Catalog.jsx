import { Link } from "react-router-dom";

const CatalogPage = () => {

    return (
        <main className="catalog">
            <nav className="catalog__navigation">
                <input
                    className="navigation__radio"
                    name="sort-type"
                    id="expansive"
                    type="radio"
                    defaultChecked
                />
                <input
                    className="navigation__radio"
                    name="sort-type"
                    id="cheap"
                    type="radio"
                />
                <div className="sort-buttons">
                    <label className="sort-button sort-button--btn1" htmlFor="expansive"></label>
                    <label className="sort-button sort-button--btn2" htmlFor="cheap"></label>
                </div>
            </nav>
            <aside className="catalog__filters">
                <div className="categories">
                    <h3 className="filter__title">Категорії</h3>
                    <div className="catalog__filter">Filter</div>
                    <div className="catalog__filter">Filter</div>
                    <div className="catalog__filter">Filter</div>
                    <div className="catalog__filter">Filter</div>
                    <div className="catalog__filter">Filter</div>
                </div>
                <div className="companies">
                    <h3 className="filter__title">Виробники</h3>
                    <div className="catalog__filter">Filter</div>
                    <div className="catalog__filter">Filter</div>
                    <div className="catalog__filter">Filter</div>
                    <div className="catalog__filter">Filter</div>
                    <div className="catalog__filter">Filter</div>                    
                </div>
            </aside>
            <article className="catalog__merch">
                <div className="merch">
                    <img className="merch__img" src="./gray-img.png" alt=""/>
                    <h3 className="merch__name">Title</h3>
                    <h4 className="merch__price">999$</h4>
                    <h4 className="status">В наявності</h4>
                    <Link className="merch__view-button">
                        Переглянути
                    </Link>
                </div>
                <div className="merch">
                    <img className="merch__img" src="./gray-img.png" alt=""/>
                    <h3 className="merch__name">Title</h3>
                    <h4 className="merch__price">999$</h4>
                    <h4 className="status">В наявності</h4>
                    <Link className="merch__view-button">
                        Переглянути
                    </Link>
                </div>
                <div className="merch">
                    <img className="merch__img" src="./gray-img.png" alt=""/>
                    <h3 className="merch__name">Title</h3>
                    <h4 className="merch__price">999$</h4>
                    <h4 className="status">В наявності</h4>
                    <Link className="merch__view-button">
                        Переглянути
                    </Link>
                </div>
            </article>
        </main>
    );
};

export default CatalogPage;