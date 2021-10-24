import './Cover.css'

const Cover = () => {
    return (
        <div className="cover_container fd">
            <div className="cover_inside fd">
                <div className="cover_image_container fd">
                    <p className="prev_image_container fd">
                        <img src="https://i3.lensdump.com/i/gdsiyC.jpg" alt="">
                            
                        </img>
                    </p>
                    <p className="current_image_container fd">
                        <img src="https://i.lensdump.com/i/gdmyFP.jpg" alt="">
                        
                        </img>
                    </p>
                    <p className="next_image_container fd">
                        <img src="https://i1.lensdump.com/i/gdsAQ2.jpg" alt="">
                        
                        </img>
                    </p>
                </div>
                <div className="cover_middle fd">
                    <h1>
                        Zacc's
                    </h1>
                    <p>
                        Panciteria
                    </p>
                </div>
            </div>
            {/* <div className="cover_images_container fd">
                <p className="current_image_container">
                    <img src="https://i.lensdump.com/i/gdmyFP.jpg" alt="">
                    
                    </img>
                </p>
                <div className="other_image_container">
                    <p className="prev_image_container">
                        <img src="https://i3.lensdump.com/i/gdsiyC.jpg">
                        
                        </img>
                    </p>
                    <p className="next_image_container">
                        <img src="https://i1.lensdump.com/i/gdsAQ2.jpg">
                        
                        </img>
                    </p>
                </div>
            </div> */}
            {/* <div className="style_populus">

            </div> */}
        </div>
    )
}

export default Cover;