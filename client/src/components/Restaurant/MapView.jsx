import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {AiOutlineCopy} from 'react-icons/ai';
import {FaDirections} from 'react-icons/fa'

// [13.14564418191485, 80.18286445453698]  5/337, Rajiv Gandhi Salai, St. Thomas Mount Block 195, Okkiyampet, Chennai

const MapView = (props) => {
    return (
        <>
        <div className="bg-white shadow-lg rounded-lg md:sticky top-0 px-3">
                    <h1 className="text-base md:text-xl">Call</h1>
                    <p>{props.phno}</p>
                    <div className="mt-4 text-base md:text-xl">
                        <h1>Direction</h1>
                    </div>
                  
              
        <div className="w-full h-48 z-20">
        <MapContainer center={props.mapLocation} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={props.mapLocation}>
            <Popup>
            Hello welcome!
            </Popup>
          </Marker>
        </MapContainer>
        </div>
        <div className="flex flex-col gap-2 pb-4">
          <p>{props.address}</p>
        <div className="flex items-center gap-3">
        <button className="flex gap-1 items-center border-2 border-gray-400 p-1 rounded-lg "> <span><AiOutlineCopy/></span> Copy</button>
          <button className="flex gap-1 items-center border-2 border-gray-400 p-1 rounded-lg "> <span className="text-zomato-400"><FaDirections/></span> Direction</button>
        </div>
        </div>
        </div>
        </>
    )
}

export default MapView
