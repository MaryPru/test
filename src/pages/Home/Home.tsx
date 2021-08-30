import "../Home/Home.css"
import "../../App.css"
import FirstBlock from "./FirstBlock/FirstBlock";
import Projects from "./Projects/Projects"
import Services from "./Services/Services"
import FeedBackForm from "../../components/FeedBackForm/FeedBackForm"

const HomePage = () => {
  return (
    <>
        <div className={'home-page'}>
            <FirstBlock />
            <Projects />
            <Services />
        </div>
        <FeedBackForm type={"black"} />
    </>
  );
}

export default HomePage;
