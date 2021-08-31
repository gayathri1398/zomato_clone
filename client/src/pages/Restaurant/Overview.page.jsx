import React from 'react'


// components
import MenuCollection from '../../components/Restaurant/MenuCollection'

const Overviewpage = () => {
    return (
        <div className="px-2 lg:px-52 flex flex-col md:flex-row my-2">
           
            <div className="lg:w-full">
               <h1 className="text-xl font-semibold md:text-2xl">About this page</h1>
            <div className="mb-4">
                <MenuCollection/>
            </div>
              <h1 className="text-xl pb-2">Cuisines</h1>  
              <div className="flex items-center gap-2 mb-4" >
                  <p className="border border-gray-400 text-blue-500 rounded-full p-1 ">Sandwich</p>
                  <p className="border border-gray-400 text-blue-500 rounded-full p-1 ">Sandwich</p>
                  <p className="border border-gray-400 text-blue-500 rounded-full p-1 ">Sandwich</p>
                  </div>                                    
                <div>
                    <h1 className="text-xl pb-2">Average Cost</h1>
                    <p className="text-base">₹300 for two people (approx.)</p>
                    <p className="text-gray-400">Exclusive of applicable taxes and charges, if any</p>
                </div>
            </div>
            
            <aside className=" md:w-5/12   ">
                <div className="bg-white shadow-lg rounded-lg md:sticky top-0 px-3">
                    <h1 className="text-base md:text-xl">Call</h1>
                    <p>+919884471759</p>
                    <div className="mt-4 text-base md:text-xl">
                        <h1>Direction</h1>
                    </div>
                </div>
            </aside>
          
            
        </div>
    )
}

export default Overviewpage
