import React from "react";

function FvCard (props) {
    return (
        <div className="h-[78px] w-[344px] flex justify-between items-center font-proto">
            <div className="h-[46px] w-[288px]">
                <h1 className="text-[16px] font-semibold">{props.fvname}</h1>
                <p className="text-[#1d1d1d80] font-semibold">{props.fvpar}</p>
            </div>
            <div>
                <img src={props.fvimg}/>
            </div>
        </div>
    )
}

export default FvCard;