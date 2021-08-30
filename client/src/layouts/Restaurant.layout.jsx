import React from 'react';




// components
import Navbar from '../components/Navbar/restaurant';
import Restaurantgrid from '../components/Restaurant/Imagegrid';


const Restaurantlayout = (props) => {
    return (
        <>
        <div className="container mx auto lg:px-40">
            <Navbar/>
            <Restaurantgrid image={["https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"]} />
            {props.children}
           </div>

      
</>
    )
}

export default Restaurantlayout;
