import React from "react";
import MapCard from "../cards/mapcard";
import map3 from '../../image/map3.png'

function MapCard3 ({ onButtonClick }) {
    return (
        <div className="absolute">
            <div className="absolute top-[80px] left-[-400px]">
                <MapCard onButtonClick={onButtonClick} />
            </div>
            <div className="relative left-[130px] top-[00px]">
                <img className="h-[637.52px] " src={map3} />
            </div>
        </div>
    )
}

export default MapCard3;