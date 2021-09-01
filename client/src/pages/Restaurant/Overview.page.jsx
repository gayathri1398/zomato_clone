import React from 'react'
import Slider from 'react-slick';
import ReactStars from "react-rating-stars-component";


// components
import { NextArrow,PrevArrow } from '../../components/CarouselArrow';


// components
import MenuCollection from '../../components/Restaurant/MenuCollection';
import {MenuSimilarRestaurant} from '../../components/Restaurant/MenuSimilarRestaurant';

const Overviewpage = () => {
    const settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            
            }
          },
          {
            breakpoint: 1023,
            settings: {
            
              slidesToShow: 2,
              slidesToScroll: 1,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              arrows:false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <div className="px-2 lg:px-52 flex flex-col md:flex-row my-2">
           
            <div className="w-full md:w-3/5">
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
              
              {
                    <Slider {...settings}>
                         <MenuSimilarRestaurant image="https://b.zmtcdn.com/data/pictures/chains/5/65155/9ecd6a211b1e3091a5a1fc17afe44a90_featured_v2.jpg"
                title="Pizza"/>
                 <MenuSimilarRestaurant image="https://b.zmtcdn.com/data/pictures/chains/5/65155/9ecd6a211b1e3091a5a1fc17afe44a90_featured_v2.jpg"
                title="Pizza"/>
                 <MenuSimilarRestaurant image="https://b.zmtcdn.com/data/pictures/chains/5/65155/9ecd6a211b1e3091a5a1fc17afe44a90_featured_v2.jpg"
                title="Pizza"/>
                 <MenuSimilarRestaurant image="https://b.zmtcdn.com/data/pictures/chains/5/65155/9ecd6a211b1e3091a5a1fc17afe44a90_featured_v2.jpg"
                title="Pizza"/>
                 <MenuSimilarRestaurant image="https://b.zmtcdn.com/data/pictures/chains/5/65155/9ecd6a211b1e3091a5a1fc17afe44a90_featured_v2.jpg"
                title="Pizza"/>
                    </Slider>}
               
             <div>
               <h2>Rate your experience for</h2>
               <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
               />
             </div>
            </div>
            
            <aside className="md:w-5/12">
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
