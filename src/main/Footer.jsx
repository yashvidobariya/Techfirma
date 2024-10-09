import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineMail, MdOutlinePhoneIphone } from "react-icons/md";
import { FaRegMap } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiViewTimeline } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io5";

function Footer() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <div className='footer'>
            <div className="footer-div">

                <div className="footer-main">

                    <div className="footer-content">
                        <div className='logo'>
                            <img src='/Images/logo.png' alt='footer-techfirma' style={{ width: 40 }} />
                            <div class="techfirma-logo">
                                <span class="tech">TECH</span><span class="firma">FIRMA</span>
                            </div>
                        </div>
                        <h3>Over Ons</h3>
                        <p>Bij TechFirma versterken we kleine tot middelgrote bedrijven door innovatieve IT-oplossingen te bieden die groei stimuleren en duurzaamheid garanderen. We zijn toegewijd aan uw succes en streven naar uitmuntendheid in alles wat we doen.</p>

                        <div className="footer-icons">
                            {/* <div className="footer-social">
                                <div className="footer-col">
                                    <a href='https://www.linkedin.com/' ><BiLogoLinkedin /></a>
                                </div>
                                <div className="footer-col">
                                    <a href='https://www.instagram.com/' > <IoLogoInstagram /></a>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="footer-content" style={{ textAlign: 'center' }}>
                        <h3>Snelle Links</h3>
                        <div className="footer-link">
                            <p>
                                <Link
                                    to="/"
                                    className={activeLink === '/' ? 'active' : ''}
                                >
                                    Home
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="/aboutus"
                                    className={activeLink === '/aboutus' ? 'active' : ''}
                                >
                                    Over Ons
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="/services"
                                    className={activeLink === '/services' ? 'active' : ''}
                                >
                                    Diensten
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="/career"
                                    className={activeLink === '/career' ? 'active' : ''}
                                >
                                    Carrière
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="/contactus"
                                    className={activeLink === '/contactus' ? 'active' : ''}
                                >
                                    Contact
                                </Link>
                            </p>
                            <h4>Openingstijden</h4>
                            <p className='footer-time'>Maandag t/m vrijdag:<br />
                                9:00 – 17:00<br />
                                Buiten deze tijden kunt u ons mailen.</p>
                        </div>
                    </div>

                    <div className="footer-content">
                        <h3>Contact</h3>
                        <div className="footer-info">
                            <div className="footer-col">
                                <MdOutlineMail />
                            </div>
                            <div className="footer-email-content">
                                <a href='mailto:info@techfirma.nl' aria-hidden='contact email'>info@techfirma.nl</a>
                            </div>
                        </div>

                        <div className="footer-info">
                            <div className="footer-col">
                                <MdOutlinePhoneIphone />
                            </div>
                            <div className="footer-email-content">
                                <a href='tel:+31 20 308 68 20' aria-hidden='tel phonenumber'>+31 20 308 68 20</a>
                            </div>
                        </div>


                        <div className="footer-info">
                            <div className="footer-col">
                                <IoLogoWhatsapp />
                            </div>
                            <div className="footer-email-content">
                                <a href='tel:+31 6 49 35 01 76' aria-hidden='tel phonenumber'>+31 6 49 35 01 76</a>
                            </div>

                        </div>
                        <div className="footer-info">
                            <div className="footer-col">
                                <FaRegMap />
                            </div>
                            <div className="footer-email-content">
                                <a href='#' aria-hidden='true'>Papaverweg 34 - unit B100<br />
                                    1032KJ Amsterdam
                                </a>
                            </div>
                        </div>
                        <div className="footer-info">
                            <div className="footer-col">
                                <CiViewTimeline />
                            </div>
                            <div className="footer-email-content">
                                <a href='#' aria-hidden='true'>KVK : 94442371<br />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-privacy">
                    <div className="footer-flex">
                        <div className="footer-copyrigth">
                            <p>&#169; 2024 Alle rechten voorbehouden - TechFirma.nl</p>
                        </div>

                        <div className="footer-term">
                            <div className="footer-privacy-link">
                                <Link className={activeLink === '/privacy' ? 'active' : ''} to="/privacy">Privacybeleid </Link>
                            </div>
                            <div className="footer-term">
                                <p>|</p>
                            </div>
                            <div className="footer-term">
                                <Link className={activeLink === '/condition' ? 'active' : ''} to="/condition"> Algemene Voorwaarden
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
