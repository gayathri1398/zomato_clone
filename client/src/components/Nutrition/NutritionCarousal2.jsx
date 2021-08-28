import React from 'react';
import Slider from 'react-slick';

// components
import NutritionCarousal2Card from './NutritionCarousal2Card';
// CarouselArrows
import{ NextArrow, PrevArrow } from '../CarouselArrow';


const NutritionCarousal2 = () => {
    const categories = [
        {
        image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
        title:"Proteins & Fitness"
        },
        {
            image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
            title:"Sleep & Stress"
            },
            {
                image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
                title:"Digestion & WeightLoss"
                },
                {
                    image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp",
                    title:"Omegas & CoQ10"
                    },
                    {
                        image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/76336cff326938873f922d4c1c72066c_1628243556.png?output-format=webp",
                        title:"Beauty & Care"
                        },
                        {
                            image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/76336cff326938873f922d4c1c72066c_1628243556.png?output-format=webp",
                            title:"Immunity & bones"
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
        <div className="flex gap-1 md:gap-2 justify-evenly flex-wrap lg:hidden ">
           {categories.map((food)=>
            <NutritionCarousal2Card {...food}/>
           )}
        </div>
        <div className="hidden lg:block ">
            <Slider{...settings}>
            {categories.map((food)=>
             <NutritionCarousal2Card {...food}
            />
            )}
            </Slider>
        </div>
       </>
    )
  
}

export default NutritionCarousal2;
