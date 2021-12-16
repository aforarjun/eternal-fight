import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/EF logo.png';
import './header.css'

function Header() {
    return (
        <div className="header">
            <Link to='/' className="logo">
                <img src={Logo} alt="logo" />
            </Link>

            <ul className="links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/airdrop">Airdrop</Link>
                <Link className="link" to="/roadmap">Roadmap</Link>
                <Link className="link" to="tpkenomics">Tokenomics</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/contact">Contact</Link>
            </ul>
        </div>
    )
}

export default Header
