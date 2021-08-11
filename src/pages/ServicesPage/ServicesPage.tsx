import ServicesPageItem from "./ServicesPage/ServicesPageItem/ServicesPageItem"
import FeedBackForm from "../../components/FeedBackForm/FeedBackForm"
import StrategyItem from "./ServicesPage/StrategyItem/StrategyItem";


const ServicesPage = () => {
    return (
        <>

            <ServicesPageItem/>
            <StrategyItem/>
            <FeedBackForm type={"black"}/>

        </>
    );
}

export default ServicesPage;
