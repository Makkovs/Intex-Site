import "./catalog-nav.css";

const CatalogNav = () => {

    return (
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
            <input 
                className="sort-search" 
                type="text"
                placeholder="Search" 
            />
        </nav>
    );
};

export default CatalogNav;