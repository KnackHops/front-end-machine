import { useContext, useMemo } from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { MenuContext } from '../../../Wrapper/FrontEndMachine';
import './SectionPage.css';

const SectionPage = () => {
    const { menuLoc } = useContext(MenuContext)

    const path = useMemo( ( ) => {
        return "/section"
    }, [ menuLoc ] );

    console.log(menuLoc);
    return (
        <>
            {
                <Redirect to={`${path}/${menuLoc.sub}`} />
            }
            <Switch>
                <Route path={`${path}/menu`}>
                    <p>Menu</p>
                </Route>
                <Route path={`${path}/contact_us`}>
                    <p>Contact Us</p>
                </Route>
                <Route path={`${path}/make_reservation`}>
                    <p>Make Reservation</p>
                </Route>
            </Switch>
        </>
    )
}

export default SectionPage;