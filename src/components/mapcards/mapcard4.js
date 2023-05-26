import React from "react";
import MapCard from "../cards/mapcard";
import map4 from '../../image/map4.png'
import mapimg4 from '../../image/mapimg4.png'

function MapCard4 ({ onButtonClick }) {
    return (
        <div className="absolute">
            <div className="absolute top-[50px] left-[-200px]">
            <MapCard onButtonClick={onButtonClick} mpcrimg={mapimg4} mpcrheader="Дальневосточный округ" mpcrpar="Дальний Восток славится своими заповедниками и национальными парками, гейзерами и вулканами, поэтому лучшего края, чтобы уединиться с природой и исследовать природные чудеса, не найти."/>
            </div>
            <div className="relative left-[325px] top-[-15px]">
                <img className="h-[450px] " src={map4} />
            </div>
        </div>
    )
}

export default MapCard4;