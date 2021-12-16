import React from 'react';

import './step.css';

function Step( {stepTitle} ) {
    return (
        <div className='roadmap-step'>
            <h1 className='step-title'>PHASE <span>{stepTitle}</span></h1>


        </div>
    )
}

export default Step;
