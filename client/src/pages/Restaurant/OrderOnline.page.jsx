import React from 'react';

// components
import MenuListContainer from '../../components/Restaurant/Order-Online/MenuListContainer';
import FloatMenuButton from '../../components/Restaurant/Order-Online/FloatMenuButton';

const OrderOnlinepage = () => {
    return (
        <div className="px-2 w-full lg:px-52">
          <aside className="hidden md:block w-1/4 	">  
             <MenuListContainer/>
          </aside>
          <div >
          <FloatMenuButton/>
          </div>
          
          <div></div>
        </div>
    )
}

export default OrderOnlinepage;
