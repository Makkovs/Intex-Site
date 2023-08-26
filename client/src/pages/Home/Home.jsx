import Footer from "../../components/Footer/Footer";
import Content from "./Slider/Content/Content";
import Slider from "./Slider/Slider";

const HomePage = () => {

    return (
        <main className="home-page">
            <Slider />
            <Content />
            <Footer />
        </main>
    );
};

export default HomePage;