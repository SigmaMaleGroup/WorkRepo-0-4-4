import React from "react";
import MapCard from "../cards/mapcard";
import map1 from '../../image/map1.png'
import mapimg1 from '../../image/mapimg1.png'

function MapCard1 ({ onButtonClick }, props) {
    return (
        <div className="absolute">
            <div className="absolute top-[50px] left-[500px]">
                <MapCard onButtonClick={onButtonClick} mpcrimg={mapimg1} mpcrheader="Центральный округ" mpcrpar="Центральный федеральный округ выделяется благодаря развитой транспортной инфраструктуре. Практически до любой части округа можно добраться без проблем, а про популярные и известные места и говорить не приходится."/>
            </div>
            <div className="relative left-[-30px] top-[0px]">
                <img className="h-[500px] " src={map1} />
            </div>
        </div>
    )
}

export default MapCard1;