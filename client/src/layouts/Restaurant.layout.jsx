import React from 'react';
import {MdStarBorder} from 'react-icons/md';
import {RiDirectionLine,RiShareForwardLine} from 'react-icons/ri';
import {BiBookmarkPlus} from 'react-icons/bi';




// components
import Navbar from '../components/Navbar/restaurant';
import Restaurantgrid from '../components/Restaurant/Imagegrid';
import InfoButtons from '../components/Restaurant/InfoButtons';
import Restaurantinfo from '../components/Restaurant/restaurantinfo';


const Restaurantlayout = (props) => {
    return (
        <>
        <div className="container mx auto lg:px-52 ">
            <Navbar/>
            <Restaurantgrid image={["https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"]} />
           <div className="px-2"> <Restaurantinfo/>
           <div className="my-4 flex flex-wrap gap-3 ">
           <InfoButtons isActive>
             <MdStarBorder/> Add Review
            </InfoButtons>
            <InfoButtons >
             <RiDirectionLine/> Direction
            </InfoButtons>
            <InfoButtons >
             <BiBookmarkPlus/> Bookmark
            </InfoButtons>
            <InfoButtons >
             <RiShareForwardLine/> Share
            </InfoButtons>
           </div>
           </div>
           </div>
           {props.children}

      
</>
    )
}

export default Restaurantlayout;
