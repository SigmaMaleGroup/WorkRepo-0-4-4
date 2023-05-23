import React from "react";
import yt from '../icons/yt.png'
import vk from '../icons/vk.png'
import zen from '../icons/zen.png'
import tg from '../icons/tg.png'
import ok from '../icons/ok.png'

function Footer2 () {
    return (
        <div className="h-[410px] bg-[#FFFBF3] flex flex-col items-center justify-center">
            <div className="flex justify-between items-center h-[48px] w-[506px] mb-[56px] text-[16px] font-semibold">
                <a>Партнерам</a>
                <a>О проекте</a>
                <a>Оферта</a>
                <a>Инструкции</a>
            </div>
            <div className="h-[48px] w-[304px] mb-[80px] flex justify-between items-center">
                <a><img src={yt} /></a>
                <a><img src={vk}/></a>
                <a><img src={zen}/></a>
                <a><img src={tg}/></a>
                <a><img src={ok}/></a>
            </div>
            <div className="h-[18px] w-[272px] flex items-center justify-center">
                <p className="text-[14px] font-semibold text-[#959595]">(с) 2023 Проект Правительства Москвы</p>
            </div>
        </div>
    )
}

export default Footer2;