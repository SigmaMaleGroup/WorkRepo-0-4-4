import React from "react";
import MapCard from "../cards/mapcard";
import map4 from '../../image/map4.png'

function MapCard4 ({ onButtonClick }) {
    return (
        <div className="absolute">
            <div className="absolute top-[80px] left-[-100px]">
                <MapCard onButtonClick={onButtonClick} />
            </div>
            <div className="relative left-[425px] top-[-15px]">
                <img className="h-[637.52px] " src={map4} />
            </div>
        </div>
    )
}

export default MapCard4;