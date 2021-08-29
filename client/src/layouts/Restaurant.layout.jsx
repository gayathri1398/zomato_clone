import React from 'react';


// components
import Navbar from '../components/Navbar/restaurant';

const Restaurantlayout = (props) => {
    return (
        <div>
            <Navbar/>
            {props.children}
        </div>
    )
}

export default Restaurantlayout;
