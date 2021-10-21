import { createContext, useEffect, useState } from "react";
import Body from "../Components/Home/Body";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";

const MenuContext = createContext("")

const init_menu_state = {
    main_menu: "landpage_container",
    sub: ""
}

const FroneEndMachine = () => {
    const [ menuLoc, setMenuLoc ] = useState(init_menu_state);

    const [ isWindowMedia, setWindowMedia ] = useState(false);

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
                    isWindowMedia
                }}>
                <Header />
                <Body />
                <Footer />
            </MenuContext.Provider> }
        </div>
    )
}

export default FroneEndMachine;
export { MenuContext };
