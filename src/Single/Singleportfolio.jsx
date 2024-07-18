import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Data/slider.json';
import { motion } from "framer-motion";

const Singleportfolio = () => {
    const { id } = useParams();

    const portfolioitem = data.find(item => item.id === parseInt(id));

    if (!portfolioitem) {
        return <div>Portfolio-item niet gevonden</div>;
    }

    console.log(portfolioitem);

    return (
        <>
            <div className="potfolio-detail-section">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="contact-header-title">
                    <h1>{portfolioitem.title}</h1>
                    <p>{portfolioitem.description}</p>
                </motion.div>
            </div>

            <div className="service-flex">
                <div className="portfolio-label">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="service-uper-section"
                    >
                        <img src={portfolioitem.image} alt="Service portfolio" aria-hidden='true' />
                    </motion.div>
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="portfolio-uper-section"
                    >


                        <h2>{portfolioitem.title}</h2>
                        <div className="portfolio-details-list">
                            <ul>
                                {portfolioitem.description && <li><p>{portfolioitem.description}</p></li>}
                                {portfolioitem.technology && <li><p>{portfolioitem.technology}</p></li>}
                                {portfolioitem.info && <li><p>{portfolioitem.info}</p></li>}
                                {portfolioitem.type && <li><p>{portfolioitem.type}</p></li>}
                            </ul>
                        </div>


                    </motion.div>
                </div>

            </div>

        </>
    );
}

export default Singleportfolio;
