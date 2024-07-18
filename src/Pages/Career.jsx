import React from 'react'
import { PiRecycle } from "react-icons/pi";
import { PiHandshakeLight } from "react-icons/pi";
import { PiUserSwitchLight } from "react-icons/pi";
// import { RiComputerLine } from "react-icons/ri";
import career from '../Data/career.json';
import { motion } from "framer-motion";
import { MdOutlineCelebration } from "react-icons/md";


const Career = () => {

    return (
        <div className="career-flex">

            <div className="career-label">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="career-uper-section">
                    <h1>Word lid van ons team <br /> en vorm de toekomst</h1>
                    <p>Bij Techfirma zijn we gepassioneerd door innovatie en excellentie. We zijn op zoek naar getalenteerde individuen om zich bij ons dynamische team aan te sluiten en bij te dragen aan baanbrekende projecten. Als je gedreven wordt door creativiteit en gedijt in een samenwerkingsomgeving, laten we dan samen de toekomst bouwen.</p>

                </motion.div>

                <motion.div
                    animate={{ y: [0, -20, 0], transition: { duration: 3, repeat: Infinity } }}
                    className="career-uper-section">
                    <img src='Images/career2.png' alt='career2img' aria-hidden='true' />
                </motion.div>
            </div>


            <div className="home-service">
                <div className="home-service-header">
                    <motion.h2 initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}>Care of Employees</motion.h2>
                    <motion.div
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="home-service-descitption">

                        <p>Bij Techfirma geloven we dat onze medewerkers ons grootste kapitaal zijn. We zijn toegewijd aan het creëren van een ondersteunende en verrijkende omgeving die groei, welzijn en tevredenheid bevordert. Ontdek de unieke voordelen die we onze teamleden bieden.</p>
                    </motion.div>
                </div>



                <div className="service-grid-div">

                    <div className="services-grid" style={{ marginTop: '50px' }}>

                        <div
                            className="service-card" id='service-change-bg-career' >

                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                className="service-icon" id='service-class-change' ><PiUserSwitchLight /></motion.div>
                            <h3 id='service-change' >{career[0].title}</h3>
                            <p id='service-text' >{career[0].description}

                            </p>
                        </div>


                        <div className="service-card" >

                            <div className="workflow-card">
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                    className="service-icon"><PiRecycle /></motion.div>
                                <h3>{career[1].title}</h3>
                                <p>{career[1].description}</p>
                            </div>
                        </div>
                    </div>



                    <div className="services-grid">

                        <div className="service-card">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                className="service-icon"><PiHandshakeLight /></motion.div>
                            <h3>{career[2].title}</h3>
                            <p>{career[2].description}</p>
                        </div>


                        <div className="service-card" id='service-change-career1' >

                            <div className="workflow-card">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                    className="service-icon" id='text-change' ><MdOutlineCelebration /></motion.div>
                                <h3 id='service-text-change' >{career[3].title}</h3>
                                <p id='p-change' >{career[3].description}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <motion.div

                className="career-work"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}>
                <div className="career-work-section">
                    <img src='Images/fancy.png' alt="Careerfancywork" aria-hidden='true' />
                </div>

                <div className="career-uper-section">
                    <h2>Wil je werken voor <br />Techfirma?</h2>
                    <p>Kom bij Techfirma en til je carrière naar een hoger niveau. We zijn op zoek naar getalenteerde, energieke individuen om deel uit te maken van ons innovatieve team. Bij Techfirma geniet je van een reeks voordelen, waaronder concurrerende salarissen, carrièremogelijkheden en een positieve werkomgeving. We bieden flexibele werktijden, geavanceerde technologie en een ondersteunende teamcultuur. Ervaar professionele groei via onze trainingsprogramma's, werk aan impactvolle projecten en werk samen met een wereldwijd klantenbestand. Met royale vakantietijd en een focus op werk-privébalans is Techfirma de ideale plek voor ambitieuze professionals.</p>
                </div>


            </motion.div>


        </div>
    )
}

export default Career


