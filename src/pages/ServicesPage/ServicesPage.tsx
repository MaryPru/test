import ServicesPageItem from "./ServicesPage/ServicesPageItem/ServicesPageItem"
import FeedBackForm from "../../components/FeedBackForm/FeedBackForm"
import StrategyItem from "./ServicesPage/StrategyItem/StrategyItem";
import './ServicesPage.css'

const ServicesPage = () => {
    return (
        <>
            <div className={'wrapper-services'}>
                <ServicesPageItem />
                <StrategyItem />
            </div>
            <FeedBackForm type={"black"} />
        </>
    );
}

export default ServicesPage;
