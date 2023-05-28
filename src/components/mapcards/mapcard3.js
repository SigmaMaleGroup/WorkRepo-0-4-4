import React from "react";
import MapCard from "../cards/mapcard";
import map3 from '../../image/map3.png'
import mapimg3 from '../../image/mapimg3.png'

function MapCard3 (props) {
    return (
        <div className="absolute">
            <div className="absolutex">
                <MapCard number={props.number} mpcrimg={mapimg3} mpcrheader="Сибирский округ" mpcrpar="Сибирь по праву называют «кладовой России и мира»– здесь разведаны крупные запасы углеводородного сырья, угля, урана, черных, цветных и драгоценных металлов, древесины, водных и гидроэнергетических ресурсов."/>
            </div>
        </div>
    )
}

export default MapCard3;