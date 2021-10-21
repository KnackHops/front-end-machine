import { useContext, useEffect, useMemo, useState } from 'react';
import { MenuContext } from '../../Wrapper/FrontEndMachine';
import './Header.css';
import NavList from './NavList';

const Header = () => {
    const { menuLoc, setMenuLoc, isWindowMedia } = useContext(MenuContext);

    useEffect( () => {
        if ( burgStatus === "-open" ) {
            burgerMachine();
        }
    }, [ isWindowMedia ])

    const onLinkClicked = e => {
        e.preventDefault();
        burgerMachine();
        const path_sub = e.target.innerText.toLowerCase().replace(" ", "_")
        console.log(path_sub)

        if ( menuLoc.sub === path_sub ) {
            return
        }

        if ( path_sub == "home" ) {
            setMenuLoc({
                main_menu: 'landpage_container',
                sub: ''
            })

            return
        }

        setMenuLoc({
            main_menu: 'section_container',
            sub: path_sub
        })
    }

    useEffect(()=>{
        console.log(menuLoc)
    }, [menuLoc])


    const [ burgStatus, setBurgStatus ] = useState("-not-open");

    useEffect( () => {
        window.addEventListener("scroll", scrollMonitor);

        return () => window.removeEventListener("scroll", scrollMonitor);
    })

    const ht_bod = useMemo( () => {
        return document.querySelector("html");
    }, [])

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
        return new Promise( ( resolve, reject ) => {
            const heightInner = window.innerHeight * .8;

            setTimeout( () => {
                if ( heightInner > ht_bod.scrollTop ) {
                    resolve(false)
                } else{
                    resolve(true)
                }
            }, 1200)
        })
    }

    const headerWait = async header => {
        const res = await headerTimer();

        if ( res ) {
            if ( !header.classList.contains("-hide") ) {
                header.classList.add("-hide");
            }
        }
    }

    const scrollMonitor = e => {
        if ( burgStatus === "-open" ) {
            ht_bod.scrollTo(0, ht_bod.scTop);
        }

        if ( menuLoc.main_menu === "landpage_container" ) {
            const header = document.querySelector("header");
            const heightInner = window.innerHeight * .8;

            if ( ht_bod.scrollTop > prevScroll ) {
                if ( ht_bod.scrollTop > heightInner ) {
                    if ( !header.classList.contains("-hide") ) {
                        header.classList.add("-hide");
                    }
                }
            } else {
                if ( header.classList.contains("-hide") ) {
                    header.classList.remove("-hide");
                    if ( ht_bod.scrollTop > heightInner ) {
                        headerWait(header);
                    }
                }

                if ( ht_bod.scrollTop > heightInner ) {
                    if ( !header.classList.contains("-near-top") ) {
                        header.classList.add("-near-top");
                    }
                } else {
                    if ( header.classList.contains("-near-top") ) {
                        header.classList.remove("-near-top");
                    }
                }
            }

            setPrevScroll(ht_bod.scrollTop)
        } else {
            if ( prevScroll ){
                setPrevScroll(0);
            }
        }
    }

    return (
        <header>
            <div className="universal-container fd">
                <div className="icon-container fd">
                    <h1>
                        Zacc's
                    </h1>
                </div>
                <NavList handler={onLinkClicked} burgStatus={burgStatus} menuLoc={menuLoc}/>
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