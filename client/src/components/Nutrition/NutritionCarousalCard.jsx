import React from 'react'

const NutritionCarousalCard = (props) => {
    return (
        <div className="w-full h-52 md:h-54 lg:h-72 mt-14 px-8">
        <img src={props.image}
        alt="nutrition"
        className="w-screen h-full "/>
    </div>
    )
}

export default NutritionCarousalCard
