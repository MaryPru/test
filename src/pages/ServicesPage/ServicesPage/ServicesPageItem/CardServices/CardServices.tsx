import "../ServicesPageItem.css";
import {ServicesPageProps} from "../ServicesPageItem";
import CardProject from "../../../../Potfolio/OurProjects/CardProject/CardProject";

const CardServices = (props: ServicesPageProps) => {
    const {item, title, description, directions, className} = props;

    return (
        <div className="servCard">
            <div className="cardDescriptionWrapper">
                <div className="wrapperTitle">
                    <div className="title">{title}</div>
                    <img className={className} src={item} alt="item"/>
                </div>
                <div className="description">{description} </div>
                <div className="directions">
                    {directions.map((item,index) => (
                        <div
                            key={`directions-${index}`}
                            className="direction"
                        >
                            {item.direction}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default CardServices;
