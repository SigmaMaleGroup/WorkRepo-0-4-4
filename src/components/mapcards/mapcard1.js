import React from "react";
import MapCard from "../cards/mapcard";
import map1 from '../../image/map1.png'

function MapCard1 ({ onButtonClick }) {
    return (
        <div className="absolute">
            <div className="absolute top-[80px] left-[700px]">
                <MapCard onButtonClick={onButtonClick} />
            </div>
            <div className="relative left-[30px] top-[20px]">
                <img className="h-[700px] " src={map1} />
            </div>
        </div>
    )
}

export default MapCard1;