import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "../../components/Header/Header";
import HomePage from "../../pages/Home/Home";
import Footer from "../../components/Footer/Footer"
import ContactsPage from "../../pages/ContactsPage/ContactsPage";

export default function Routers() {
    return (
        <Router>
            <Header/>
            <div>
                <Switch>
                    <Route path="/contacts">
                        <ContactsPage />
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