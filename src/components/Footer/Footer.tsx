import "../Footer/Footer.css"
import Logotip from "../Icons/Logotip"

const Footer = () => {
    return (
        <div className="footer">
            <div className="contentWrapper">
                <div className="wrapperFooterBody">
                    <Logotip />
                    <div className="footerContactsMenuWrapper">
                        <div className="footerContacts">
                            <div className="footerTitle">Leadrium</div>
                            <div className="footerSubTitle">name@domain.com</div>
                            <div className="footerSubTitle">+34 (846) 548-96-96</div>
                            <div className="footerSubTitle">4517 Washington Ave. Manchester,<br /> Kentucky 39495</div>
                        </div>
                        <div className="footerMenu">
                            <div className="footerTitle">Меню</div>
                            <div className="footerSubTitle">Портфолио</div>
                            <div className="footerSubTitle">О нас</div>
                            <div className="footerSubTitle">Услуги</div>
                            <div className="footerSubTitle">Контакты</div>
                        </div>
                    </div>
                </div>
                <div className="footerCopyright">
                    <div >2020 @ Leadrium</div>
                    <div>Политика конфиденциальности</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;