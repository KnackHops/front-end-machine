import './Cover.css'

const prev_img = process.env.REACT_APP_PREV_IMG
const cur_img = process.env.REACT_APP_CUR_IMG
const nxt_img = process.env.REACT_APP_NXT_IMG

const Cover = ( { slideUp, coverImageSlide, coverImageIndSlide } ) => {
    return (
        <div className="cover_container fd">
            <div className="cover_inside fd">
                <div className="cover_image_container fd" 
                    style={
                        {
                            transform: `translateY(-${coverImageSlide}px)`, 
                            opacity: 1 - ( ( coverImageSlide * 1.25 ) * .010 )
                        }
                    }>
                    <p className="prev_image_container fd"
                        style={
                            {
                                transform: `translateY(-${ coverImageIndSlide.firstImgSl }px)`, 
                                opacity: 1 - ( ( coverImageIndSlide.firstImgSl * 1.25 ) * .010 )
                            }
                        }>
                        <img src={prev_img} alt="">
                            
                        </img>
                    </p>
                    <p className="current_image_container fd"
                        style={
                            {
                                transform: `translateY(-${ coverImageIndSlide.secondImgSl }px)`, 
                                opacity: 1 - ( ( coverImageIndSlide.secondImgSl * 1.25 ) * .010 )
                            }
                        }>
                        <img src={cur_img} alt="">
                        
                        </img>
                    </p>
                    <p className="next_image_container fd"
                        style={
                            {
                                transform: `translateY(-${ coverImageIndSlide.thirdImgSl }px)`, 
                                opacity: 1 - ( ( coverImageIndSlide.thirdImgSl * 1.25 ) * .010 )
                            }
                        }>
                        <img src={nxt_img} alt="">
                        
                        </img>
                    </p>
                </div>
                <div className="cover_middle fd" style={{transform: `translateY(-${slideUp}px)`, opacity: 1 - ( (slideUp * 1.25) * .010)}}>
                    <h1>
                        Zacc's
                    </h1>
                    <p>
                        Panciteria
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cover;