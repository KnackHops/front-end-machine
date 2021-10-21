import { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation
} from 'react-router-dom'
import LandPage from './LandPage/LandPage';
import SectionPage from './SectionPage/SectionPage';
import './Body.css';
import { MenuContext } from '../../Wrapper/FrontEndMachine';

const Body = () => {
    const { menuLoc } = useContext(MenuContext);

    const RouteChecker = () => {
        console.log(useLocation());
        return (
            <></>
        )
    }

    return (
        <main className={`fd ${menuLoc?.main_menu}`}>
            <Router>
                <RouteChecker />
                {
                    menuLoc?.main_menu === "landpage_container" ?
                        <Redirect to="/" /> :
                        <Redirect to="/section" />
                }
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/home">
                        <LandPage />
                    </Route>
                    <Route path="/section">\
                        {
                            menuLoc.main_menu === "landpage_container" || !menuLoc.sub ? <Redirect to="/" /> : <SectionPage />
                        }
                    </Route>
                </Switch>
            </Router>
        </main>
    )
}

export default Body;