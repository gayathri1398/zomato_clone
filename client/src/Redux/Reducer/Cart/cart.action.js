
import { ADD_CART, GET_CART , DELETE_CART, INCREMENT_CART, DECREMENT_CART} from "./cart.type";

export const getCart=()=>async(dispatch)=>{
    try {
        let cartData = { cart:[] };

        if(localStorage.zomatoCart){
            const { cart } = localStorage.getItem(JSON.parse("zomatoCart"));
            cartData.cart= cart;
        }
        return dispatch({type:GET_CART, payload:cartData.cart})

    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
}

export const addCart =(newFood)=>async(dispatch)=>{
    try {
        let cartData = {cart:[]};
        
        if(localStorage.zomatoCart){
            const {cart} = localStorage.getItem(JSON.parse("zomatoCart"));
            cartData.cart = cart;
        }
        
        cartData.cart.push(newFood);

        localStorage.setItem(zomatoCart, JSON.stringify({cart: cartData.cart}));
     
        return dispatch({type:ADD_CART, payload: cartData.cart})
    } catch (error) {
        return dispatch({type:"ERROR", payload:error});
    }
}

export const deleteCart=(foodId)=>async(dispatch)=>{
    try {
        let cartData = {cart:[]};

        if(localStorage.zomatoCart){
            const {cart}= localStorage.getItem(JSON.parse("zomatoCart"));
            cartData.cart = cart;
        };

        if(!cartData.cart.length){
            return dispatch({type:"ERROR", payload:"Cart is Empty!"})
        }

        cartData.cart= cartData.cart.filter(({id})=> _id!==foodId);

        localStorage.setItem(zomatoCart, JSON.stringify({cart: cartData.cart}));

        return dispatch({type:DELETE_CART, payload: cartData.cart})

    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
};

export const incCart =()=>async(dispatch)=>{
    try {
        let cartData = {cart:[]};
        if(localStorage.zomatoCart){
            const {cart} = localStorage.getItem("zomatoCart");
            cartData.cart = cart;
        }

        
    } catch (error) {
        
    }
}