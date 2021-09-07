import React from 'react';

// components
import CheckoutNavbar from '../components/Navbar/checkout';

const Checkoutlayout = (props) => {
    return (
        <>
      
        <div className="lg:px-40">
        <CheckoutNavbar/>  
        </div>
        <hr /> 
        {props.children}
        </>
    )
}

export default Checkoutlayout
