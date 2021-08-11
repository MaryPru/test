import "./ServicesPageItem.css"
import {useSelector} from "react-redux";
import CardServices from "./CardServices/CardServices";



interface OneDirection {
    direction:string
}

export interface ServicesPageProps {
    title: string
    item: string
    description: string
    directions:OneDirection[]
}


const ServicesPageItem = () => {

    const ServicesPageData = useSelector((state: any) => state.servicesReducers)

    return (

        <div className="servicesPageItem">
            <div className="contentWrapper">
                <div className="servicesPageTitle">УСЛУГИ</div>
                <div className="cardsWrapper">
                    {ServicesPageData.ServicesPageInfo.map((card:ServicesPageProps ) => (
                        <CardServices
                            title={card.title}
                            item={card.item}
                            description={card.description}
                            directions={card.directions}

                        />))}
                </div>
            </div>
        </div>

)
}
export default ServicesPageItem;