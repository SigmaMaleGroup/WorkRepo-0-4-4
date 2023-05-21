import React from "react";
import MapCard from "../cards/mapcard";
import map4 from '../../image/map4.png'

function MapCard4 ({ onButtonClick }) {
    return (
        <div className="absolute">
            <div className="absolute top-[50px] left-[-200px]">
                <MapCard onButtonClick={onButtonClick} />
            </div>
            <div className="relative left-[325px] top-[-15px]">
                <img className="h-[450px] " src={map4} />
            </div>
        </div>
    )
}

export default MapCard4;