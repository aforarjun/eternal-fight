import React from 'react';

import './section.css';

function Section( {title, autoHeight} ) {
    return (
        <div className= { `${autoHeight != null ? 'auto-height' : ''} section`}>
            <h1 className='title'>{title}</h1>
        </div>
    )
}

export default Section
