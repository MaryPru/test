import "../Home/Home.css"
import "../../App.css"
import FirstBlock from "./FirstBlock/FirstBlock";
import Projects from "./Projects/Projects"
import Services from "./Services/Services"
import FeedBackForm from "../../components/FeedBackForm/FeedBackForm"

const HomePage = () => {
  return (
    <>
      <div className="HomePage">
        <div className="contentWrapper">
          <div className="HomeTitle">Агенство digital-решений <br />
            для бизнеса</div>
        </div>
      </div>
      <FirstBlock />
      <Projects />
      <Services />
      <FeedBackForm type={"black"} />
    </>
  );
}

export default HomePage;
