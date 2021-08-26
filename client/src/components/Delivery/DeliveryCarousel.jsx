import React from 'react';
import Slider from 'react-slick';

// components
import DeliveryCategory from './DeliveryCategory';
// CarouselArrows
import{ NextArrow, PrevArrow } from '../CarouselArrow';


const DeliveryCarousel = () => {
    const categories = [
        {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxt9ILgsyz2dFk5gqNOsHaNe_41qiD1QKp6Q&usqp=CAU",
        title:"biryani"
        },
        {
            image:"https://b.zmtcdn.com/data/dish_photos/cf9/08bf86a8c902df8e6d703e374391ecf9.jpg",
            title:"Kesari Bath"
            },
            {
                image:"https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
                title:"Chicken"
                },
                {
                    image:"https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
                    title:"Chaat"
                    },
                    {
                        image:"https://b.zmtcdn.com/data/dish_images/770ba11e5159e6740d68f71f1b838a261612463246.png",
                        title:"Cake"
                        },
                        {
                            image:"https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
                            title:"Rolls"
                            }]
    
                            
     const settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
     };
    
    return (
        <>
        <div className="flex gap-3 md:gap-0 justify-evenly flex-wrap px-4 lg:hidden ">
           {categories.map((food)=>
            <DeliveryCategory {...food}/>
           )}
        </div>
        <div className="hidden lg:block ">
            <Slider{...settings}>
            {categories.map((food)=>
             <DeliveryCategory {...food}
            />
            )}
           
            </Slider>
        </div>
       </>
    )
  
}

export default DeliveryCarousel
