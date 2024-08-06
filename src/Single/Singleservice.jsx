
import { useParams } from 'react-router-dom';
import servicesData from '../../src/Data/Servicepage.json';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { IoCallSharp } from "react-icons/io5";
import { ImWhatsapp } from "react-icons/im";
import { SiMaildotru } from "react-icons/si";
const SingleService = () => {
    const { id } = useParams();
    const service = servicesData.find(service => service.id === id);



    if (!service) {
        return <div>Service niet gevonden</div>;
    }

    return (
        <div className="service-flex">
            <div className="service-label">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="service-uper-section"
                >
                    <h1>{service.title}</h1>
                    <p>{service.description}</p>
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="service-uper-section"
                >
                    <img src={service.image} alt="single Service" aria-hidden='true' />
                </motion.div>
            </div>

            <div className="servicedetail">
                <div className="service-content">
                    <div className="servicedetail-h1">
                        <h3>{service.subtitle}</h3>
                    </div>
                    <div className="servicedetail-des">
                        <p>
                            {service.info}
                        </p>
                    </div>
                    <div className="service-details-flex">

                        <div className="service-main-div">
                            <h3>Technologieën & Hulpmiddelen</h3>
                            <div className="serivce-grid-details">
                                {Object.entries(service.Technology).map(([category, details]) => (
                                    <div className='service-details-content' key={category}>
                                        <h4>{category}</h4>
                                        <p>{details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="service-feature">
                        <div className="service-feature-div">
                            {Object.entries(service.Features).map(([category, details]) => (
                                <div className="service-feature-details" key={category}>
                                    <h3>{category}</h3>
                                    <p>{details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="service-details-flex">

                        <div className="service-main-div">
                            <h3>Ons {service.title}proces</h3>
                            <div className="serivce-grid-details">
                                {Object.entries(service.DevelopmentProcess).map(([category, details]) => (
                                    <div className='service-details-content' key={category}>
                                        <h4>{category}</h4>
                                        <p>{details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className='home-contactus' >
                <div className="home-contactus-div" >
                    <h2>Heeft u wensen die u met ons wilt delen?  </h2>

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


        </div>
    );
}

export default SingleService;
