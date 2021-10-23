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
                                    <li><a href="https://www.facebook.com/amado.telan.9">Amado Telan</a></li>
                                    <li><a href="https://www.facebook.com/cherrypie.nicolas">Cherry Pie Telan</a></li>
                                    <li><a href="https://www.facebook.com/search/top?q=zacc%E2%80%99s%20shawarma">Facebook Page</a></li>
                                </ul>
                            </div>
                        <div className="mobile_con">
                            <h2>Mobile Number</h2>
                            <ul>
                                <li><p>09###########</p></li>
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