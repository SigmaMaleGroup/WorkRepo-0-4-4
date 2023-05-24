import React from "react";
import fvimg from '../../image/fvimg.png'
import FvCard from "./fvcard";
import fv1 from '../../image/fv1.png'
import fv2 from '../../image/fv2.png'
import fv3 from '../../image/fv3.png'

function FavoriteCadrd (props) {
    return (
        <div className="w-[392px] h-[475px] bg-[#FFFBF3] rounded-[20px] font-proto border-[2px] border-[#f5dfb8]">
            <div className="flex  w-[392px] h-[137px]">
                <div className="flex flex-col w-[188px] h-[58px] ml-[24px] mt-[31px]">
                    <h1 className="text-[24px] font-semibold">{props.header}</h1>
                    <p className="text-[#1d1d1d80] text-[16px] font-semibold">{props.paragraf}</p>
                </div>
                <div>
                    <img className="relative bottom-[10px] left-[30px]" src={fvimg}/>
                    <img className="relative bottom-[130px] left-[48px]" src={props.fvimgmane} />
                </div>
            </div>
            <div>
                <div className="flex flex-col justify-center items-center mt-[8px]">
                    <FvCard fvname='ГМИИ им. А.С.Пушкина' fvpar="музей" fvimg={fv1}/>
                    <FvCard fvname='Выставочный зал парка "Зарядье" ' fvpar="музей" fvimg={fv2}/>
                    <FvCard fvname='Музей М.А. Булгакова' fvpar="музей" fvimg={fv3}/>
                </div>
            </div>
            <div className="w-[392px] h-[88px] flex justify-center items-center">
                <button className="h-[48px] w-[344px] bg-[#FAEFDB] rounded-[12px] text-[16px] font-semibold">{props.fvbutton}</button>
            </div>
        </div>
    )
}

export default FavoriteCadrd;