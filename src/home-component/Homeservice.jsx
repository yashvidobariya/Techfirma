import React from 'react'
import { RiAppleFill } from "react-icons/ri";
import { TiVendorAndroid } from "react-icons/ti";
import { SiAltiumdesigner } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import servicedata from '../Data/service.json';
import { motion } from "framer-motion";

const icons = {
    RiComputerLine: <RiComputerLine />,
    RiAppleFill: <RiAppleFill />,
    TiVendorAndroid: <TiVendorAndroid />,
    SiAltiumdesigner: <SiAltiumdesigner />
};


const Homeservice = () => {
    return (

        <div className="home-service">
            <div className="home-service-header">
                <motion.h1 initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}>Onze Expertise</motion.h1>
                <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="home-service-descitption">
                    <p>Bij Techfirma bieden we een uitgebreid scala aan digitale oplossingen die zijn ontworpen om uw bedrijf te versterken. Van geavanceerde webontwikkeling tot intuïtieve mobiele applicates, ons deskundige team zorgt voor uitmuntendheid in elke fase.</p>
                </motion.div>
            </div>



            <div className="service-grid-div">
                <div className="services-grid" style={{ marginTop: '50px' }}>
                    <div
                        className="service-card" id='service-change-bg' >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className="service-icon" id='service-text-change' >{icons.RiComputerLine}</motion.div>
                        <h3 id='service-text-change-h3' >{servicedata[0].title}</h3>
                        <p id='service-text-change-p' >{servicedata[0].description}
                        </p>
                    </div>


                    <div className="service-card">

                        <div className="workflow-card">
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                className="service-icon">{icons.RiAppleFill}</motion.div>
                            <h3>{servicedata[1].title}</h3>
                            <p>{servicedata[1].description}</p>
                        </div>
                    </div>
                </div>



                <div className="services-grid">

                    <div className="service-card">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            className="service-icon">{icons.TiVendorAndroid} </motion.div>
                        <h3>{servicedata[2].title}</h3>
                        <p>{servicedata[2].description}
                        </p>
                    </div>


                    <div className="service-card" id='service-change-bg1' >

                        <div className="workflow-card">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                className="service-icon" id='service-class-change' ><SiAltiumdesigner /></motion.div>
                            <h3 id='service-text-h3' >{servicedata[3].title}</h3>
                            <p id='service-text-h4' >{servicedata[3].description}</p>
                        </div>
                    </div>


                </div>

            </div>


        </div>

    )
}

export default Homeservice