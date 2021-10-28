import './PhotoBoxes.css'

const PhotoBoxes = ( { photoBoxesIndSlide } ) => {
    return (
        <section className="photoboxes_container">
            <div className="universal-container fd">
                <p className={ photoBoxesIndSlide.firstImgSlClass }>
                    <span className="label_container">
                        Batil Patong!
                    </span>
                    <span className="img_container">
                        <img src="https://i.lensdump.com/i/gdCbVA.jpg" alt="A northern special noodles called Batil Patong! Most famous in the ever too hot Tuguegarao City."/>
                    </span>
                </p>
                <p className={ photoBoxesIndSlide.secondImgSlClass }>
                    <span className="label_container">
                        Pancit Concha!
                    </span>
                    <span className="img_container">
                        <img src="https://i1.lensdump.com/i/gdCwnM.jpg" alt="A family recipe noodles called Concha! Derived from the originator of the recipe herself! Lola Concha" />
                    </span>
                </p>
                <p className={ photoBoxesIndSlide.thirdImgSlClass }>
                    <span className="label_container">
                        Lomi!
                    </span>
                    <span className="img_container" >
                    <img src="https://i2.lensdump.com/i/gdCx5Q.jpg" alt="A soup based noodles called Lomi! Known for it's thick property of soup and noodles" />
                    </span>
                </p>
                <p className={ photoBoxesIndSlide.fourthImgSlClass }>
                    <span className="label_container">
                        Pancit Sisig!
                    </span>
                    <span className="img_container">
                        <img src="https://i3.lensdump.com/i/gdC5Ta.jpg"  alt="A modern filipino mixed! The ever so tasty sisig on top of a normal pancit!"/>
                    </span>
                </p>
            </div>
        </section>
    )
}

export default PhotoBoxes;