import React,{useEffect,useState} from 'react';
import {MdStarBorder} from 'react-icons/md';
import {RiDirectionLine,RiShareForwardLine} from 'react-icons/ri';
import {BiBookmarkPlus} from 'react-icons/bi';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom'


// components
import Navbar from '../components/Navbar/restaurant';
import Restaurantgrid from '../components/Restaurant/Imagegrid';
import InfoButtons from '../components/Restaurant/InfoButtons';
import Restaurantinfo from '../components/Restaurant/restaurantinfo';
import TabsContainer from '../components/Restaurant/Tabs';
import CartContainer from '../components/Cart/CartContainer';

// actions
import {getSpecificRestaurant} from '../Redux/Reducer/Restaurant/restaurant.action'



const Restaurantlayout = (props) => {
    const [restaurant,setRestaurant] = useState({
        images:[],
        name:"",
        restaurantRating:"",
        deliveryRating:"",
        cuisions:"",
        address:"",
        restaurantTiming:""
    });
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
       dispatch(getSpecificRestaurant(id)).then((data)=>setRestaurant(data.payload.restaurant))
    }, [])

    return (
        <>
        <div className="container mx auto lg:px-52 ">
            <Navbar/>
            <Restaurantgrid image={["https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"]} />
         
           <div className="px-2 "> 
                <Restaurantinfo name={restaurant?.name}
                restaurantRating={restaurant?.restaurantRating||0}
                deliveryRating={restaurant?.deliveryRating||0}
                cuisions={restaurant?.cuisions && restaurant.cuisions.join(", ")}
                address={restaurant?.address}
                restaurantTiming={restaurant?.restaurantTiming}
                />

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
           <div className="relative border-b md:pb-0 md:border-b-2"> 
                 <TabsContainer/></div>
           </div>
          
           </div>
           {props.children}
           <div className="container mx auto  ">
           <CartContainer/>
           </div>

      
</>
    )
}

export default Restaurantlayout;
