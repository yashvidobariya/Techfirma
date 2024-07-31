import React from 'react'
import teamdata from '../../src/Data/teamdata.json';
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const Team = () => {
    return (
        <div className="home-team">
            <div className="home-team-flex">

                <div className="home-team-title">
                    <h6>Waarom kiezen voor TechFirma?</h6>
                    <h1>
                        Versterk uw succes met eersteklas IT-oplossingen!
                    </h1>
                    <motion.p initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}>We hebben een bewezen track record
                        in het leveren van hoogwaardige projecten op tijd en binnen het budget. Ons team excelleert in verschillende programmeertalen en frameworks,waaronder Java, Kotlin, Swift, React/React Native, Flutter en Angular. Met uitgebreide ervaring in databaseontwerp, cloud computing en agile ontwikkelmethodologieën zijn we uitgerust om elk project aan te kunnen, van eenvoudige websites tot complexe mobiele apps. Werk met ons samen om uw visie tot werkelijkheid te maken. Neem vandaag nog contact met ons op om meer te weten te komen over hoe onze diensten uw bedrijf kunnen laten floreren in de digitale wereld.</motion.p>
                </div>

                <div className="home-team-title">
                    {
                        teamdata.map(item => (
                            <div className="team-div" key={item.id}>
                                <div className="team-client">
                                    <span className="number">
                                        <CountUp start={0} end={item.number} duration={4} />
                                    </span>
                                    <span className="plus">+</span>
                                    <p>{item.title}</p>
                                </div>
                                <motion.div
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                    className="team-description">
                                    <div className="team-title">
                                        <p>{item.description}</p>
                                    </div>
                                </motion.div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Team