import logo from "../../assets/img/logo.svg"
import "../Header/Header.css"
import {Squash as Hamburger} from 'hamburger-react'
import {
    Link
} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MibileMenu/MobileMenu";

const Header = () => {

    const [isOpen, setOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function getWindowDimensions() {
        const {innerWidth: width, innerHeight: height} = window;

        return {
            width,
            height
        };
    }

    useEffect(() => {
        if (windowDimensions.width < 700) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [windowDimensions.width])

    return (
        <div className="header fixedMenu">
            <div className="contentWrapper">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                </div>
                {!isMobile && <DesktopMenu/>}
                {isMobile && <MobileMenu isOpen={isOpen} setOpen={setOpen}/>}
                {isMobile && <Hamburger toggled={isOpen} onToggle={() => setOpen(current => !current)}/>}
            </div>
        </div>
    );
}

export default Header;