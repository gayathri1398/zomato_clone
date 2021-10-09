import React from "react";
import {Redirect, Route,useParams} from 'react-router-dom'

// HOC
import HomeHocLayout from "./HOC/Home.Hoc";
import RestaurantHocLayout from "./HOC/Restaurant.Hoc";
import CheckoutHocLayout from "./HOC/Checkout.Hoc";

// Component
import Temp from "./components/Temp";
import HomePage from "./pages/Home.page";
import Overviewpage from "./pages/Restaurant/Overview.page";
import OrderOnlinepage from "./pages/Restaurant/OrderOnline.page";
import ReviewPage from "./pages/Restaurant/ReviewPage";
import Menupage from "./pages/Restaurant/Menu.page";
import PhotosPage from "./pages/Restaurant/Photos.page";
import Checkoutpage from "./pages/Checkout.page";
import RedirectRestaurant from "./pages/Restaurant/Redirect"


function App() {
  const{id} =useParams();
  return (
    <>
  <Route path="/" exact >
     <Redirect to="/delivery"/>
  </Route>
  <Route path="/restaurant/:id" exact component={RedirectRestaurant}/>
    {/* <Redirect to={`/restaurant/${id}/overview`}/>
  </Route> */}
      {/* <HomeHocLayout path="/" exact component={Temp}/> */}
      <HomeHocLayout path="/:type" exact component={HomePage}/>
      <RestaurantHocLayout path="/restaurant/:id" exact component={Temp}/>
      <RestaurantHocLayout path="/restaurant/:id/overview" exact component={Overviewpage}/>
      <RestaurantHocLayout path="/restaurant/:id/order-online" exact component={OrderOnlinepage}/>
      <RestaurantHocLayout path="/restaurant/:id/reviews" exact component={ReviewPage}/>
      <RestaurantHocLayout path="/restaurant/:id/menu" exact component={Menupage}/>
      <RestaurantHocLayout path="/restaurant/:id/photos" exact component={PhotosPage}/>
      <CheckoutHocLayout path ="/checkout/payment" exact component={Checkoutpage}/>
    </>
  );
}

export default App;
