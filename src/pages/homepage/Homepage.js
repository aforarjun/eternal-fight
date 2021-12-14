import React from 'react'

import './homepage.css'
import Hero from '../../components/hero/Hero'
import Button from '../../components/custom-btn/Button'
import Section from '../../components/intro-section/Section'
import Step from '../../components/roadmap-step/Step'
import Subscribe from '../../components/subscribe/Subscribe'

function Homepage() {
    return (
        <div className="home-page">
            <Hero />

            <div className='map-container'>
                <div className='white-paper-btn'>
                    <Button>Whitepater</Button>
                    <Button>Airdrop</Button>
                </div>

                <Section title='INTRODUCTION' />

                <Section title='ROADMAP' autoHeight='auto-height' />

                <Step stepTitle='PHASE 01' />

                <Step stepTitle='PHASE 02' />

                <Step stepTitle='PHASE 03' />

                <Step stepTitle='PHASE 04' />

                <Section title='SUPPORTERS & INVESTERS' />

                <Subscribe />

                <Section title='CONTACT US' />
            </div>
        </div>
    )
}

export default Homepage
