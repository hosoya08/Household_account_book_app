import Header from "../components/Header";
import "../assets/reset.css";
import "../assets/main.css";
import { Pageview } from "./Pageview";

const Home = () => {
    return (
        <div className="content">
            <Header/>
            <Pageview/>
        </div>
    )
}

export default Home;
