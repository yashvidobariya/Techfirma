import React, { useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { BiMailSend } from "react-icons/bi";
import { TbPhoneCall } from "react-icons/tb";
import { motion } from "framer-motion";
import contactDetails from '../Data/contact.json';
import axios from 'axios';

const icons = {
    IoLocationSharp: <IoLocationSharp />,
    BiMailSend: <BiMailSend />,
    TbPhoneCall: <TbPhoneCall />
};

const Contactus = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [message, setmessage] = useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();
        const date = new Date();
        const data = {
            name,
            email,
            phonenumber,
            message,
            datetime: date.toISOString()
        };
        try {
            const response = await axios.post("https://sheet.best/api/sheets/d046cb77-c9c6-42c6-a055-0d80ddba4768", data);
            console.log(response);
            setname('');
            setemail('');
            setphonenumber('');
            alert('Bericht succesvol verzonden!');
        } catch (error) {
            console.error(error);
            alert('Bericht verzenden mislukt. Probeer het opnieuw.');

        }
    };

    return (
        <div className="main-contactus">
            <div className="contactus-section">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="contact-header-title"
                >
                    <h1>Neem contact met ons op</h1>
                    <p>Klaar om uw bedrijf naar een hoger niveau te tillen? Neem vandaag nog contact met ons op om te ontdekken hoe onze expertise u kan helpen uw doelen te bereiken. Ons team staat klaar om uw vragen te beantwoorden en de ondersteuning te bieden die u nodig heeft.</p>
                </motion.div>
            </div>

            <div className="contactus-form">
                <div className="form-main-div">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="form-content"
                    >
                        <div className="form-box">
                            <h2>Contactgegevens</h2>
                            <p>We zijn hier om te helpen! Neem contact met ons op via een van de volgende methoden en ons team zal snel bij u terugkomen. Of u nu vragen heeft over onze diensten of ondersteuning nodig heeft, we staan altijd klaar om te helpen.</p>
                            {contactDetails.map((detail, index) => (
                                <div key={index} className="form-flex">
                                    <div className="form-icon">
                                        {icons[detail.icon]}
                                    </div>
                                    <div className="form-details">
                                        <h4>{detail.heading}</h4>
                                        {detail.icon === "BiMailSend" ? (
                                            <a href={`mailto:${detail.content}`} aria-hidden='true'>{detail.content}</a>
                                        ) : detail.icon === "TbPhoneCall" ? (
                                            <>
                                                <a href={`tel:${detail.content}`} aria-hidden='true'>{detail.content}</a><br />
                                                <a href={`tel:${detail.content1}`} aria-hidden='true'>{detail.content1}</a>
                                            </>
                                        ) : (
                                            <>
                                                <p>{detail.content}</p>
                                                <p>{detail.content1}</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="form-content"
                    >
                        <form onSubmit={handlesubmit}>
                            <div className="form-contactus">
                                <div className="contactus-title">
                                    <h2>Neem contact op</h2>
                                    <p>Heeft u een vraag of wilt u uw project bespreken? Stuur ons een bericht en we nemen zo snel mogelijk contact met u op.</p>

                                    <div className="contactus-input">
                                        <div className="contactus-input-flex">
                                            <div className="contactus-label">
                                                <input type="text" placeholder="Uw naam" onChange={(e) => setname(e.target.value)} value={name} required />
                                            </div>
                                            <div className="contactus-label">
                                                <input type="email" placeholder="E-mailadres" onChange={(e) => setemail(e.target.value)} value={email} required />
                                            </div>
                                            <div className="contactus-label">
                                                <input type="text" placeholder="Telefoonnummer" onChange={(e) => setphonenumber(e.target.value)} value={phonenumber} required />
                                            </div>
                                        </div>
                                        <div className="contactus-message">
                                            <div className="contactus-textarea">
                                                <textarea placeholder="Schrijf uw bericht" onChange={(e) => setmessage(e.target.value)} value={message} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contactus-submit">
                                        <button type="submit">Bericht versturen</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>

            <div className="home-contactus-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1968400286432!2d72.8040676110772!3d21.22404168096082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fea420d763d%3A0xc9967fd58cf761db!2sTechfirma!5e0!3m2!1sen!2sin!4v1716464463906!5m2!1sen!2sin" title="map Techfirma"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
};

export default Contactus;
