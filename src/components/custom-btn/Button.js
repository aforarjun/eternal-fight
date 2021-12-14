import React from 'react';

import './button.css';

function Button( {children} ) {
    return (
        <div className='custom-btn'>
            {children}
        </div>
    )
}

export default Button;
