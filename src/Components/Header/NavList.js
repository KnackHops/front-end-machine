import './NavList.css'
import {
    Link
} from 'react-router-dom'

const NavList = ( { burgStatus } ) => {
    return (
        <ul className={`nav-list fd ${burgStatus}`}>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                {/* <a href="http://localhost:3000/section/menu" onClick={handler}>
                </a> */}
                
                <Link to="/section/menu">
                    Menu
                </Link>
            </li>
            <li>
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