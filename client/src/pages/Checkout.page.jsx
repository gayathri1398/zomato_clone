import React from 'react';
import {BsFillShieldLockFill} from 'react-icons/bs'

// components
import AddressList from '../components/Checkout/AddressList';

const Checkoutpage = () => {
    const address = [
        {
          name: 'Gym',
          location:"India"
        },
        {
          name: 'Home',
          location:"India"
        },
        {
          name: 'Office',
          location:"India"
        },
      ]
    return (
      <div className="container mx-auto pt-2 lg:px-96">
            <div className="w-full bg-white-400  shadow-lg flex flex-col gap-2 items-center">
            <h1 className="text-2xl font-semibold">Checkout</h1>
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-gray-700 text-xl ">Summary</h1>
                <div className="flex flex-col gap-3 items-center">
                    <h3 className="tracking-widest text-sm">ORDER FROM</h3>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-400 font-semibold text-lg">Loiee Mithai & Rasoi</p>
                        <p className="text-gray-400">Thuraipakkam, Chennai</p>
                    </div>
                </div>
            </div>
            <AddressList address={address}/>
            <div className="text-center mb-8">
               <button className="flex items-center gap-2 p-3 bg-zomato-400 px-20 rounded-lg text-white ">Payment Securely <BsFillShieldLockFill/></button>
            </div>
        </div>
       
      </div>
    )
}

export default Checkoutpage
