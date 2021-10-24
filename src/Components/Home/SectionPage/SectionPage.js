import { useContext } from 'react';
import {
    Switch,
    Route,
    useLocation
} from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { MenuContext } from '../../../Wrapper/FrontEndMachine';
import Contact from '../Sections/Contact';
import MenuFood from '../Sections/MenuFood';
import './SectionPage.css';

const SectionPage = () => {
    const path = "/section"

    const { menuLoc, setMenuLoc } = useContext(MenuContext);
    const cur = useLocation();
    console.log(cur);
    
    useEffect(()=>{
        if ( menuLoc.main_menu !== "section_container" ) {
            const main_menu = "section_container";
            let sub = cur.pathname.substring(9);

            if ( menuLoc.sub ) {
                if ( cur.pathname.search(menuLoc.sub) > 0 ) {
                    sub = cur.pathname.substring(9);
                }
            }
            
            setMenuLoc({main_menu, sub})
        }
    }, [])

    return (
        <>
            <Switch>
                <Route path={`${path}/menu`}>
                    <MenuFood />
                </Route>
                <Route path={`${path}/contact_us`}>
                    <Contact />
                </Route>
            </Switch>
        </>
    )
}

export default SectionPage;