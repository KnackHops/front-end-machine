import './PhotoBoxes.css'

const PhotoBoxes = () => {
    return (
        <section className="photoboxes_container">
            <div className="universal-container fd">
                <p>
                    <span className="img_container">
                        <img src="https://i.lensdump.com/i/gdCbVA.jpg" />
                    </span>
                    <span>
                        Pancit Sisig!
                    </span>
                </p>
                <p>
                    <span>
                        Pancit Sisig!
                    </span>
                    <span className="img_container">
                        <img src="https://i1.lensdump.com/i/gdCwnM.jpg" />
                    </span>
                </p>
                <p>
                    <span className="img_container">
                    <img src="https://i2.lensdump.com/i/gdCx5Q.jpg" />
                    </span>
                    <span>
                        Pancit Sisig!
                    </span>
                </p>
                <p>
                    <span>
                        Pancit Sisig!
                    </span>
                    <span className="img_container">
                        <img src="https://i3.lensdump.com/i/gdC5Ta.jpg" />
                    </span>
                </p>
            </div>
        </section>
    )
}

export default PhotoBoxes;