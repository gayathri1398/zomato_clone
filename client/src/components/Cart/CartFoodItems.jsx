import React,{useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';

// actions
import { addCart } from '../../Redux/Reducer/Cart/cart.action';


const CartFoodItems = (props) => {
    const [cartData,setCartData] = useState([]);
    const dispatch = useDispatch();


    useEffect(()=>{
     dispatch(addCart()).then (data => setCartData(data.payload))
    },[])

    console.log(cartData);
  
  return (
        <div className="flex items-center justify-between p-2 z-40">
        <h1 className="text-base">{props.food}</h1>
        <div className="flex flex-col items-end">
            <p> ₹{props.price}</p>
            <div className="flex items-center bg-zomato-400 text-white px-2 py-1 gap-3 rounded-lg">
                <button>-</button>
                <span>{props.quantity}</span>
                <button>+</button>
            </div>
            
        </div>
        </div>

    )
}

export default CartFoodItems
