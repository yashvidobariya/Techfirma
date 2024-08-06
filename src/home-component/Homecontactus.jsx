import React from 'react'
import { motion } from "framer-motion";
import { IoCallSharp } from "react-icons/io5";
import { ImWhatsapp } from "react-icons/im";
import { SiMaildotru } from "react-icons/si";
const Homecontactus = () => {
    return (
        <div className="main-home-contactus">
            {/* <h1>Contact us</h1> */}

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className='home-contactus' >
                <div className="home-contactus-div" >
                    <h2>Neem contact met ons op</h2>
                    <p>We horen graag over uw project. Neem vandaag contact met ons op om te bespreken hoe we u kunnen helpen uw ideeën tot leven te brengen.</p>

                    <div className="contactus-inquiry">
                        <div className="contactus-inquiry-flex">
                            <div className="contactus-inquiry-div">
                                <div className="call-icon">
                                    <IoCallSharp />
                                </div>
                                <div className="button-contactus">
                                    <a href="tel:+31203086820">
                                        <button>Bel ons</button>
                                    </a>
                                </div>

                            </div>

                            <div className="contactus-inquiry-div">
                                <div className="mail-icon">
                                    <SiMaildotru />
                                </div>
                                <div className="button-contactus">
                                    <a href="mailto:info@techfirma.nl">
                                        <button>Mail ons</button>
                                    </a>
                                </div>
                            </div>
                            <div className="contactus-inquiry-div">
                                <div className="whatsapp-icon">
                                    <ImWhatsapp />
                                </div>
                                <div className="button-contactus">
                                    <a href="tel:+31 6 49 35 01 76">
                                        <button>App ons</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="home-contactus-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.5917502051266!2d4.905747376941786!3d52.395950745406005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6084f190c2ec5%3A0x895a0df3ecd8d6c9!2sPapaverweg%2034%2C%20unit%20B100%2C%201032%20KJ%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2sin!4v1722402307900!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </div>

    )
}

export default Homecontactus