import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCakeCandles, faCar, faEnvelope, faLocationDot, faPhone, faSuitcase} from "@fortawesome/free-solid-svg-icons";
import image_nico_cv from '../assets/photo_nicolas_cv.jpg'
import '../styles/Cv.css'
import { NavLink } from 'react-router-dom';


const Cv = () => {
  return (
    <>
     
        <div className='information'>

            <div className='header'>
            <NavLink to={`/`} className='lien-home'>
                <h1>Nicolas Thiebault</h1>
            </NavLink>
            </div>

            <article className='user_and_picture'>
            
            <section className='user'>
    

                <h2 className='title_information'>INFORMATION PERSONELLES</h2>

                <div className='information_user'>
                    <FontAwesomeIcon className='icon_cv' icon={faEnvelope}></FontAwesomeIcon> 
                    <p>nicolasthiebault80870@yahoo.com</p> 
                </div>

                <div className='information_user'>
                    <FontAwesomeIcon className='icon_cv' icon={faPhone}></FontAwesomeIcon> 
                    <p>06-51-46-79-20</p>
                </div>

                <div className='information_user'>
                    <FontAwesomeIcon className='icon_cv' icon={faLocationDot}></FontAwesomeIcon> 
                    <p>15 Rue Victor Schoelcher - 09000 Foix</p>
                </div>

                <div className='information_user'>
                    <FontAwesomeIcon className='icon_cv' icon={faCar}></FontAwesomeIcon> 
                    <p>Titulaire du permis B</p>
                </div>

                <div className='information_user'>
                    <FontAwesomeIcon className='icon_cv' icon={faCakeCandles}></FontAwesomeIcon> 
                    <p>30/11/1996</p>
                </div>

            </section>

            <div className='picture_cv'>
                <img src={image_nico_cv} alt="Nicolas_cv" className='picture_nicolas_cv' />
            </div>

            </article>


            <article className='information_experiences'>
                <section className='experiences_and_langue'>
                    <div className='experiences'>
                        <h2>EXPERIENCES PROFESSIONNELLES</h2>

                        <p> SARL le Claireau - Appeville-Annebault 27290 - agent piscicol<br></br>
                        Bénévolat 1 mois - 01/12/2022 au 24/12/2022</p>
                        <p><strong>OPENCLASSROOMS - Formation Déloppeur web <br></br> 
                        7 mois - 07/05/2022 au 07/11/2022</strong> </p>
                        <p>AHG Auriol masques - Varilhes 09324 - opérateur.<br></br>
                        Intérim 1 mois - 04/11/21 au 26/11/21.</p>
                        <p>Hôtel le Cap Hornu - Saint-Valéry sur Somme 80230 - serveur / barman.<br></br>
                        CDD 3 mois - 24/08/20 au 15/11/20.</p>
                        <p>Express marée - Bègles 33130 - préparation de marchandises.<br></br>
                        CTT - été 2019.</p>
                        <p>SARL KIM POR - Mérignac 33700 - serveur en restauration.<br></br>
                        CDD 2 mois - 05/03/19 au 04/05/19.</p>
                        <p>Idée et cadeaux - Quint-Fonsegrives 31130 - vendeur en boulangerie.<br></br>
                        CDD 5 mois - 27/09/18 au 15/03/19.</p>
                        <p>SCAM TP - Garidech 31380 - géomètre.<br></br>
                        CDD 7 mois - 08/01/18 au 08/07/18.</p>
                        <p>COLAS - Varilhes 09120 - géomètre.<br></br>
                        CDD 4 mois - 19/06/17 au 19/10/17.</p>
                    </div>
                    <div className='logiciel_and_langue'>
                        <h2>LOGICIELS UTILISES</h2>
                        <ul>
                            <li>Visual Studio Code</li>
                            <li>Sublime Text</li>
                            <li>Mensura</li>
                            <li>Autocad covadis</li>
                            <li>Pack office</li>
                        </ul>
                        <h2 className='title_langues'>LANGUES</h2>
                        <ul>
                            <li>Anglais -  niveau A1</li>
                            <li>Espagnol - niveau A2</li>
                        </ul>
                    </div>
                </section>

                <section className="training_and_hobby">
                    <div className='training'>
                        <h2>FORMATIONS</h2>
                        <p><strong>OPENCLASSROOMS - organisation de formation diplomante en ligne.<br></br>
                        2022 : Diplôme Intégrateur Développeur web  .</strong>
                        </p>
                        <p>LYCÉE JEAN PROUVÉ - Lomme 59160.<br></br>
                        2016-2017 : BTS MGTMN en alternance chez LHOTELLIER.
                        </p>
                        <p>CAMPUS DES MÉTIERS DES TRAVAUX PUBLICS - 2013-2016<br></br>
                        Bruay la Bussière 62700.<br></br>
                        BEP Géomètre Topographe.<br></br>
                        BAC Professionnel Géomètre Topographe.<br></br>
                        </p>
                    </div>
                    <div className='Hobby'>
                        <h2>LOISIRS</h2>
                        <ul>
                            <li>Lecture</li>
                            <li>Jeux-vidéo</li>
                            <li>Sport (football / randonnée)</li>
                            <li>Recherche web/trouver/s'informer</li>
                        </ul>
                    </div>
                </section>
                <div className='certificate'>
                    <h2>CERTIFICATIONS WEB</h2>
                    <a href="https://www.linkedin.com/in/nicolas-thiebault-b05421237/details/certifications/" target="_blank" rel="noreferrer nofollow" > 
                    <FontAwesomeIcon className='bagage' icon={faSuitcase}/>
                    </a>
                </div>
            </article>
        </div>
    </>
  );
};

export default Cv