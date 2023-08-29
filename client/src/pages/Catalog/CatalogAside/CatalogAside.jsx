import "./catalog-aside.css";
import OrbCheckbox from "../../../components/UI/OrbCheckbox/OrbCheckbox";

const CatalogAside = () => {

    return (
        <aside className="catalog__filters">
            <div className="categories">
                <h3 className="filter__title">
                    Категорії
                </h3>
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
                <h3 className="filter__title">
                    Виробники
                </h3>
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
    );
};

export default CatalogAside;