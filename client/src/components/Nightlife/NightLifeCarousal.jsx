import React from 'react';
import Slider from 'react-slick';


// components
import PictureCard from '../PictureCard';
import { NextArrow ,PrevArrow} from '../CarouselArrow';

const NightLifeCarousal = () => {
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
        
          <div className="lg:w-full px-12">
          <Slider{...settings}>
          <PictureCard/> 
          <PictureCard/> 
          <PictureCard/> 
          <PictureCard/> 
          <PictureCard/> 
          <PictureCard/> 
          <PictureCard/> 
          <PictureCard/> 
          </Slider>
          </div>
        
     
        </>
    )
}

export default NightLifeCarousal
