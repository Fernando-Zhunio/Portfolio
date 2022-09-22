import Jobs from "../../components/Jobs/Jobs";
import Know from "../../components/Know/Know";
import Navbar from "../../components/Navbar/Navbar";
import Welcome from "../../components/Welcome/Welcome";
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="background-blur z-10">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="z-100 position-relative">
                <Navbar />
                <Welcome />
                <div className="container">
                    <Know />
                    <Jobs />
                </div>
            </div>
        </div>
    );
}

export default Home