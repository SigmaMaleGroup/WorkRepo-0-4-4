import React from "react";
import MapCard from "../cards/mapcard";
import map1 from '../../image/map1.png'

function MapCard1 ({ onButtonClick }) {
    return (
        <div className="absolute">
            <div className="absolute top-[50px] left-[500px]">
                <MapCard onButtonClick={onButtonClick} />
            </div>
            <div className="relative left-[-30px] top-[0px]">
                <img className="h-[500px] " src={map1} />
            </div>
        </div>
    )
}

export default MapCard1;