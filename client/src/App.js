import React,{useEffect} from "react";
import {Redirect, Route,useParams} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";

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
import RedirectRestaurant from "./pages/Restaurant/Redirect";
import GoogleAuthpage from "./pages/GoogleAuth.page";

// actions
import { getmyself } from "./Redux/Reducer/User/user.action";

// axios default configs
if (localStorage.zomatoUser){
  const {token} = JSON.parse(localStorage.zomatoUser);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function App() {
  const{id} =useParams();
  const dispatch =useDispatch();

  useEffect(()=>{
     if(localStorage.zomatoUser)
       dispatch(getmyself());
     
  },[])


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
      <HomeHocLayout path="/google/:token" exact component={GoogleAuthpage}/>
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
