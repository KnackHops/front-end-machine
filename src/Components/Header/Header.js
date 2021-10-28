import { useContext, useEffect, useState } from 'react';
import { MenuContext } from '../../Wrapper/FrontEndMachine';
import './Header.css';
import NavList from './NavList';
import { useLocation } from 'react-router';

const Header = () => {
    const { menuLoc, setMenuLoc, isWindowMedia, ht_bod } = useContext(MenuContext);

    useEffect( () => {
        if ( burgStatus === "-open" ) {
            burgerMachine();
        }
    }, [ isWindowMedia ])

    const [ burgStatus, setBurgStatus ] = useState("-not-open");

    useEffect( () => {
        window.addEventListener("scroll", scrollMonitor);

        return () => window.removeEventListener("scroll", scrollMonitor);
    })

    const [ prevScroll, setPrevScroll ] = useState(ht_bod.scrollTop);

    const burgerMachine = () => {
        if ( burgStatus === "-open" ) {
            ht_bod.scTop = 0;
            setBurgStatus("-not-open");
        } else {
            ht_bod.scTop = ht_bod.scrollTop;
            setBurgStatus("-open");
        }
    }

    const headerTimer = () => {
        return new Promise( ( resolve ) => {

            setTimeout( () => {
                if ( 80 > ht_bod.scrollTop ) {
                    resolve(false)
                } else{
                    resolve(true)
                }
            }, 1600)
        })
    }

    const headerWait = async header => {
        const res = await headerTimer();

        if ( res ) {
            if ( header.children[0].children[2].classList.contains("-open")) {
                return
            }

            if ( !header.classList.contains("-hide") && document.querySelector("main.home_container")) {
                header.classList.add("-hide");
            }
        }
    }

    useEffect(()=>{
        const header = document.querySelector("header");
        headerWait(header);
    }, [])

    const scrollMonitor = e => {
        if ( burgStatus === "-open" ) {
            ht_bod.scrollTo(0, ht_bod.scTop);
        }

        if ( document.querySelector("main.home_container") ) {

            const header = document.querySelector("header");

            if ( ht_bod.scrollTop > prevScroll ) {
                if ( ht_bod.scrollTop > 80 ) {
                    if ( !header.classList.contains("-hide") ) {
                        header.classList.add("-hide");
                    }
                }
            } else {
                if ( header.classList.contains("-hide") ) {
                    header.classList.remove("-hide");
                    if ( ht_bod.scrollTop > 80 ) {
                        headerWait(header);
                    }
                }
            }
            
            if ( ht_bod.scrollTop > 80 ) {
                if ( !header.classList.contains("-near-top") ) {
                    header.classList.add("-near-top");
                }
            } else {
                if ( header.classList.contains("-near-top") ) {
                    header.classList.remove("-near-top");
                }
            }

            setPrevScroll(ht_bod.scrollTop)
        }
    }

    const RouteMonitor = () => {
        const curLoc = useLocation().pathname;

        useEffect( () => {
            if ( curLoc.includes("home") || curLoc === "/" ) {
                if ( menuLoc.main_menu !== "home_container" ) {
                    onLinkClicked("home_container", "")
                }
            } else {
                if ( !curLoc.includes(menuLoc.sub) || !menuLoc.sub ) {
                    let sub = "contact_us"

                    if ( curLoc.includes("menu") ) {
                        sub = "menu"
                    }
                    
                    onLinkClicked("section_container", sub);
                }
            }
        }, [ curLoc ] )

        const onLinkClicked = ( main_path, path_sub ) => {
            if ( burgStatus === "-open" ) {
                burgerMachine();
            }
    
            ht_bod.scrollTo(0, 0)
    
            if ( menuLoc.sub === path_sub ) {
                return
            }

            setMenuLoc({
                main_menu: main_path,
                sub: path_sub
            })
        }

        return (
            <></>
        )
    }

    return (
        <header className={`${menuLoc.sub}-header ${menuLoc.main_menu}-header`}>
            <RouteMonitor />
            <div className="universal-container fd">
                <div className="icon-container fd">
                    <h1>
                        Zacc's
                    </h1>
                </div>
                <NavList burgStatus={burgStatus} menuLoc={menuLoc}/>
                <div className={`burger-machine fd ${burgStatus}`} onClick={burgerMachine}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;