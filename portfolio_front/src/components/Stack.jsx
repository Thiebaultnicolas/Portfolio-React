import React from 'react';
import '../styles/Stack.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHtml5,faCss3Alt,faSquareJs,faGitAlt,faReact,faSass, faNodeJs} from "@fortawesome/free-brands-svg-icons";

const Stack = () => {
    return (
        <div className='border-stack'>
            <h1>Stack</h1>
            <div className='stack-user'>
            <FontAwesomeIcon icon={faHtml5} className="iconstack"/>
            <FontAwesomeIcon icon={faCss3Alt} className="iconstack"/>
            <FontAwesomeIcon icon={faSquareJs} className="iconstack"/>
            <FontAwesomeIcon icon={faSass} className="iconstack"/>
            <FontAwesomeIcon icon={faGitAlt} className="iconstack"/>
            <FontAwesomeIcon icon={faReact} className="iconstack"/>
            <FontAwesomeIcon icon={faNodeJs} className="iconstack"/>
            </div>
        </div>           
    );
};

export default Stack;