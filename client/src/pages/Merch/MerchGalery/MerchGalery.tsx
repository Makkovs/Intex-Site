import { FC, useState } from "react";

import { REACT_APP_API_URL } from "../../../utils/consts";

import styles from "./merch-galery.module.scss";

interface MerchGaleryProps {
    img: string | null;
};

const MerchGalery: FC<MerchGaleryProps> = ({ img }) => {

    const [slides, setSlides] = useState<Array<string>>(img ? JSON.parse(img) : [""]);
    const [currentSlide, setCurrentSlide] = useState<string>(slides[0]);

    return (
        <div className={styles.galery}>
            <div className={styles.galeryAside}>
                {slides.map((slide, index) =>
                    <div key={index}>
                        {slide !== currentSlide
                            &&
                            <img
                                className={styles.slide}
                                src={
                                    REACT_APP_API_URL + slide
                                }
                                alt={"slide"}
                                onClick={() => setCurrentSlide(slide)}
                            />
                        }
                    </div>
                )}
            </div>
            <img
                className={styles.mainSlide}
                src={
                    currentSlide
                        ? REACT_APP_API_URL + currentSlide
                        : "../gray-img.png"
                }
                alt={"slide"}
            />
        </div>
    );
};

export default MerchGalery