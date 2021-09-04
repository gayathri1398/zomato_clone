import React from 'react';
import {TiStar} from 'react-icons/ti'




const ReviewCard = (props) => {
 

   

    return (
        <>

        <div className="flex items-center justify-between my-4 mr-4">
            <div className="flex gap-2">
            <div className="w-12 h-12 rounded-full bg-blue">
                <img src="https://b.zmtcdn.com/data/user_profile_pictures/73e/14705d4635fe3a9d8af15a4cb814073e.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                 alt="review"
                 className="w-full h-full rounded-full" />
            </div>
            <div>
                <h2 className="font-semibold">Santhosh</h2>
                <p className="text-gray-400">10 reviews &bull; 0 Followers</p>
            </div>
        </div>
        <button className="text-zomato-400 border border-zomato-400 rounded-lg p-2">
            Follow
        </button>
        </div>
        <div className="flex items-center gap-2 my-2">
            <span className="flex items-center bg-green-400 rounded-lg"><TiStar/>4.1</span>
            <p className="font-light uppercase">{props.isRestaurantReview?"Dining":"Delivery"}</p>
            <span className="text-gray-400">27 Days ago</span>
        </div>
        <div>
            <p className="border-b pb-4">chicken is probably undercooked...because we had to throw away one whole leg piece as we saw bloody areas after one bite.</p>

        </div>
      </>
    )
}

export default ReviewCard;
