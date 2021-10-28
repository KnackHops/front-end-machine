import Cover from "../Sections/Cover";
import PhotoBoxes from "../Sections/PhotoBoxes";
import MenuFood from "../Sections/MenuFood";
import Contact from "../Sections/Contact";
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../../Wrapper/FrontEndMachine";

const coverImageInit = {
    firstImgSl: 0,
    secondImgSl: 0,
    thirdImgSl: 0
}

const photoBoxesIndInit = {
    firstImgSlClass: "pb-do_slide",
    secondImgSlClass: "pb-do_slide",
    thirdImgSlClass: "pb-do_slide",
    fourthImgSlClass: "pb-do_slide"
}

const LandPage = () => {
    const { ht_bod } = useContext(MenuContext);
    const [ slideUp, setSlideUp ] = useState(0);
    const [ coverImageSlide, setCoverImageSlide ] = useState(0);
    const [ coverImageIndSlide, setCoverImageIndSlide ] = useState(coverImageInit);
    const [ menuClassChange, setMenuClassChange ] = useState("menu-do_slide");
    const [ photoBoxesIndSlide, setphotoBoxesIndSlide ] = useState(photoBoxesIndInit);

    useEffect( () => {
        ht_bod.scrollTo(0, 0);
    }, [])

    const getCompos = () => {
        return document.querySelector("main").childNodes;
    };

    const computeSlide = ( sc, fI, sL ) => {
        return ( ( ( sc - fI ) / sL) * 100 )
    }

    const scrollEffect = e => {
        const sc = e.target.scrollingElement.scrollTop;
        const fItemHalf = 142, fItemFull = 330;
        const slideUpLimit = fItemFull - fItemHalf;

        // title cover fade in and out
        if ( sc < fItemHalf ) {
            setSlideUp(0);
        }

        if ( sc >= fItemHalf && sc < fItemFull) {
            // let slideUp = ( ( ( sc - fItemHalf ) / slideUpLimit) * 100 ) / 2;
            setSlideUp( computeSlide( sc, fItemHalf, slideUpLimit ) );
        }
        
        const [ firstCompo, secondCompo, thirdCompo, fourthCompo ] = getCompos();
        // image first cover photos fade in and out
        // cover photos changes pattern within and out of 1650 window width
        // if window is greater than 1650 all of the item fades out since they are all on the same line
        // if window is less than 1650 the item fades out depending on the height of the scroll
        // this will provide smoother transition for each item fading out

        if ( window.innerWidth > 1650 ) {
            setCoverImageIndSlide(coverImageInit);
            const firstCompoPercent = firstCompo.offsetHeight * .5;
            const imageCoverLimit = firstCompo.offsetHeight - firstCompoPercent;

            if ( sc > firstCompoPercent && sc < firstCompo.offsetHeight ) {
                // console.log( ( ( sc - firstCompoPercent ) / imageCoverLimit ) * 100 / 2 );
                setCoverImageSlide( computeSlide( sc, firstCompoPercent, imageCoverLimit ) );
            } else {
                if ( coverImageSlide && sc < firstCompo.offsetHeight ) {
                    setCoverImageSlide(0)
                }
            }
        } else {
            setCoverImageSlide(0);
            const firstImageLimit = ( 1350 * .15 ) + 330;
            const secondImageLimit = ( 1350 * .45 ) + 330;
            const thirdImageLimit = ( 1350 * .6 ) + 330;
            const firstImageSlLimit = secondImageLimit - firstImageLimit;
            const secondImageSlLimit = thirdImageLimit - secondImageLimit;
            const thirdImageSlLimit = firstCompo.offsetHeight - secondImageLimit;

            if ( sc > firstImageLimit && sc < firstCompo.offsetHeight ) {
                if ( sc > firstImageLimit && sc < secondImageLimit ) {
                    setCoverImageIndSlide( { ...coverImageIndSlide, firstImgSl: computeSlide( sc, firstImageLimit, firstImageSlLimit ) } );
                } else if ( sc > secondImageLimit && sc < thirdImageLimit ) {
                    setCoverImageIndSlide( { ...coverImageIndSlide, secondImgSl: computeSlide( sc, secondImageLimit, secondImageSlLimit ) } );
                } else if ( sc > thirdImageLimit && sc < firstCompo.offsetHeight ) {
                    setCoverImageIndSlide( { ...coverImageIndSlide, thirdImgSl: computeSlide( sc, thirdImageLimit, thirdImageSlLimit ) } );
                } 
            } else {
                if ( ( coverImageIndSlide.firstImgSl || coverImageIndSlide.secondImgSl || coverImageIndSlide.thirdImgSl ) && sc < firstCompo.offsetHeight ) {
                    setCoverImageIndSlide(coverImageInit);
                }
            }
        }

        // menu fade in
        // no fade out
        const secondCompoInnerLimit = firstCompo.offsetHeight  * .25;
        const secondCompoOuterLimit = firstCompo.offsetHeight  + ( secondCompo.offsetHeight * .75 );

        if ( sc >= secondCompoInnerLimit && sc <= secondCompoOuterLimit ) {
            if ( !menuClassChange.includes("menu-dont") ) {
                setMenuClassChange("menu-dont_slide");
            }
        } else {
            // if ( menuClassChange.includes("menu-dont") ) {
            //     setMenuClassChange("menu-do_slide")
            // }
        }


        // photoboxes fade in
        // if width is greater than 1350, do fade in by row
        // otherwise do individual
        // photoBoxesIndSlide = state to use
        // pb-do_slide, pb-dont_slide
        const photoBoxesInnerLimit = firstCompo.offsetHeight + secondCompo.offsetHeight + ( thirdCompo.offsetHeight * .5 );
        const photoBoxesInnerMidLimit = firstCompo.offsetHeight + secondCompo.offsetHeight + ( thirdCompo.offsetHeight * .75 );
        const photoBoxesOuterMidLimit = firstCompo.offsetHeight + secondCompo.offsetHeight + thirdCompo.offsetHeight + ( fourthCompo.offsetHeight * .15 );
        const photoBoxesOuterLimit = firstCompo.offsetHeight + secondCompo.offsetHeight + thirdCompo.offsetHeight + ( fourthCompo.offsetHeight * .35 );

        if ( window.innerWidth > 1350 ) {
            if ( sc > photoBoxesInnerLimit ) {

                // if ( !photoBoxesIndSlide.firstImgSlClass.includes("dont") ) {
                //     setphotoBoxesIndSlide({...photoBoxesIndSlide, firstImgSlClass: "pb-dont_slide"});
                // }

                // if ( !photoBoxesIndSlide.secondImgSlClass.includes("dont") ) {
                //     setphotoBoxesIndSlide({...photoBoxesIndSlide, secondImgSlClass: "pb-dont_slide"});
                // }
                checkSlideInside("firstImgSlClass");
                checkSlideInside("secondImgSlClass");
            }

            if ( sc > photoBoxesInnerMidLimit ) {

                // if ( !photoBoxesIndSlide.thirdImgSlClass.includes("dont") ) {
                //     setphotoBoxesIndSlide({...photoBoxesIndSlide, thirdImgSlClass: "pb-dont_slide"});
                // }

                // if ( !photoBoxesIndSlide.fourthImgSlClass.includes("dont") ) {
                //     setphotoBoxesIndSlide({...photoBoxesIndSlide, fourthImgSlClass: "pb-dont_slide"});
                // }
                checkSlideInside("thirdImgSlClass");
                checkSlideInside("fourthImgSlClass");


            }
        } else {
            if ( sc > photoBoxesInnerLimit ) {

                // if ( !photoBoxesIndSlide.firstImgSlClass.includes("dont") ) {
                //     setphotoBoxesIndSlide({...photoBoxesIndSlide, firstImgSlClass: "pb-dont_slide"});
                // }
                checkSlideInside("firstImgSlClass");

            }

            if ( sc > photoBoxesInnerMidLimit ) {

                // if ( !photoBoxesIndSlide.secondImgSlClass.includes("dont") ) {
                //     setphotoBoxesIndSlide({...photoBoxesIndSlide, secondImgSlClass: "pb-dont_slide"});
                // }
                checkSlideInside("secondImgSlClass");

            }

            if ( sc > photoBoxesOuterMidLimit ) {

                // if ( !photoBoxesIndSlide.thirdImgSlClass.includes("dont") ) {
                //     setphotoBoxesIndSlide({...photoBoxesIndSlide, thirdImgSlClass: "pb-dont_slide"});
                // }
                checkSlideInside("thirdImgSlClass");

            }

            if ( sc > photoBoxesOuterLimit ) {

                // if ( !photoBoxesIndSlide.fourthImgSlClass.includes("dont") ) {
                //     setphotoBoxesIndSlide({...photoBoxesIndSlide, fourthImgSlClass: "pb-dont_slide"});
                // }
                checkSlideInside("fourthImgSlClass");
            }
        }
    }

    const checkSlideInside = strIndex => {
        if ( !photoBoxesIndSlide[strIndex].includes("dont") ) {
            setphotoBoxesIndSlide({...photoBoxesIndSlide, [strIndex]: "pb-dont_slide"})
        }
    }

    useEffect( () => {
        window.addEventListener("scroll", scrollEffect);

        return () => window.removeEventListener("scroll", scrollEffect);
    })

    return (
        <>
            <Cover slideUp={slideUp} coverImageSlide={coverImageSlide} coverImageIndSlide={coverImageIndSlide} />
            <MenuFood menuClassChange={menuClassChange}/>
            <Contact />
            <PhotoBoxes photoBoxesIndSlide={photoBoxesIndSlide}/>
        </>
    )
}

export default LandPage;