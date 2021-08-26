import React from 'react'

export const NextArrow = (props) => {
    return (
        <div className={props.className} 
              style={{...props, backgroundColor:"#e23744",borderRadius:"16px"}}
              onClick={props.onClick}/> 
    )
}

export const PrevArrow = (props)=>{
    return<>
    <div className={props.className}
    style={{...props, backgroundColor:"#e23744", borderRadius:"16px"}}
    onClick={props.onClick} />
    </>
}
