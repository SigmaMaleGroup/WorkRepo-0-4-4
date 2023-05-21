import React from "react";
import mapcardimg from '../../image/mapcardimg.png'

function MapCard ({onButtonClick}) {
    return (
        <div className="h-[676px] w-[496px] bg-white rounded-[20px] drop-shadow-md">
            <div className="flex flex-col items-center">
                <div className="mt-[30px] flex">
                    <img src={mapcardimg} />
                </div>
                <div>
                    <div className="mx-[20px] flex flex-col items-center font-proto">
                        <h1 className="my-[12px] text-[36px] font-semibold">Центральный округ</h1>
                        <p className="text-[18px] text-[#959595]">Старинная архитектура, исторические памятники, красивейшая природа и древние крепости, возведенные на берегах прекрасных рек — рассказывают собственную историю. В любой точке этого края повсеместно возникает чувство, что быль совсем рядом.</p>
                    </div>
                </div>
                <div className="mt-[10px] jusify-center">
                <button className="w-[337px] h-[76px] rounded-[50px] bg-[#FFCF08] text-[28px] font-semibold" onClick={onButtonClick}>Продолжить →</button>
                </div>
            </div>
        </div>
    )
}

export default MapCard;