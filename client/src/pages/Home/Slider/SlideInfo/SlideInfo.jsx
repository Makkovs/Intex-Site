import { Link } from "react-router-dom";

import "./slide-info.css";

const SlideInfo = ({ id, slideTitle, slideDescription, slideFooterTitle, slideButton, background, slideLinkPath }) => {

    return (
        <section
            className={`home__slide home__slide--${id}`}
            style={{ background: `url("${background}") 50%/cover no-repeat, #a8a8a8` }}
        >
            <section className="slide__info">
                <h2 className="slide__title">
                    {slideTitle}
                </h2>
                <p className="slide__description">
                    {slideDescription}
                </p>
                <h2 className="slide__title">
                    {slideFooterTitle}
                </h2>
                <Link className="slide__button" to={slideLinkPath}>
                    {slideButton}
                </Link>
            </section>
        </section>
    );
};

export default SlideInfo;