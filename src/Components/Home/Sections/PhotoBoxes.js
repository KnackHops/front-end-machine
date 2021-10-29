import './PhotoBoxes.css'

const batil_img = process.env.REACT_APP_BATIL_IMG
const concha_img = process.env.REACT_APP_CONCHA_IMG
const lomi_img = process.env.REACT_APP_LOMI_IMG
const sisig_img = process.env.REACT_APP_SISIG_IMG

const PhotoBoxes = ( { photoBoxesIndSlide } ) => {
    return (
        <section className="photoboxes_container">
            <div className="universal-container fd">
                <p className={ photoBoxesIndSlide.firstImgSlClass }>
                    <span className="label_container">
                        Batil Patong!
                    </span>
                    <span className="img_container">
                        <img src={batil_img} alt="A northern special noodles called Batil Patong! Most famous in the ever too hot Tuguegarao City."/>
                    </span>
                </p>
                <p className={ photoBoxesIndSlide.secondImgSlClass }>
                    <span className="label_container">
                        Pancit Concha!
                    </span>
                    <span className="img_container">
                        <img src={concha_img} alt="A family recipe noodles called Concha! Derived from the originator of the recipe herself! Lola Concha" />
                    </span>
                </p>
                <p className={ photoBoxesIndSlide.thirdImgSlClass }>
                    <span className="label_container">
                        Lomi!
                    </span>
                    <span className="img_container" >
                    <img src={lomi_img} alt="A soup based noodles called Lomi! Known for it's thick property of soup and noodles" />
                    </span>
                </p>
                <p className={ photoBoxesIndSlide.fourthImgSlClass }>
                    <span className="label_container">
                        Pancit Sisig!
                    </span>
                    <span className="img_container">
                        <img src={sisig_img}  alt="A modern filipino mixed! The ever so tasty sisig on top of a normal pancit!"/>
                    </span>
                </p>
            </div>
        </section>
    )
}

export default PhotoBoxes;