import React, {useState,useEffect} from 'react';
import {IoMdArrowDropup,IoMdArrowDropright,IoMdClose,IoMdArrowDropdown} from 'react-icons/io';
import {useSelector,useDispatch} from 'react-redux'


// components
import CartFoodItems from './CartFoodItems';

// actions
import { getCart } from '../../Redux/Reducer/Cart/cart.action';



const CartSm =({Dropup})=>{
    // const dispatch = useDispatch();
    
    return<>
    <div className="fixed w-full z-30 text-gray-400 bg-white bottom-0 flex justify-between items-center px-2 py-1 md:hidden" >
        <div className="flex flex-col">
        <h1 className="flex items-center text-xs">1 ITEM <span className="text-lg"><IoMdArrowDropup onClick={Dropup}/></span></h1>
        <p> ₹30</p>
        <p className="text-sm">(plus taxes)</p>
        </div>
        <div className="bg-zomato-400 text-white rounded-lg">
            <button className="flex items-center p-2 rounded-lg">Continue <IoMdArrowDropright/></button>
        </div>
    </div>
    </>
}
const CartLg =({Dropup})=>{


     return<>
    <div className="hidden md:flex fixed w-full z-30 text-gray-400 bg-white bottom-0 justify-between items-center px-2 py-1 lg:px-52">
        <div className="flex flex-col">
        <h1 className="flex items-center text-black text-lg font-base">
            <span className="text-lg border p-1" onClick={Dropup } ><IoMdArrowDropup/></span>
            Your Order (1)</h1>
        </div>
     
        <div className="flex items-center gap-2">
               <span className="text-black text-lg font-base">Subtotal: ₹30.00</span>
            <button className="flex items-center p-1 rounded-lg  bg-zomato-400 px-4 py-2 text-white rounded-lg">Continue <IoMdArrowDropright/></button>
        </div>
    </div>
    </>
}



const CartContainer = () => {
    const [isCartDropup,setIsCartDropup] = useState(false)
    const [icon,setIcon] = useState(false);

    const Dropup =()=>setIsCartDropup((prev)=>!prev)
    const Dropdown =()=>setIsCartDropup((prev)=>!prev)
  
    const reduxState = useSelector((globalState)=> globalState.cart.cart);
    console.log(reduxState);
    return (
   <>
        <div>
      {
          isCartDropup &&  (
            <div className="bg-white fixed bottom-0 w-full  lg:px-52 ">
            <div className="flex items-center justify-between px-2 ">
                    <h1 className="text-lg font-semibold py-2">Your Orders</h1>
                    <span onClick={Dropdown}><IoMdClose/></span> 
                </div>
            
            <hr className="mt-2 "/>
                <div className="flex flex-col gap-2 border-b h-60 overflow-y-scroll pb-20 ">
                   {reduxState.map((food)=> (
                        <CartFoodItems food={food?.name} price={food?.price} quantity={food?.quantity}/>
                   ))} 
                </div>
           </div>
          )
      }
    
        <CartSm Dropup={Dropup} />
        <CartLg Dropup={Dropup} />
        </div>
   </>
    )
}

export default  CartContainer
