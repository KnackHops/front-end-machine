import './NavList.css'
import {
    Link
} from 'react-router-dom'
import { useContext } from 'react'
import { MenuContext } from '../../Wrapper/FrontEndMachine'

const NavList = ( { burgStatus } ) => {
    const { menuLoc } = useContext(MenuContext);

    return (
        <ul className={`nav-list fd ${burgStatus}`}>
            <li className={menuLoc?.sub ? "" : "here-now"}>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li className={menuLoc?.sub === "menu" ? "here-now" : ""}>
                {/* <a href="http://localhost:3000/section/menu" onClick={handler}>
                </a> */}
                
                <Link to="/section/menu">
                    Menu
                </Link>
            </li>
            <li className={menuLoc?.sub ==="contact_us" ? "here-now" : ""}>
                {/* <a href="http://localhost:3000/section/contact_us" onClick={handler}>
                </a> */}
                <Link to="/section/contact_us">
                    Contact Us
                </Link>
            </li>
        </ul>
    )
}

export default NavList;