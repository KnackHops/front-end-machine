import { useContext } from 'react';
import { MenuContext } from '../Wrapper/FrontEndMachine';
import './Footer.css';

const Footer = () => {
    const { menuLoc } = useContext(MenuContext);

    return (
        <footer className={`fd ${menuLoc.sub}`}>
            <div className="fd">
                <div className="opening_info fd">
                    <h4>Hours</h4>
                    <p>
                        Open every week except for Wednesdays!
                    </p>
                    <p>
                        8:00 AM to 4:00 PM
                    </p>
                </div>
                <div className="address_info fd">
                    <h4>
                        Address
                    </h4>
                    <p>
                        Buensuceso St, Zone 2, San Mariano, Isabela
                    </p>
                    <p>
                        0997 170 0167
                    </p>
                </div>
                <div className="developer_info fd">
                    <h4>
                        Developed By: Aldrian Telan
                    </h4>
                    <p>
                        Images used hosted from: Lensdump
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;