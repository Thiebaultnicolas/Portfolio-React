import '../styles/User.css'
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faScroll,faEnvelope, faXmark} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons";
import CV from '../assets/CV_Nico.pdf'
import {NavLink} from 'react-router-dom';

const User = ({image}) => {
    const [modal, setModal] = useState(false)
    const [modalWindow, setWindow] = useState(false)

    // States pour récuper ta data du formulaire
    const [data, setData] = useState({})
    // state de message de retours en cas de retours
    const [resMsg, setResMsg] = useState(null)
    // state pour stocker le message d'erreure ne cas
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {
            // partie de la fonction qui envoi vers ton back. 
            const res = await fetch("http://localhost:8000/",
                {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }
            )

            if (!res.ok) {
                throw new Error('throw res', res.statusText)
            }

            const json = await res.json()
            // après le fetch il mets le message du res message dans le setResMsg
            setResMsg(json)

            // en cas d'erreur il tombe la dedans et ton message d'erreur est affiché dans le jsx
        } catch (err) {
            setError(err.message) 
        }

    }

      // fonction pour récuperer ta data de ton formulaire. 
      const handleChange = e => setData((data) => ({ ...data, [e.target.name]: e.target.value }))
    
    
    return (
        <div className='presentation'>
            <div className='description'>
                <img src={image} alt="Nicolas" className='image-nicolas'/>
                <div className='column-desription'>
                    <h1 className='name-presentation'>Nicolas<br/>Thiebault </h1>
                    <h2 className="catégorie"> Développeur Front-End</h2>
                </div>
            </div>
            <div className='presentation-social'>
                <a href={CV} download='CV Nicolas' className='lien-cv'>
                    <FontAwesomeIcon className='icon-cv' icon={faScroll} onMouseEnter={() => setModal(c => !c)} onMouseLeave={() => setModal(c => !c)}/> 
                </a>
                {modal && <span className='resume-message'>Mon CV </span>}
                <button className='button-icon-cv' onClick={() => setWindow(c => !c)}>
                    <FontAwesomeIcon className='icon-cv' icon={faEnvelope}/>
                </button>
                {modalWindow && 
               <div className='modal' onClick={()=> setWindow(c => !c)}>
                <form method='post'  className='testform'  onSubmit={handleSubmit} onClick={e=> e.stopPropagation()}>
                    <fieldset className='borderlegend'>
                    <p>
                        <label for="mail">Votre email:</label>
                        <input type="text" name="mail" id="mail" className='widthform' onChange={handleChange} />
                    </p>
                
                    <p>
                        <label for="votre-message">Votre message:</label>
                        <textarea id="votre-message" className='textform'  name='mesage'  onChange={handleChange} ></textarea>
                    </p>
                
                    <input type="submit" value="envoyer"></input>
                    <span className='close-form' onClick={()=> setWindow(c => !c)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                    </fieldset>
                </form>
                                                        
                {/* en cas de message de retours */}
                {resMsg && <p>{resMsg}</p>}
                {/* en cas de message d'erreur */}
                {error && <p>{error}</p>}

            </div>}
                <a href="https://github.com/Thiebaultnicolas" target="_blank" rel="noreferrer nofollow" >
                    <FontAwesomeIcon className='icon-cv' icon={faGithub}/>
                </a>
                <a href="https://www.linkedin.com/in/nicolas-thiebault-b05421237/" target="_blank" rel="noreferrer nofollow"  >
                    <FontAwesomeIcon className='icon-cv' icon={faLinkedin}/>
                </a>
            </div>
            <p>Développeur React, je développe des interfaces modernes tout en restant alerté sur la veille de mes technologies.</p>
        </div>           
        
    );
};

export default User;
