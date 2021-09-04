import React,{useState} from 'react';



// components
import ReviewCard from '../../components/Restaurant/Reviews/ReviewCard';

import AddReview from '../../components/Restaurant/Reviews/AddReview';


const ReviewPage = () => {
    const [reviews, setreviews] = useState(["","","",""])
    return (
        <>
       
        <div className="px-2 lg:px-52 flex flex-col md:flex-row my-2">
            <div className="md:hidden">
            <AddReview/>
            </div>
          <div>
          {reviews.map((review)=>(
                  <ReviewCard {...review}/>
           ))}
          </div>
          
            <aside className="hidden md:block w-5/12">
               <AddReview/>
            </aside>
        </div>
        </>
    )
}

export default ReviewPage
