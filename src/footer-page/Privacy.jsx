import React from 'react'
import { motion } from "framer-motion";

const Privacy = () => {
    return (
        <>
            <div className='privacy'>
                <div className="privacy-div">
                    <h1>Privacybeleid</h1>
                    <p>Bedankt dat u ervoor hebt gekozen deel uit te maken van onze gemeenschap bij TechFirma ("Bedrijf", "wij", "ons", "onze"). We zijn toegewijd aan het beschermen van uw persoonlijke informatie en uw recht op privacy.</p>

                </div>
            </div>

            <div className="privacy-section">
                <div className="privacy-flex">
                    <div className="privacy-details">
                        <p> </p>

                        <p>Als u vragen of zorgen heeft over deze privacyverklaring of onze praktijken met betrekking tot uw persoonlijke informatie, kunt u contact met ons opnemen via <a href="mailto: contact@Techfirma.com" aria-hidden='contact email'>contact@techfirma.com</a></p>

                        <p>Wanneer u onze website <a href="www.Techfirma.com" aria-hidden='visit website link'>www.techfirma.com</a> bezoekt (de "Website") en meer in het algemeen gebruik maakt van een van onze diensten (de "Diensten", waaronder de Website), stellen wij het op prijs dat u ons vertrouwt met uw persoonlijke informatie.</p>

                        <p>Wij nemen uw privacy zeer serieus. In deze privacyverklaring proberen we u op de duidelijkst mogelijke manier uit te leggen welke informatie we verzamelen, hoe we deze gebruiken en welke rechten u hebt met betrekking tot deze informatie.</p>


                        <p>We hopen dat u de tijd neemt om het zorgvuldig door te lezen, want het is belangrijk. Als er termen in deze privacyverklaring zijn waar u het niet mee eens bent, stop dan onmiddellijk met het gebruik van onze diensten.</p>

                        <p>Deze privacyverklaring is van toepassing op alle informatie die wordt verzameld via onze diensten (die, zoals hierboven beschreven, onze Website omvatten), evenals eventuele gerelateerde diensten, verkoop, marketing of evenementen. Lees deze privacyverklaring zorgvuldig door om te begrijpen wat we doen met de informatie die we verzamelen.</p>

                        <h3 className='privacy-title'>1. Welke informatie verzamelen we?</h3>

                        <p>De persoonlijke informatie die u aan ons verstrekt. Kort gezegd: we verzamelen persoonlijke informatie die u aan ons verstrekt. We verzamelen persoonlijke informatie die u vrijwillig aan ons verstrekt wanneer u interesse toont in het verkrijgen van informatie over ons of onze producten en diensten, wanneer u deelneemt aan activiteiten op de Website of anderszins wanneer u contact met ons opneemt.</p>

                        <p>De persoonlijke informatie die we verzamelen, is afhankelijk van de context van uw interacties met ons en de Website, de keuzes die u maakt, en de producten en functies die u gebruikt. De persoonlijke informatie die we verzamelen, kan het volgende omvatten:</p>

                        <h5>Door u verstrekte persoonlijke informatie.</h5>
                        <p>We verzamelen namen; telefoonnummers; e-mailadressen; postadressen; en andere soortgelijke informatie.</p>

                        <p>Alle persoonlijke informatie die u aan ons verstrekt, moet waar, volledig en nauwkeurig zijn, en u moet ons op de hoogte stellen van eventuele wijzigingen in dergelijke persoonlijke informatie.</p>

                    </div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="privacy-description">
                        <img src='/Images/privacyimg.png' aria-hidden="true" />
                    </motion.div>
                </div>
            </div>



            <div className="privacy-security">
                <div className="privacy-que">
                    <div className="privacy-details-que">

                        <h5>Automatisch verzamelde informatie</h5>

                        <p>Enkele informatie — zoals uw Internet Protocol (IP) adres en/of browser- en apparaatkenmerken — wordt automatisch verzameld wanneer u onze website bezoekt. We verzamelen automatisch bepaalde informatie wanneer u de website bezoekt, gebruikt of navigeert. Deze informatie onthult uw specifieke identiteit niet (zoals uw naam of contactgegevens), maar kan apparaat- en gebruiksinformatie omvatten, zoals uw IP adres, browser en apparaatkenmerken, besturingssysteem, taalvoorkeuren, verwijzende URL's, apparaatnaam, land, locatie, informatie over hoe en wanneer u onze website gebruikt en andere technische informatie. Deze informatie is voornamelijk nodig voor het onderhouden van de beveiliging en werking van onze website, en voor onze interne analyse- en rapportagedoeleinden.</p>

                        <p>Zoals veel bedrijven verzamelen we ook informatie via cookies en vergelijkbare technologieën.</p>

                        <h5>De informatie die we verzamelen omvat:</h5>
                        <h5>Log- en Gebruiksgegevens</h5>

                        <p>Log- en gebruiksgegevens zijn servicegerelateerde, diagnostische, gebruik- en prestatie-informatie die onze servers automatisch verzamelen wanneer u onze website gebruikt of er toegang toe krijgt, en die we registreren in logbestanden. Afhankelijk van hoe u met ons interageert, kunnen deze loggegevens uw IP adres, apparaatinformatie, browsertype en -instellingen en informatie over uw activiteit op de website omvatten (zoals de datum/tijd-stempels geassocieerd met uw gebruik, pagina's en bestanden bekeken, zoekopdrachten en andere acties die u onderneemt zoals welke functies u gebruikt), apparaatgebeurtenis-informatie (zoals systeemactiviteit, foutmeldingen (soms 'crashdumps' genoemd) en hardware-instellingen).</p>

                        <h5>Apparaatgegevens</h5>

                        <p>We verzamelen apparaatgegevens zoals informatie over uw computer, telefoon, tablet of andere apparaten die u gebruikt om toegang te krijgen tot de website. Afhankelijk van het gebruikte apparaat kan deze apparaatgegevens informatie omvatten zoals uw IP adres (of proxyserver), apparaat- en applicatie-identificatienummers, locatie, browsertype, hardwaremodel, internet service provider en/of mobiele provider, besturingssysteem en systeemconfiguratie-informatie.</p>

                        <h5>Locatiegegevens</h5>
                        <p>We verzamelen locatiegegevens zoals informatie over de locatie van uw apparaat, die zowel nauwkeurig als onnauwkeurig kan zijn. Hoeveel informatie we verzamelen, hangt af van het type en de instellingen van het apparaat dat u gebruikt om toegang te krijgen tot de website. Bijvoorbeeld, we kunnen GPS en andere technologieën gebruiken om geolocatiegegevens te verzamelen die ons uw huidige locatie vertellen (op basis van uw IP adres). U kunt ervoor kiezen om ons te verhinderen deze informatie te verzamelen door toegang tot de informatie te weigeren of door de locatie-instelling op uw apparaat uit te schakelen.</p>

                        <p>Let op: als u ervoor kiest om dit uit te schakelen, kunt u mogelijk bepaalde aspecten van de diensten niet gebruiken.</p>

                        <h3 className='privacy-title'>2. Hoe gebruiken we uw informatie?</h3>
                        <p>We verwerken uw informatie voor doeleinden die gebaseerd zijn op legitieme zakelijke belangen, de uitvoering van ons contract met u, naleving van onze wettelijke verplichtingen en/of uw toestemming. We gebruiken persoonlijke informatie die via onze website is verzameld voor verschillende zakelijke doeleinden die hieronder worden beschreven. We verwerken uw persoonlijke informatie voor deze doeleinden op basis van onze legitieme zakelijke belangen om een contract met u aan te gaan of uit te voeren, met uw toestemming, en/of om te voldoen aan onze wettelijke verplichtingen. We geven aan op welke specifieke verwerkingsgronden we vertrouwen naast elk hieronder vermeld doel.</p>


                        <h5>We gebruiken de informatie die we verzamelen of ontvangen</h5>
                        <p>Om administratieve informatie naar u te sturen. We kunnen uw persoonlijke informatie gebruiken om u informatie te sturen over producten, diensten en nieuwe functies, en/of informatie over wijzigingen in onze voorwaarden, condities en beleid.</p>

                        <p>Om onze diensten te beschermen. We kunnen uw informatie gebruiken als onderdeel van onze inspanningen om onze website veilig en beveiligd te houden (bijvoorbeeld voor fraude monitoring en preventie).</p>



                        <p>Om onze voorwaarden, condities en beleid te handhaven voor zakelijke doeleinden, om te voldoen aan wettelijke en regelgevende vereisten, of om verbinding te maken met ons contract.</p>

                        <p>Om te reageren op juridische verzoeken en schade te voorkomen. Als we een dagvaarding of ander juridisch verzoek ontvangen, moeten we mogelijk de gegevens die we bewaren inspecteren om te bepalen hoe we moeten reageren.</p>

                        <p>Om u marketing- en promotionele communicaties te sturen. Wij en/of onze marketingpartners van derden kunnen de persoonlijke informatie die u ons stuurt gebruiken voor onze marketingdoeleinden, indien dit in overeenstemming is met uw marketingvoorkeuren. Bijvoorbeeld, wanneer u interesse toont in het verkrijgen van informatie over ons of onze website, zich abonneert op marketing, of anderszins contact met ons opneemt, zullen we persoonlijke informatie van u verzamelen.</p>

                        <p>U kunt zich op elk moment afmelden voor onze marketing e-mails (zie de "WAT ZIJN UW PRIVACYRECHTEN?" hieronder). ​</p>

                        <p>Gerichte advertenties aan u bezorgen. We kunnen uw informatie gebruiken om gepersonaliseerde inhoud en advertenties te ontwikkelen en weer te geven (en samen te werken met derden die dit doen) afgestemd op uw interesses en/of locatie en om de effectiviteit ervan te meten.</p>


                        <h3 className='privacy-title'>3. Wordt uw informatie gedeeld met anderen?</h3>

                        <p>We delen alleen informatie met uw toestemming, om te voldoen aan wetten, om u diensten te verlenen, om uw rechten te beschermen, of om zakelijke verplichtingen na te komen.</p>

                        <p>We kunnen uw gegevens die we hebben verwerken of delen op basis van de volgende juridische grondslagen:</p>

                        <p>Toestemming: We kunnen uw gegevens verwerken als u ons specifieke toestemming heeft gegeven om uw persoonlijke informatie te gebruiken voor een specifiek doel.</p>

                        <p>Legitieme belangen: We kunnen uw gegevens verwerken wanneer dit redelijkerwijs nodig is om onze legitieme zakelijke belangen te bereiken.</p>

                        <p>Uitvoering van een contract: Als we een contract met u hebben gesloten, kunnen we uw persoonlijke informatie verwerken om aan de voorwaarden van ons contract te voldoen.</p>

                        <p>Wettelijke verplichtingen: We kunnen uw informatie bekendmaken wanneer we wettelijk verplicht zijn om dit te doen om te voldoen aan toepasselijke wetgeving, overheidsverzoeken, een gerechtelijke procedure, gerechtelijk bevel of juridische procedures, zoals in reactie op een gerechtelijk bevel of een dagvaarding (inclusief in reactie op openbare autoriteiten om te voldoen aan nationale veiligheids- of rechtshandhavingsvereisten).</p >

                        <p>Vitale belangen: We kunnen uw informatie bekendmaken wanneer we van mening zijn dat dit nodig is om mogelijke schendingen van ons beleid te onderzoeken, te voorkomen of aan te pakken, vermoede fraude, situaties die mogelijke bedreigingen voor de veiligheid van een persoon en illegale activiteiten inhouden, of als bewijs in rechtszaken waarbij we betrokken zijn.</p>

                        <p>Meer specifiek moeten we uw gegevens mogelijk verwerken of uw persoonlijke informatie delen in de volgende situaties:?</p>

                        <p>Bedrijfsoverdrachten. We kunnen uw informatie delen of overdragen in verband met, of tijdens onderhandelingen over, een fusie, verkoop van bedrijfsmiddelen, financiering of overname van ons hele bedrijf of een deel daarvan aan een ander bedrijf.</p >

                    </div>

                    <div className="privacy-details-que">
                        <h3 className='privacy-title'>4. Gebruiken we cookies en andere trackingtechnologieën?</h3>

                        <p>We kunnen cookies en andere trackingtechnologieën gebruiken om uw informatie te verzamelen en op te slaan.</p>

                        <p>We kunnen cookies en vergelijkbare trackingtechnologieën (zoals webbakens en pixels) gebruiken om toegang te krijgen tot of informatie op te slaan. Specifieke informatie over hoe we dergelijke technologieën gebruiken en hoe u bepaalde cookies kunt weigeren, staat vermeld in onze Cookie Notice.
                        </p>
                    </div>


                    <div className="privacy-details-que">
                        <h3 className='privacy-title'>5. Hoe lang bewaren we uw informatie?</h3>

                        <p>We bewaren uw informatie zolang als nodig is om de in deze privacyverklaring uiteengezette doeleinden te vervullen, tenzij anders vereist door de wet.</p>

                        <p>We bewaren uw persoonlijke informatie alleen zolang het nodig is voor de doeleinden die in deze privacyverklaring worden uiteengezet, tenzij een langere bewaartermijn vereist of toegestaan is door de wet (zoals belasting-, boekhoudkundige of andere wettelijke vereisten). Geen enkel doel in deze verklaring vereist dat we uw persoonlijke informatie langer bewaren dan 2 jaar.</p>

                    </div>


                    <div className="privacy-details-que">
                        <h3 className='privacy-title'>6. Hoe beveiligen we uw informatie?</h3>

                        <p>We streven ernaar uw persoonlijke informatie te beschermen door middel van een systeem van organisatorische en technische beveiligingsmaatregelen.</p>

                        <p>We hebben passende technische en organisatorische beveiligingsmaatregelen geïmplementeerd die zijn ontworpen om de beveiliging van alle persoonlijke informatie die we verwerken te beschermen. Echter, ondanks onze waarborgen en inspanningen om uw informatie te beveiligen, kan geen enkele elektronische verzending via internet of informatietechnologie gegarandeerd 100% veilig zijn, dus we kunnen niet beloven of garanderen dat hackers, cybercriminelen of andere ongeautoriseerde derden onze beveiliging kunnen verslaan, en uw informatie onjuist kunnen verzamelen, toegang kunnen verkrijgen, stelen of wijzigen.</p>

                        <p>Hoewel we ons best zullen doen om uw persoonlijke informatie te beschermen, is de verzending van persoonlijke informatie naar en van onze website op eigen risico. U moet alleen toegang krijgen tot de website binnen een veilige omgeving.</p>
                    </div>

                    <div className="privacy-details-que">
                        <h3 className='privacy-title'>7. Verzamelen we informatie van minderjarigen?</h3>

                        <p>We vragen niet bewust gegevens op van of vermarkten niet aan kinderen jonger dan 18 jaar. Door de website te gebruiken, verklaart u dat u ten minste 18 jaar bent of dat u de ouder of voogd bent van zo'n minderjarige en stemt u in met het gebruik van de website door die minderjarige. Als we erachter komen dat persoonlijke informatie van gebruikers jonger dan 18 jaar is verzameld, zullen we het account deactiveren en redelijke maatregelen nemen om dergelijke gegevens snel uit onze gegevens te verwijderen. Als u zich bewust wordt van gegevens die we mogelijk hebben verzameld van kinderen jonger dan 18 jaar, neem dan contact met ons op via info[.at.]Techfirma[.dot.]email.</p>

                    </div>


                    <div className="privacy-details-que">
                        <h3 className='privacy-title'>8. Wat zijn uw privacyrechten?</h3>

                        <p>In sommige regio's, zoals de Europese Economische Ruimte (EER) en het Verenigd Koninkrijk (VK), heeft u rechten die u meer toegang tot en controle over uw persoonlijke informatie geven. U kunt op elk moment uw account bekijken, wijzigen of beëindigen.</p>

                        <p>In sommige regio's (zoals de EER en het VK) heeft u bepaalde rechten op grond van toepasselijke gegevensbeschermingswetten. Deze kunnen het recht omvatten (i) om toegang te vragen en een kopie van uw persoonlijke informatie te verkrijgen, (ii) om rectificatie of verwijdering te verzoeken; (iii) om de verwerking van uw persoonlijke informatie te beperken; en (iv) indien van toepassing, op gegevensoverdraagbaarheid. In bepaalde omstandigheden kunt u ook het recht hebben om bezwaar te maken tegen de verwerking van uw persoonlijke informatie. Om een dergelijk verzoek te doen, gebruik dan de contactgegevens die hieronder worden verstrekt. We zullen elk verzoek overwegen en handelen in overeenstemming met toepasselijke gegevensbeschermingswetten.</p>
                        <p>Als we uw toestemming gebruiken om uw persoonlijke informatie te verwerken, heeft u het recht om uw toestemming op elk moment in te trekken. Let op dat dit echter geen invloed heeft op de rechtmatigheid van de verwerking vóór de intrekking, noch heeft het invloed op de verwerking van uw persoonlijke informatie die wordt uitgevoerd op basis van wettelijke verwerkingsgronden anders dan toestemming.</p>

                        <p>Als u inwoner bent van de EER of het VK en u van mening bent dat we uw persoonlijke informatie onrechtmatig verwerken, heeft u ook het recht om een klacht in te dienen bij uw lokale toezichthoudende autoriteit voor gegevensbescherming. U kunt hun contactgegevens hier vinden: Nationale Autoriteiten voor Gegevensbescherming</p>
                    </div>

                    <div className="privacy-details-que">
                        <h3 className='privacy-title'>9. Controles voor niet-volgen functies</h3>

                        <p>De meeste webbrowsers en sommige mobiele besturingssystemen en mobiele applicaties bevatten een Do-Not-Track ("DNT") functie of instelling die u kunt activeren om uw privacyvoorkeur aan te geven om geen gegevens over uw online browseactiviteiten te laten monitoren en verzamelen. Op dit moment is er nog geen uniforme technologische standaard voor het herkennen en implementeren van DNT signalen vastgesteld.</p>

                        <p>Als zodanig reageren we momenteel niet op DNT browser signalen of enige andere mechanisme dat automatisch uw keuze communiceert om online niet te worden gevolgd. Als een standaard voor online tracking wordt aangenomen die we in de toekomst moeten volgen, zullen we u informeren over die praktijk in een herziene versie van deze privacyverklaring.</p>

                    </div>

                    <div className="privacy-details-que">
                        <h3 className='privacy-title'>10. Maken we updates aan deze verklaring?</h3>

                        <p>Ja, we zullen deze verklaring bijwerken indien nodig om te voldoen aan relevante wetten.</p>

                        <p>We kunnen deze privacyverklaring van tijd tot tijd bijwerken. De bijgewerkte versie wordt aangegeven door een bijgewerkte "Herzien" datum en de bijgewerkte versie wordt van kracht zodra deze toegankelijk is. Als we materiële wijzigingen aanbrengen in deze privacyverklaring, kunnen we u hiervan op de hoogte stellen door een melding van dergelijke wijzigingen prominent te plaatsen of door u rechtstreeks een kennisgeving te sturen. We moedigen u aan om deze privacyverklaring regelmatig te bekijken om op de hoogte te blijven van hoe we uw informatie beschermen.
                        </p>
                    </div>

                    {/* <div className="privacy-details-que">
                        <h3 className='privacy-title'>11. Hoe kunt u contact met ons opnemen over deze verklaring?</h3>

                        <p>Als u vragen of opmerkingen heeft over deze verklaring, kunt u ons e-mailen op <a href="mailto: contact@Techfirma.com" aria-hidden='contact email'>contact@Techfirma.com</a></p>

                        <p>Techfirma </p>
                        <p>4e verdieping, 20, Shree Nilkanth Business
                            hub</p>
                        <p>Causeway Rd, tegenover D-Mart,</p>
                        <p>Katargam, Surat, Gujarat 395004.</p>
                    </div> */}

                    <div className="privacy-details-que">
                        <h3 className='privacy-title'>3. Wordt uw informatie met iemand gedeeld?</h3>

                        <p>We delen alleen informatie met uw toestemming, om te voldoen aan wetten, om u diensten te verlenen, om uw rechten te beschermen of om zakelijke verplichtingen na te komen.</p>

                        <p>We kunnen uw gegevens die we bewaren verwerken of delen op basis van de volgende juridische grondslagen:</p>

                        <p>Toestemming: We kunnen uw gegevens verwerken als u ons specifieke toestemming heeft gegeven om uw persoonlijke informatie voor een specifiek doel te gebruiken.</p>

                        <p>Legitieme belangen: We kunnen uw gegevens verwerken wanneer het redelijkerwijs noodzakelijk is om onze legitieme zakelijke belangen te behartigen.</p>

                        <p>Uitvoering van een overeenkomst: Als we een overeenkomst met u zijn aangegaan, kunnen we uw persoonlijke informatie verwerken om de voorwaarden van onze overeenkomst te vervullen.</p>

                        <p>Wettelijke verplichtingen: We kunnen uw informatie bekendmaken wanneer we wettelijk verplicht zijn om dit te doen om te voldoen aan toepasselijke wetgeving, overheidsverzoeken, een gerechtelijke procedure, gerechtelijk bevel of juridische processen, zoals in antwoord op een gerechtelijk bevel of een dagvaarding (inclusief in antwoord op openbare autoriteiten om te voldoen aan nationale veiligheids- of rechtshandhavingsvereisten).</p >

                        <p>Vitale belangen: We kunnen uw informatie bekendmaken wanneer we van mening zijn dat dit nodig is om mogelijke schendingen van onze beleidsregels te onderzoeken, fraude te vermoeden, situaties te betrekken die mogelijke bedreigingen voor de veiligheid van een persoon en illegale activiteiten inhouden, of als bewijs in rechtszaken waarbij we betrokken zijn.</p>

                        <p>Meer specifiek moeten we uw gegevens mogelijk verwerken of uw persoonlijke informatie delen in de volgende situaties:?</p>

                        <p>Bedrijfsoverdrachten. We kunnen uw informatie delen of overdragen in verband met, of tijdens onderhandelingen over, een fusie, verkoop van bedrijfsmiddelen, financiering of overname van ons hele bedrijf of een deel daarvan aan een ander bedrijf.</p >

                    </div>


                </div >

            </div>
        </>
    )
}

export default Privacy