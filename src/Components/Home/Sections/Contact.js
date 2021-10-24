import './Contact.css'
import MapLiesHere from './MapLiesHere';

const Contact = () => {

    return (
        <section className="contact_container">
            <div>
                <div className="contact_inside fd">
                    <div className="contact_info fd">
                        <h1>Contact Us</h1>
                            <div className="fb_con">
                                <h2>Facebook</h2>
                                <ul>
                                    <li><a href="https://www.facebook.com/amado.telan.9" target="_blank">Amado Telan</a></li>
                                    <li><a href="https://www.facebook.com/cherrypie.nicolas" target="_blank">Cherry Pie Telan</a></li>
                                    <li><a href="https://www.facebook.com/ZACCs-Shawarma-2327963654123657" target="_blank">Facebook Page</a></li>
                                </ul>
                            </div>
                        <div className="mobile_con">
                            <h2>Mobile Number</h2>
                            <ul>
                                <li><p>0997 170 0167</p></li>
                                <li><p>09###########</p></li>
                            </ul>
                        </div>
                    </div>
                    <MapLiesHere />
                </div>
            </div>
        </section>
    )
}

export default Contact;