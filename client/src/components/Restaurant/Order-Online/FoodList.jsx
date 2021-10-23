import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';

// components
import FoodItem from './FoodItem';

import { getFood, getFoodList } from '../../../Redux/Reducer/Food/food.action';



const FoodList = (props) => {
    // const [menu,setMenu] = useState([{}])
   
    // const dispatch = useDispatch();
    
    // const reduxState = useSelector((globalStore)=>(globalStore.restaurant.selectedRestaurant.restaurant) );
    

    // useEffect(()=>{
    //     reduxState && (
    //     dispatch(getFoodList(reduxState?.menu)).then((data)=>setMenu(data.payload.menus.menus) ));
        
    //   },[reduxState]);



    //   console.log(menu[0].items)
    return (
        <>
    
            <div className="sticky top-2 text-lg md:text-2xl p-2 bg-white z-20" >
              {props.name}
              
            <div className="flex flex-col gap-3">
             {props.items?.map((item)=>(
             <FoodItem key={item} _id={item} />  
           
             ))} 
             </div>
                
             </div>   
     
     
        </>
    )
}
//  {props.name}
//key={item} _id={item}
// {menu?.map((...item)=> (
    {/* <FoodItem _id="61680b86bd80642650394ecb" /> 
             <FoodItem _id="61680b86bd80642650394ecb" />   */}

export default FoodList
