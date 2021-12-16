// import React from 'react';
// import { useState, useEffect } from 'react';

// import Button from '../custom-btn/Button';
// import './subscribe.css'

// function Subscribe() {
//     const state = {
//         email: ''
//     }
//     const [subscription, setsubscription] = useState(state);
//     const [FormError, setFormError] = useState({});
//     const [IsSubmit, setIsSubmit] = useState(false);

//     const handleChange = e =>{
//         const { name, value } = e.target;
//         setsubscription({
//             [name]: value
//         })
//         console.log(subscription);
//     }

//     const handleSubmit = e =>{
//         e.preventDefault();

//         setFormError( validate(subscription) );
//         setIsSubmit(true);
//     }

//     useEffect( () =>{
//         console.log(FormError);

//         if( Object.keys(FormError).length === 0 && IsSubmit ) {
//             console.log(subscription);
//         }

//     }, [FormError]);

//     const validate = (values) =>{
//         const errors = {};
//         const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//         if(!values.email) {
//             errors.email = 'Email is required!'
//         } else if(!regex.test(values.email)) {
//             errors.email = "This email is not Valid!"
//         }

//         return errors;
//     }

//     return (
//         <div className='subscribe-container'>
//             <h2>JOIN US</h2>
//             <p>For  more  updates</p>

//             <form onSubmit={handleSubmit}>
//                 <input type="email" 
//                     placeholder='Email Address' 
//                     value={subscription.email}
//                     onChange={handleChange}
//                     required 
//                 />
//                 <span>{ FormError.email }</span>
//                 <Button type="submit" smallBtn="small-btn">SUBSCRIBE</Button>
//             </form>
//         </div>
//     )
// }

// export default Subscribe

import React from 'react'

function Subscribe() {
    return (
        <div>
            
        </div>
    )
}

export default Subscribe
