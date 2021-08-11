import {Link} from "react-router-dom";
import "./DesktopMenu.css"

const DesktopMenu = () => {
    return (
        <div className="desktopMenu">
            <Link to="/portfolio">Портфолио</Link>
            <Link to="/servicesPage">Услуги</Link>
            <Link to="/contacts">Контакты</Link>
        </div>
    )
}

export default DesktopMenu;
