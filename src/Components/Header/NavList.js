import './NavList.css'

const NavList = ( { handler, burgStatus, menuLoc } ) => {
    return (
        <ul className={`nav-list fd ${burgStatus}`}>
            <li>
                <a href="http://localhost:3000/section/home" onClick={handler}>
                    Home
                </a>
            </li>
            <li>
                <a href="http://localhost:3000/section/menu" onClick={handler}>
                    Menu
                </a>
            </li>
            <li>
                <a href="http://localhost:3000/section/contact_us" onClick={handler}>
                    Contact Us
                </a>
            </li>
            <li>
                <a href="http://localhost:3000/section/make-reservation" onClick={handler}>
                    Make Reservation
                </a>
            </li>
        </ul>
    )
}

export default NavList;