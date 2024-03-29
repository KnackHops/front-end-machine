import { createContext, useEffect, useState, useMemo } from "react";
import Body from "../Components/Home/Body";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";
import {
    BrowserRouter as Router
} from 'react-router-dom'

const MenuContext = createContext("")

const init_menu_state = {
    main_menu: "home_container",
    sub: ""
}

const FroneEndMachine = () => {
    const [ menuLoc, setMenuLoc ] = useState(init_menu_state);

    const [ isWindowMedia, setWindowMedia ] = useState(false);

    const ht_bod = useMemo( () => {
        return document.querySelector("html");
    }, [])

    const windowMediaMonitor = () => {
        if ( window.innerWidth < 1450 ) {
            setWindowMedia(true)
        } else {
            setWindowMedia(false)
        }
    }

    useEffect( () => {
        window.addEventListener("resize", windowMediaMonitor);
    }, [])

    return (
        <div className="fd">
            { menuLoc && 
            <MenuContext.Provider value={{
                    menuLoc,
                    setMenuLoc,
                    isWindowMedia,
                    ht_bod
                }}>
                <Router>
                    <Header />
                    <Body />
                    <Footer />
                </Router>
            </MenuContext.Provider> }
        </div>
    )
}

export default FroneEndMachine;
export { MenuContext };
