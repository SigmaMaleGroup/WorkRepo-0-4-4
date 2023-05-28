import React from "react";
import mapcardimg from '../../image/mapcardimg.png'
import { Link } from "react-router-dom";

function MapCard ({onContinueClick , mpcrimg, mpcrheader, mpcrpar}) {
    return (
        <div className="h-[560px] w-[392px] bg-white rounded-[20px] drop-shadow-md">
            <div className="flex flex-col jusify-center items-center">
                <div className="m-[4px] flex">
                    <img src={mpcrimg} />
                </div>
                <div className="mx-[20px] h-[214px] flex flex-col items-start font-proto">
                    <h1 className=" text-[24px] font-semibold">{mpcrheader}</h1>
                    <p className="text-[14px] font-semibold text-[#1d1d1d80]">{mpcrpar}</p>
                </div>
                <div className=" flex jusify-end items-end mb-[4px]">
                    <Link to="/interests"><button onClick={onContinueClick} className="w-[384px] h-[48px] rounded-[20px] bg-[#FFCF08] text-[16px] font-semibold">Продолжить →</button></Link>
                </div>
            </div>
        </div>
    )
}

export default MapCard;
