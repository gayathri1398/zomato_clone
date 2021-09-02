import React from 'react';
import classNames from 'classnames';

const MenuCategory = (props) => {
    return (
        <div className=
        {classNames("pl-2 text-lg",{"text-zomato-400 bg-zomato-50 border-r-4 border-zomato-400":props.isActive})}
        >
            <p onClick={props.onClickHandler} id={props.name}>
                {props.name} ({props.items.length})</p>
        </div>
    )
}

export default MenuCategory
