import React from "react";
import MapCard from "../cards/mapcard";
import map1 from '../../image/map1.png'
import mapimg1 from '../../image/mapimg1.png'

function MapCard1 (props) {
    return (
        <div className="absolute">
            <div className="absolute">
                <MapCard number={props.number} mpcrimg={mapimg1} mpcrheader="Центральный округ" mpcrpar="Центральный федеральный округ выделяется благодаря развитой транспортной инфраструктуре. Практически до любой части округа можно добраться без проблем, а про популярные и известные места и говорить не приходится."/>
            </div>
        </div>
    )
}

export default MapCard1;

// Similar code for MapCard2, MapCard3, MapCard4
