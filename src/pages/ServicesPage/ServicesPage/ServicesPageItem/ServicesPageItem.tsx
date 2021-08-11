import "./ServicesPageItem.css"
import {useSelector} from "react-redux";
import CardServices from "./CardServices/CardServices";
import {useState} from "react";

interface OneDirection {
    direction: string
}

export interface ServicesPageProps {
    title: string
    item: string
    description: string
    directions: OneDirection[]
    className?: string,
}

const ServicesPageItem = () => {

    const ServicesPageData = useSelector((state: any) => state.servicesReducers)
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <div className="servicesPageItem">
            <div className="contentWrapper">
                <div className="servicesPageTitle">УСЛУГИ</div>
                <div className="serviceCardsWrapper">
                    {ServicesPageData.ServicesPageInfo.map((servCard: ServicesPageProps, index: number) => (
                        <CardServices
                            className={`servCard-img-${index}`}
                            title={servCard.title}
                            item={servCard.item}
                            description={servCard.description}
                            directions={servCard.directions}
                        />))}
                </div>
            </div>
        </div>
    )
}
export default ServicesPageItem;