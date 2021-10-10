import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import Slider from 'react-slick';
import ReactStars from "react-rating-stars-component";
import {IoMdArrowDropright} from 'react-icons/io';
import { Link ,useParams} from 'react-router-dom';


// components
import { NextArrow,PrevArrow } from '../../components/CarouselArrow';


// components
import MenuCollection from '../../components/Restaurant/MenuCollection';
import {MenuSimilarRestaurant} from '../../components/Restaurant/MenuSimilarRestaurant';
import ReviewCard from '../../components/Restaurant/Reviews/ReviewCard';
import MapView from '../../components/Restaurant/MapView';

// action
import {getImage} from '../../Redux/Reducer/Image/image.action';


const Overviewpage = () => {
  const [menuImages,setMenuImages] = useState({images:[]})

  const {id} = useParams();
  const dispatch = useDispatch();

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

      const reduxState = useSelector(globalStore => globalStore.restaurant.selectedRestaurant.restaurant);

      useEffect(() => {
      if(reduxState){
       dispatch(getImage(reduxState?.menuImages)).then((data)=> { 
        const images=[];
        data.payload.image.image.map(({location})=>images.push(location));
        setMenuImages(images);
      
      });
      
      }
      }, [])
    return (
        <div className="px-2 lg:px-52 flex flex-col md:flex-row my-2">
           
            <div className="w-full md:w-3/5">
               <h1 className="text-xl font-semibold md:text-2xl">About this page</h1>
            <div className="mb-4">
            <div className="flex items-center justify-between">
            <h1 className="text-xl ">Menu</h1>
            <Link to={`/restaurant/${id}/menu`}>
            <p className="text-sm flex gap-1 items-center text-zomato-400 pr-4">See all menus
            <IoMdArrowDropright className="text-xl"/>
            </p></Link>
            </div>
           
                <MenuCollection menuTitle="Menu"
                pages={menuImages.length}
                 images={console.log(menuImages.images)}/>
                
            </div>
              <h1 className="text-xl pb-2">Cuisines</h1>  
              <div className="flex items-center gap-2 mb-4" >
                {reduxState?.cuisions.map((data)=>(
                        <p className="border border-gray-400 text-blue-500 rounded-full p-1 ">{data}</p>
                ))}
                 
                  {/* <p className="border border-gray-400 text-blue-500 rounded-full p-1 ">Sandwich</p>
                  <p className="border border-gray-400 text-blue-500 rounded-full p-1 ">Sandwich</p> */}
                  </div>                                    
                <div>
                 
                    <h1 className="text-xl pb-2">Average Cost</h1>
                    <p className="text-base">₹{reduxState?.averageCost} for two people (approx.)</p>
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
             <div className="md:hidden">
               <MapView phno="+91233445357"
               address=" 5/337, Rajiv Gandhi Salai, St. Thomas Mount Block 195, Okkiyampet, Chennai"
               mapLocation={[13.14564418191485, 80.18286445453698] }/>
             </div>
             <ReviewCard/>
             <ReviewCard/>
             <ReviewCard/>
             <ReviewCard/>
              </div>
            
            <aside className="hidden md:block w-5/12">
            <MapView phno="+91233445357"
               address=" 5/337, Rajiv Gandhi Salai, St. Thomas Mount Block 195, Okkiyampet, Chennai"
               mapLocation={[13.14564418191485, 80.18286445453698] }/>
            </aside>
        
            
        </div>
    )
}

export default Overviewpage
