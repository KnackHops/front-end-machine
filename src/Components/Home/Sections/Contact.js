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
                                    <li><a href="https://www.facebook.com/messages/t/100041573508459" target="_blank" rel="nofollow">Amado Telan</a></li>
                                    {/* "https://www.facebook.com/amado.telan.9" */}
                                    <li><a href="https://www.facebook.com/messages/t/100000226643288" target="_blank" rel="nofollow">Cherry Pie Telan</a></li>
                                    {/* "https://www.facebook.com/cherrypie.nicolas" */}
                                    <li><a href="https://www.facebook.com/messages/t/2327963654123657" target="_blank" rel="nofollow">Facebook Page</a></li>
                                    {/* "https://www.facebook.com/ZACCs-Shawarma-2327963654123657" */}
                                </ul>
                            </div>
                        <div className="mobile_con">
                            <h2>Mobile Number</h2>
                            <ul>
                                <li><p>0997 170 0167</p></li>
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