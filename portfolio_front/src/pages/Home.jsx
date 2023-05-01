import React from 'react';
import Header from '../components/Header';
import User from '../components/User';
import Project from '../components/Project';
import Stack from '../components/Stack';
import profilepicture from '../assets/photo_nicolas.jpg'
import imagebooki from '../assets/screen_booki.PNG'
import imageohmyfood from '../assets/screen_Ohmyfood.PNG'
import imagekanap from '../assets/screen_Kanap.PNG'
import imagepanthere from '../assets/screen_Panthere.PNG'
import imagekasa from '../assets/screen_Kasa.PNG'
import imagePokédex from '../assets/screen_Pokédex.png'
import '../styles/Home.css'


const Home = () => {
    return (
        <>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>

            <div className='body-wrapper'>
                
                <div className='wrapper'>
                    <Header />
                    <div className='section_user'>
                        <User image={profilepicture} />
                        <Stack/>
                    </div>
                    <div className='borderproject'>
                        <h1>Portfolio </h1>
                        <div className="projecthome">
                            <Project image={imagekasa}title="Kasa" description="Création d'une application web de location immobilière" code="Html5-Css3-JS-React" website="https://thiebault-nicolas-projet7-kasa.netlify.app/"  sourcecode="https://github.com/Thiebaultnicolas/P7-Kasa" />
                            <Project image={imageohmyfood} title="Oh my food" description="Intégration d'une maquette avec animation" code="Html5-Css3" website="https://thiebaultnicolas.github.io/Ohmyfood/"  sourcecode="https://github.com/Thiebaultnicolas/Projet3-Ohmyfood"/>
                            <Project image={imagePokédex} title="Kanap" description="Construction d'un Pokédex" code="Html5-Css3-JS-Angular" website="https://ng-pokemon-app-f8efc.web.app/login"  sourcecode="https://github.com/Thiebaultnicolas/Pokemon-pokedex-Angular" />
                        </div>
                        <div className="projecthome2">
                            <Project image={imagepanthere}title="La Panthère" description="Optimisation d'un site web existant" code="Référencement-SEO" website="https://thiebaultnicolas.github.io/debuggez-votre-site-SEO/"  sourcecode="https://github.com/Thiebaultnicolas/Projet4" />
                            <Project image={imagebooki} title="Booki" description="Intégration d'une maquette" code="Html5-Css3" website="https://thiebaultnicolas.github.io/Booki/"  sourcecode="https://github.com/Thiebaultnicolas/Projet2-Booki" />
                            <Project image={imagekanap} title="Kanap" description="Construction d'un site e-commerce" code="Html5-Css3-JS" website="http://thiebault-nicolas.fr:3001/html"  sourcecode="https://github.com/Thiebaultnicolas/projet5-Construisez-un-site-e-commerce-en-JavaScript" />
                        </div>
                    </div>
                </div> 
            </div>
        </>
    );
};

export default Home;
