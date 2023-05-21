import React from "react";
import MapCard from "../cards/mapcard";
import map3 from '../../image/map3.png'

function MapCard3 ({ onButtonClick }) {
    return (
        <div className="absolute">
            <div className="absolute top-[50px] left-[-450px]">
                <MapCard onButtonClick={onButtonClick} />
            </div>
            <div className="relative left-[100px] top-[00px]">
                <img className="h-[500px] " src={map3} />
            </div>
        </div>
    )
}

export default MapCard3;