import './Cover.css'

const Cover = () => {
    return (
        <div className="cover_container fd">
            {/* <p className="prev_image_container">
                <img>
                
                </img>
            </p> */}
            <p className="current_image_container fd">
                <img src="https://i.lensdump.com/i/gdmyFP.jpg" alt="">
                
                </img>
            </p>
            {/* <p className="next_image_container">
                <img>
                
                </img>
            </p> */}
            <ul className="cover_btn_container fd">
                <li className="prev_btn_container" onClick={()=>console.log("hello")}><button aria-label="previous image" /></li>
                <li className="next_btn_container"><button aria-label="next image" /></li>
            </ul>
            <div className="style_populus">

            </div>
        </div>
    )
}

export default Cover;