import React from 'react'
// import { Link } from 'react-router-dom';

import HeroImage from '../../assets/hero.png';
// import SocialIcon1 from '../../assets/';
// import SocialIcon2 from '../../assets/hero.png';
// import SocialIcon3 from '../../assets/hero.png';
// import SocialIcon4 from '../../assets/hero.png';
// import SocialIcon5 from '../../assets/hero.png';
// import SocialIcon6 from '../../assets/hero.png';
import './hero.css'

function Hero() {
    return (
        <div className="hero">
            <img src={HeroImage} alt="hero" className='hero-image' />
            <div className="hero-text">
                <h1>TO PROTECT</h1>
                <h1 className='green-text-color'>GREEN</h1>
                <h1>THE REAL WAR BEGIN HERE!</h1>
            </div>

            <div className='hero-social'>
                { // <img src={SocialIcon1} alt="hero" className='hero-image' />
                // <img src={SocialIcon2} alt="hero" className='hero-image' />
                // <img src={SocialIcon3} alt="hero" className='hero-image' />
                // <img src={SocialIcon4} alt="hero" className='hero-image' />
                // <img src={SocialIcon5} alt="hero" className='hero-image' />
                // <img src={SocialIcon6} alt="hero" className='hero-image' /> 
                }
            </div>
        </div>
    )
}

export default Hero
