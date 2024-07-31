import React, { useRef, useEffect } from 'react';
import { RiAppleFill } from "react-icons/ri";
import { TiVendorAndroid } from "react-icons/ti";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { CiMobile1 } from "react-icons/ci";
import { GrCode } from "react-icons/gr";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import servicesData from '../../src/Data/Servicepage.json';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import reviews from '.././Data/reviews.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';


const icons = {
    TiVendorAndroid: <TiVendorAndroid />,
    RiAppleFill: <RiAppleFill />,
    RiComputerLine: <RiComputerLine />,
    SiAntdesign: <SiAntdesign />,
    FaFileInvoiceDollar: <FaFileInvoiceDollar />,
    CiMobile1: <CiMobile1 />,
    GrCode: <GrCode />
};

const Services = () => {

    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className='main-service'>
            <div className="service-flex">
                <div className="service-label">
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="service-uper-section"
                    >
                        <h1>Onze Diensten</h1>
                        <p>Bij Techfirma bieden we een uitgebreid pakket aan digitale diensten aan die zijn ontworpen om aan uw unieke zakelijke behoeften te voldoen. Ons team van experts maakt gebruik van de nieuwste technologieën om innovatieve en betrouwbare oplossingen te leveren. Ontdek ons scala aan diensten en ontdek hoe wij u kunnen helpen uw digitale doelen te bereiken.</p>

                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -20, 0], transition: { duration: 3, repeat: Infinity } }}
                        className="service-uper-section"
                    >
                        <img src='/Images/Service.png' aria-hidden='true' alt="Service" />
                    </motion.div>
                </div>
            </div>

            <div className="service-grid">
                <div className="service-div-title">
                    <h2>Ontdek onze expertise</h2>
                </div>
                <div className="service-section">
                    <motion.div
                        className="service-box"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                    >
                        {servicesData.map(service => (
                            <motion.div
                                key={service.id}
                                className="service-container"
                                variants={itemVariants}
                                viewport={{ once: true }}
                            >
                                <div className="service-icon">
                                    {icons[service.icon]}
                                </div>
                                <div className="service-des">
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>
                                    <Link to={`/services/servicedetails/${service.id}`}>Bekijk meer</Link>
                                </div>
                            </motion.div>

                        ))}
                    </motion.div>

                </div>
            </div>

        </div>
    );
}

export default Services;
