import React,{useEffect,useState} from 'react';

// actions


const CartFoodItems = () => {
 



    return (
        <div className="flex items-center justify-between p-2 ">
        <h1 className="text-base">Chicken Lollipop</h1>
        <div className="flex flex-col items-end">
            <p> ₹30.00</p>
            <div className="flex items-center bg-zomato-400 text-white px-2 py-1 gap-3 rounded-lg">
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
            
        </div>
        </div>

    )
}

export default CartFoodItems
