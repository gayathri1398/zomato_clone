import React from 'react';

// components
import MenuListContainer from '../../components/Restaurant/Order-Online/MenuListContainer';

const OrderOnlinepage = () => {
    return (
        <div className="px-2 lg:px-52">
          <aside className="hidden md:block w-1/4	">  
             <MenuListContainer/>
          </aside>
          <div></div>
        </div>
    )
}

export default OrderOnlinepage;
