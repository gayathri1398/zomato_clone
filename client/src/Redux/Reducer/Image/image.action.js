import axios from "axios";


// types
import { GET_IMAGE } from "./image.type";

export const getImages =()=>async(dispatch)=>{
    try {
       const images = await axios ({
         method:"GET",
         url:"http://localhost:4000/image"
        })
        return dispatch({type:GET_IMAGE,payload:images.data});
    } catch (error) {
        return dispatch ({type:"ERROR",payload:error});
    }

}