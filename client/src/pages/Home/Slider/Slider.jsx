import { useRef, useState, useEffect } from "react";

import { CATALOGE_ROUTE, HOME_ROUTE } from "../../../utils/consts";
import SlideInfo from "./SlideInfo/SlideInfo";

import "./slider.css";

const Slider = () => {

    const slide1Radio = useRef(null);
    const slide2Radio = useRef(null);
    const [selectedRadio, setSelectedRadio] = useState(0);

    const radios = [slide1Radio, slide2Radio];

    useEffect(() => {
        radios[selectedRadio].current.checked = true;
    }, [selectedRadio]);

    const incrementRadio = () => {
        if (selectedRadio < radios.length - 1) {
            setSelectedRadio(selectedRadio + 1);
        } else {
            setSelectedRadio(0);
        };
    };

    const decrementRadio = () => {
        if (selectedRadio > 0) {
            setSelectedRadio(selectedRadio - 1);
        } else {
            setSelectedRadio(radios.length - 1);
        };
    };

    return (
        <article className="home__galery">
            <input
                className="galery__radio"
                name="point"
                id="slide1"
                type="radio"
                ref={slide1Radio}
                onClick={() => setSelectedRadio(0)}
            />
            <input
                className="galery__radio"
                name="point"
                id="slide2"
                type="radio"
                ref={slide2Radio}
                onClick={() => setSelectedRadio(1)}
            />
            <SlideInfo
                id={"first"}
                slideTitle={"Фотодрук"}
                slideDescription={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quia nemo id nostrum hic dicta, repellat provident? Repudiandae, accusamus! Temporibus!`}
                slideFooterTitle={"Від 4грн/шт"}
                slideButton={"Замовити"}
                background={"https://gramofon.ua/variation/12447/w1920webp/%D1%84%D0%BE%D1%82%D0%BE.jpg"}
                slideLinkPath={HOME_ROUTE}
            />
            <SlideInfo
                id={"second"}
                slideTitle={"Фотодрук"}
                slideDescription={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quia nemo id nostrum hic dicta, repellat provident? Repudiandae, accusamus! Temporibus!`}
                slideFooterTitle={""}
                slideButton={"Каталог"}
                background={"https://img.freepik.com/free-photo/top-view-of-back-to-school-stationery-with-backpack-and-copy-space_23-2148587545.jpg?w=996&t=st=1692351953~exp=1692352553~hmac=d7b5b39c45ca483604f49fd624a62fcf4f145b617aa25ff256009c23736e18f3"}
                slideLinkPath={CATALOGE_ROUTE}
            />
            <div className="galery__buttons">
                <label className="galery__button btn1" htmlFor="slide1"></label>
                <label className="galery__button btn2" htmlFor="slide2"></label>
            </div>
            <div className="decrement-button arrow-button" onClick={decrementRadio}></div>
            <div className="increment-button arrow-button" onClick={incrementRadio}></div>
        </article>
    );
};

export default Slider;