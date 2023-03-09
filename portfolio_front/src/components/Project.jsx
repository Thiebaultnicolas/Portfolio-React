import '../styles/Project.css'
import React from 'react';

const project = ({image, title, description, code, website, sourcecode}) => {
    return (
        <div className='project'>
            <img src={image} alt="booki" className='image-project'/>
            <h3 className="title_legende">{title}</h3>
            <p className='legende'>{description}</p>
            <p><strong>{code}</strong></p>
            <div className='button'>
                <div className="buttontest">
                    <a href={website} target="_blank" className='lien_site'>
                        <p className='textebutton'>Website</p>
                    </a>
                </div>
                <div className='buttontest'>
                    <a href={sourcecode} target="_blank" className='lien_site'>
                        <p className="textebutton">Source code</p> 
                    </a>   
                </div>
            </div>
        </div>
    );
    
};

export default project;