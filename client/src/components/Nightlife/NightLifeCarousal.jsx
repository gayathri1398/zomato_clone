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
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }

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
