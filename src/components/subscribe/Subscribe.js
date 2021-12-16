import React from 'react';
import Button from '../custom-btn/Button';

import './subscribe.css'

function Subscribe() {

    return (
        <div className='subscribe-container'>
            <h2>JOIN US</h2>
            <p>For  more  updates</p>

            <form>
                <input type="email" placeholder='Email Address' required />

                <Button type="submit" smallBtn="small-btn">SUBSCRIBE</Button>
            </form>
        </div>
    )
}

export default Subscribe
