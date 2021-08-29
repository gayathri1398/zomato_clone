import React from 'react';
import {Route} from 'react-router-dom';

// Layout
import Restaurantlayout from '../layouts/Restaurant.layout';

const RestaurantHocLayout =({component:Component,...rest})=>{
    return<>
    <Route {...rest}
    component={(props)=>
        <Restaurantlayout>
            Component(...props)
            </Restaurantlayout>}>

    </Route>
    </>
}
export default RestaurantHocLayout;