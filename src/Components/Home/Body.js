import { useContext, useEffect } from 'react';
import {
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
    
    return (
        <main className={`fd ${menuLoc?.main_menu}`}>
                {/* {
                    menuLoc?.main_menu === "landpage_container" ?
                        <Redirect to="/" /> :
                        <Redirect to="/section" />
                } */}
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/home">
                        <LandPage />
                    </Route>
                    <Route path="/section">
                        <SectionPage />
                        {/* {
                            menuLoc.main_menu === "landpage_container" || !menuLoc.sub ? <Redirect to="/" /> : <SectionPage />
                        } */}
                    </Route>
                </Switch>
        </main>
    )
}

export default Body;