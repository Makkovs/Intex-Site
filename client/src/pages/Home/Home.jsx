import Content from "./Slider/Content/Content";
import Slider from "./Slider/Slider";

import "./home.css";

const HomePage = () => {

    return (
        <main className="home-page">
            <Slider />
            <Content />
            <footer className="footer">
                
            </footer>
        </main>
    );
};

export default HomePage;