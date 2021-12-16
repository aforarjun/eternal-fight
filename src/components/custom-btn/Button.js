import React from 'react';

import './button.css';

function Button( {children, smallBtn} ) {
    return (
        <div className={ `${smallBtn != null ? 'small-btn' : ''} custom-btn`}>
            {children}
        </div>
    )
}

export default Button;
