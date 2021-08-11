import {Link} from "react-router-dom";
import "./MobileMenu.css"

interface MobileMenuProps {
    isOpen: boolean,
    setOpen: (value: boolean) => void
}

const MobileMenu = (props: MobileMenuProps) => {
    const {isOpen, setOpen} = props
    return (
        <div className={`mobileMenu ${isOpen ? 'mobileMenuIsOpen' : 'mobileMenuIsClose'}`}>
            <Link to="/portfolio" onClick={() => setOpen(false)}>Портфолио</Link>
            <Link to="/servicesPage" onClick={() => setOpen(false)}>Услуги</Link>
            <Link to="/contacts" onClick={() => setOpen(false)}>Контакты</Link>
        </div>
        
    )
}

export default MobileMenu;