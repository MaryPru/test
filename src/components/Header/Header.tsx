import logo from "../../assets/img/logo.svg"
import "../Header/Header.css"
import {
    Link
} from "react-router-dom";

const Header = () => {
    
    return (
        <div className="header fixedMenu">
            <div className="contentWrapper">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <div className="menu">
                    <Link to="/">Портфолио</Link>
                    <Link to="/users">Услуги</Link>
                    <Link to="/contacts">Контакты</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;