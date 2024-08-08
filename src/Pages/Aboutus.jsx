import React from 'react'
import Team from '../home-component/Team'
import { motion } from "framer-motion";

const Aboutus = () => {
    return (
        <div>
            <div className="about-section">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="contact-header-title">
                    <h1>Over Ons</h1>
                    <p>Bij TechFirma transformeren we ideeën tot digitale meesterwerken.<br /> Sinds onze oprichting leveren we eersteklas web- en mobiele ontwikkelingsdiensten. Ons deskundige team maakt gebruik van de nieuwste technologieën om innovatieve en betrouwbare oplossingen te creëren die zijn afgestemd op uw unieke behoeften. Ga met ons mee op onze reis om digitaal succes en opmerkelijke groei te bereiken.
                    </p>

                </motion.div>
            </div>
            <Team />
        </div>
    )
}

export default Aboutus