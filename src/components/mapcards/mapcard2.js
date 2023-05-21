import React from "react";
import MapCard from "../cards/mapcard";
import map2 from '../../image/map2.png'

function MapCard2 ({ onButtonClick }) {
    return (
        <div className="absolute">
            <div className="absolute top-[80px] left-[950px]">
                <MapCard onButtonClick={onButtonClick} />
            </div>
            <div className="relative left-[25px] top-[10px]">
                <img className="h-[700px] w" src={map2} />
            </div>
        </div>
    )
}

export default MapCard2;