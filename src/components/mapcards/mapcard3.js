import React from "react";
import MapCard from "../cards/mapcard";
import map3 from '../../image/map3.png'
import mapimg3 from '../../image/mapimg3.png'

function MapCard3 ({onContinueClick}) {
    return (
        <div className="absolute">
            <div className="absolute top-[50px] left-[-450px]">
                <MapCard onContinueClick={onContinueClick} mpcrimg={mapimg3} mpcrheader="Сибирский округ" mpcrpar="Сибирь по праву называют «кладовой России и мира»– здесь разведаны крупные запасы углеводородного сырья, угля, урана, черных, цветных и драгоценных металлов, древесины, водных и гидроэнергетических ресурсов."/>
            </div>
            <div className="relative left-[100px] top-[00px]">
                <img className="h-[500px] " src={map3} />
            </div>
        </div>
    )
}

export default MapCard3;