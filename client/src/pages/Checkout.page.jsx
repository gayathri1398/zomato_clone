import React from 'react'

const Checkoutpage = () => {
    return (
      <div className="container mx-auto px-2 lg:px-52">
            <div className="w-full bg-blue-100  shadow-lg flex flex-col gap-2 items-center">
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
        </div>
      </div>
    )
}

export default Checkoutpage
