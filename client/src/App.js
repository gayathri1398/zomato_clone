import React from "react";
import {Redirect, Route} from 'react-router-dom'

// HOC
import HomeHocLayout from "./HOC/Home.Hoc";
import RestaurantHocLayout from "./HOC/Restaurant.Hoc"

// Component
import Temp from "./components/Temp";
import HomePage from "./pages/Home.page";




function App() {
  return (
    <>
  <Route path="/" exact >
     <Redirect to="/delivery"/>
  </Route>
      {/* <HomeHocLayout path="/" exact component={Temp}/> */}
      <HomeHocLayout path="/:type" exact component={HomePage}/>
      <RestaurantHocLayout path="/restaurant/:id" exact component={Temp}/>
      <RestaurantHocLayout path="/restaurant/:id/overview" exact component={Temp}/>
      <RestaurantHocLayout path="/restaurant/:id/order-online" exact component={Temp}/>
      <RestaurantHocLayout path="/restaurant/:id/reviews" exact component={Temp}/>
      <RestaurantHocLayout path="/restaurant/:id/menu" exact component={Temp}/>
      <RestaurantHocLayout path="/restaurant/:id/photos" exact component={Temp}/>
    </>
  );
}

export default App;
