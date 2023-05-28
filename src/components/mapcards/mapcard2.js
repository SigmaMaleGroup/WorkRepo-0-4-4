import React from "react";
import MapCard from "../cards/mapcard";
import map2 from '../../image/map2.png'
import mapimg2 from '../../image/mapimg2.png'

function MapCard2 ({onContinueClick}) {
    return (
        <div className="absolute">
            <div className="absolute top-[50px] left-[600px]">
            <MapCard onContinueClick={onContinueClick} mpcrimg={mapimg2} mpcrheader="Уральский округ" mpcrpar="Уральский федеральный округ славится богатыми трудовыми традициями. В металлургии, нефтегазодобыче, сельском хозяйстве, оборонной промышленности, в науке и многих других сферах регионы УрФО добились значительных успехов."/>
            </div>
            <div className="relative left-[-20px] top-[0px]">
                <img className="h-[500px]  " src={map2} />
            </div>
        </div>
    )
}

export default MapCard2;