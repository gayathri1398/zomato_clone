import React from 'react'


// components
import MenuCollection from '../../components/Restaurant/MenuCollection'

const Overviewpage = () => {
    return (
        <div className="lg:px-52 ">
            <h1 className="text-xl">About this page</h1>
            <div>
                <MenuCollection/>
            </div>
        </div>
    )
}

export default Overviewpage
