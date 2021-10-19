import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'



// components
import ReviewCard from '../../components/Restaurant/Reviews/ReviewCard';

import AddReview from '../../components/Restaurant/Reviews/AddReview';


// actions
import { getReviews } from '../../Redux/Reducer/Review/review.action';

const ReviewPage = () => {
    const [reviews, setreviews] = useState([])

    const dispatch = useDispatch();
    const reduxState = useSelector((globalStore)=>globalStore.restaurant.selectedRestaurant.restaurant);


    useEffect(() => {
        if(reduxState){
         dispatch(getReviews(reduxState?._id)).then((data)=>
         setreviews(data.payload.reviews)
         )
        }
    },[])

    return (
        <>
       
        <div className="px-2 lg:px-52 flex flex-col md:flex-row my-2 md:w-full ">
            <div className="md:hidden">
            <AddReview/>
            </div>
          <div className="w-full ">
             
          {reviews.map((review)=>(
                  <ReviewCard {...review} />
           ))}
          </div>
          
            <aside className="hidden md:flex w-5/12">
               <AddReview/>
            </aside>
        </div>
        </>
    )
}

export default ReviewPage
