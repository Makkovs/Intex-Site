import { Link } from "react-router-dom";
import Button from "../../../../components/UI/Button/Button";
import styles from "./slide-info.module.css";

const SlideInfo = ({ id, slideTitle, slideDescription, slideFooterTitle, slideButton, background, slideLinkPath }) => {

    return (
        <section
            className={[styles.homeSlide, styles[id]].join(" ")}
            style={{ background: `url("${background}") 50%/cover no-repeat, #a8a8a8` }}
        >
            <section className={styles.slideInfo}>
                <h2 className={styles.slideTitle}>
                    {slideTitle}
                </h2>
                <p className={styles.slideDescription}>
                    {slideDescription}
                </p>
                {slideFooterTitle &&
                    <h2 className={styles.slideTitle}>
                        {slideFooterTitle}
                    </h2>}
                <Link to={slideLinkPath}>
                    <Button style={{marginTop: "20px"}}>
                        {slideButton}
                    </Button>
                </Link>
            </section>
        </section>
    );
};

export default SlideInfo;