import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "../../components/Header/Header";
import HomePage from "../../pages/Home/Home";
import Footer from "../../components/Footer/Footer"
import ContactsPage from "../../pages/ContactsPage/ContactsPage";

import PortfolioPage from "../../pages/Potfolio/PortfolioPage"
import ServicesPage from "../../pages/ServicesPage/ServicesPage"

export default function Routers() {
    return (
        <Router>
            <Header/>
            <div>
                <Switch>
                    <Route path="/contacts">
                        <ContactsPage />
                    </Route>
                    <Route path="/portfolio">
                        <PortfolioPage/>
                    </Route>
                    <Route path="/servicesPage">
                        <ServicesPage/>
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
           
            <Footer/>
        </Router>
    );
}