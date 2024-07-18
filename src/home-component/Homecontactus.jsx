import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
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
                    <a href="/contactus">
                        <button>Neem contact op</button>
                    </a>

                </div>

            </motion.div>

            <div className="home-contactus-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1968400286432!2d72.8040676110772!3d21.22404168096082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fea420d763d%3A0xc9967fd58cf761db!2sTechfirma!5e0!3m2!1sen!2sin!4v1716464463906!5m2!1sen!2sin" title='Techfirma google map' frameBorder="0"></iframe>

            </div>
        </div>

    )
}

export default Homecontactus