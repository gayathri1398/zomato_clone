import React from 'react';

import classNames from 'classnames';

const InfoButtons = (props) => {
    return (
       
            <button className={classNames("flex items-center px-2 py-1 border border-gray-500 rounded-lg",
            {"text-white bg-zomato-400 border-zomato-400":props.isActive})
                }>
                {/* <span className={classNames("text-zomato-400 flex",{"text-white":"bg-zomato-400"})}>{props.icon}</span>{props.title} */}
                {props.children}
                </button>
    )
}

export default InfoButtons
