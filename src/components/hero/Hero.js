import React from 'react'
// import { Link } from 'react-router-dom';

import HeroImage from '../../assets/final BG.jpg';
import SocialIcon1 from '../../assets/TWITTER.png';
import SocialIcon2 from '../../assets/INSTA.png';
import SocialIcon3 from '../../assets/DISCORD.png';
import SocialIcon4 from '../../assets/YT.png';
import SocialIcon5 from '../../assets/TELEGRAM.png'
import SocialIcon6 from '../../assets/MEDIUM.png';
import './hero.css'

function Hero() {
    return (
        <div className="hero">
            <img src={HeroImage} alt="hero" className='hero-image' />
            <div className="hero-text">
                <h1 className='to-protect'>TO PROTECT</h1>
                <h1 className='green-text-color'>GREEN</h1>
                <h1 className='real-war'>THE REAL WAR BEGIN HERE!</h1>
            </div>

            <div className='hero-social'>
                <img src={SocialIcon1} alt="hero" />
                <img src={SocialIcon2} alt="hero" />
                <img src={SocialIcon3} alt="hero" />
                <img src={SocialIcon4} alt="hero" />
                <img src={SocialIcon5} alt="hero" />
                <img src={SocialIcon6} alt="hero" />
            </div>
        </div>
    )
}

export default Hero
