import axios from 'axios';

// type
import { GET_RESTAURANT,GET_SPECIFICRESTAURANT } from './restaurant.type';

export const getRestaurant =()=>async(dispatch)=>{                           // 12
   try {
       const restaurantList = await axios ({
           method:"GET",
           url:"http://localhost:4000/restaurant?city=ooty"
       });
       return dispatch({type: GET_RESTAURANT, payload:restaurantList.data})
       
   } catch (error) {
       return dispatch ({type:"ERROR",payload:error});
   }
};

export const getSpecificRestaurant=(_id)=>async(dispatch)=>{
   try {
       const specificRestaurant = await axios({
           method: "GET",
           url:`http://localhost:4000/restaurant/${_id}`
       })
       return dispatch({type:GET_SPECIFICRESTAURANT, payload:specificRestaurant.data})
   } catch (error) {
       return dispatch({type:"ERROR",payload:error})
   }
}