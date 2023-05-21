import React from "react";
import mainimgts from '../../image/mainimgts.png'

function MainCard () {
    return (
        <div className="bg-white w-[537px] h-[672px] rounded-[20px]">
            <div className="flex flex-col">
                <div>
                    <img src={mainimgts}/>
                </div>
                <div className="ml-[1.82vw] mt-[1vh]">
                    <h2 className="text-[26px] font-proto font-bold mb-[22px]">Солнечный тур по притону</h2>
                    <p className="text-[18px] text-[#959595] font-normal leading-[22.5px] mb-[24px]">от 1500 ₽/г</p>
                    <p className="text-[18px] text-[#959595] font-normal leading-[22.5px] ">Один из самых европейских городов России со множеством исторических мест, изобретательными ресторанами и выходом к морю.</p>
                </div>
                <div className="flex justify-center mt-[36px]">
                    <button className="bg-[#FFCF08] w-[495px] h-[70px] rounded-[20px] font-roboto text-[26px] font-medium">Узнать больше</button>
                </div>
            </div>
        </div>
    )
}

export default MainCard;