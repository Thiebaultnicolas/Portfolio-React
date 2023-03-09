import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";
import '../styles/Header.css'



const Header = () => {
    return (
    <>
        <div className='Headerpages'>
            <button aria-label="dark mode switch" className="switch_light">
            <FontAwesomeIcon className="test" icon={faLightbulb}/>
            </button>
            <ul className='menu'>
           
            </ul>
        </div>
        
    </>
    );
};

export default Header;