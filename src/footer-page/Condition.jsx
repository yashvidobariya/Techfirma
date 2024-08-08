import React from 'react';
import { motion } from "framer-motion";

const Condition = () => {
    return (
        <>
            <div className='privacy'>
                <div className="privacy-div">
                    <h1>Algemene Voorwaarden</h1>
                    <p>TechFirma onderhoudt deze website voor informatie over onze producten en diensten. Voel u vrij om de website te verkennen.</p>
                </div>
            </div>

            <div className="privacy-section">
                <div className="privacy-flex">
                    <div className="privacy-details">

                        <h2 className='privacy-title'>Informatie die we verzamelen</h2>
                        <p className='privacy-term'>Uw toegang tot en gebruik van de website is ook onderworpen aan de volgende algemene voorwaarden en toekomstige revisies indien van toepassing ("Algemene Voorwaarden") en alle toepasselijke wetten. Door de website te bezoeken en te browsen, accepteert u de onderstaande Algemene Voorwaarden.</p>

                        <ul className='privacy-infomation-ul'>

                            <li>De website en alle inhoud, materialen, informatie, software, producten en diensten die op de website worden aangeboden, worden geleverd op basis van "zoals het is" en "zoals beschikbaar". NISL wijst uitdrukkelijk alle garanties van welke aard dan ook af, expliciet of impliciet, inclusief, maar niet beperkt tot, de impliciete garantie van verkoopbaarheid, geschiktheid voor een bepaald doel en niet-inbreuk.</li>

                            <li>De inhoud en de projecten die op de website worden beschreven of afgebeeld, kunnen zonder voorafgaande kennisgeving worden gewijzigd. Toekomstig materiaal kan auteursrechtelijk beschermd zijn. Ongeoorloofde opname van dergelijk materiaal zou in strijd zijn met de toepasselijke auteursrechtwetten.</li>

                            <li>NISL aanvaardt geen verantwoordelijkheid en is niet aansprakelijk voor eventuele schade aan uw computer, apparatuur of andere eigendommen als gevolg van uw toegang tot, gebruik van of browsen op de website of uw downloaden van materiaal, gegevens, tekst, afbeeldingen, video of audio van de website.</li>

                            <li>Materialen die op de website worden weergegeven zijn eigendom van NISL of worden met toestemming gebruikt. Het gebruik van deze materialen door u of iemand anders die door u is geautoriseerd, is verboden tenzij uitdrukkelijk toegestaan door deze Algemene Voorwaarden of er schriftelijke toestemming is verkregen van NISL. Elk ongeoorloofd gebruik van de afbeeldingen kan inbreuk maken op auteursrechtwetten, merkenwetten, de wetten inzake privacy en publiciteit.</li>

                            <li>NISL is niet verantwoordelijk voor de inhoud van andere websites die via links vanaf de website worden bereikt. Het bezoeken van andere sites via links op de website is volledig voor uw eigen risico. Hoewel NISL links op de website kan verstrekken naar andere sites, dient de opname van dergelijke links alleen voor uw gemak en mag dit niet worden opgevat als een goedkeuring van de eigenaar/sponsor van de site of de inhoud op de andere site/s. Onder voorbehoud van de Niet-Uitsluitbare Rechten (hierboven), wijst NISL alle garanties, expliciet en impliciet, af met betrekking tot de nauwkeurigheid, geldigheid, wettigheid of anderszins van enig materiaal of informatie op dergelijke sites.</li>

                            <li>Het is verboden om materiaal te plaatsen of te verzenden dat onwettig, bedreigend, lasterlijk, beledigend, obsceen, pornografisch of godslasterlijk is, of materiaal dat zou kunnen leiden tot gedrag dat een strafbaar feit zou kunnen vormen of aanleiding zou kunnen geven tot civiele aansprakelijkheid of anderszins een wet zou overtreden.</li>

                            <li>NISL kan deze Algemene Voorwaarden te allen tijde herzien door deze post bij te werken. Aangezien u gebonden bent aan deze Algemene Voorwaarden, bezoek deze pagina dan regelmatig om meer te weten te komen over eventuele herziene Algemene Voorwaarden.</li>
                        </ul>

                    </div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="privacy-description">
                        <img src='/Images/condition.png' alt="team & condition" aria-hidden='true' />
                    </motion.div>
                </div>

            </div >
        </>
    )
}

export default Condition;
