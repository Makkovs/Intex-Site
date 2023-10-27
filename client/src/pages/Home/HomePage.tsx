import { FC } from "react";

import Slider from "./Slider/Slider";
import Content from "./Content/Content";
import Footer from "../../components/Footer/Footer";


const HomePage: FC = () => {

    return (
        <main>
            <Slider />
            <Content />
            <Footer />
        </main>
    );
};

export default HomePage;