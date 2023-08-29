import "./catalog-merch.css";
import { Link } from "react-router-dom";

const CatalogMerch = ({ name, status, price, category, company }) => {

    return (
        <div className="merch">
            <img
                className="merch__img"
                src="./gray-img.png"
                alt={name}
            />
            <h3 className="merch__name">
                {name}
            </h3>
            <div className="merch__info">
                <div
                    className={status
                        ? "merch__status merch__status--green"
                        : "merch__status merch__status--red"
                    }
                >
                    {status
                        ? "В наявності"
                        : "Немає в наявності"
                    }
                </div>
                <div className="merch__price">
                    {price}грн
                </div>
            </div>
            <div className="merch__info">
                <div className="merch__category">
                    {category}
                </div>
                <div className="merch__company">
                    {company}
                </div>
            </div>
            <Link className="merch__view-button">
                Переглянути
            </Link>
        </div>
    );
};

export default CatalogMerch;