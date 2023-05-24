import React from "react";
import logo2 from '../image/logo2.png'
import burgericon from '../icons/burgericon.svg'
import zalupa from '../icons/zalupa.svg'
import coins from '../icons/coins.svg'
import rus from '../icons/rus.png'
import support from '../icons/support.png'
import favorite from '../icons/favorite.png'
import profile from '../icons/profile.png'
import { Link } from "react-router-dom";

function Header2 () {

    return(
        <div className="h-[72px] flex items-center justify-center font-roboto bg-[#FFFBF3]">
            <div className="flex justify-between w-[1440px]">
                <div className="flex items-center ">
                    <a href="/" className="w-[60px] h-[40px]" ><img src={logo2} className=" w-[40px] h-[40px]"/></a>
                    <button className="flex font-proto font-semibold text-[16px] items-center ml-[24px] mr-[16px]"><img className="h-[18px] mr-[8px]" src={burgericon}/>Меню</button>
                    <button className="flex ml-[28px] m-[12px]"><img src={zalupa} className="h-[24px]"/>&nbsp;</button>
                    <button className="mx-[13px] ml-[16px] mr-[42px] flex items-center font-proto font-semibold text-[16px]">Бонусы <img src={coins}  className="h-[24px] ml-[8px]"/> </button>
                </div>
                <div className="flex w-[603px] items-center justify-between font-medium text-[20px] ">
                    <button className="flex items-center font-proto font-semibold text-[16px] mx-[13px] "> <img src={rus} className="rounded-[10px] h-[24px] mr-[8px]" /> РУС / RUB</button>
                    <button className="flex items-center font-proto font-semibold text-[16px] mx-[13px] "><img src={support}  className="mr-[8px]"/>Поддержка</button>
                    <button className="flex items-center font-proto font-semibold text-[16px] mx-[13px] "><img src={favorite}  className="mr-[8px]"/><Link to="/favorite">Избранное</Link></button>
                    <button className="flex items-center font-proto font-semibold text-[16px] mx-[13px] "><img src={profile}  className="mr-[8px]"/>Профиль</button>
                </div>
            </div>
        </div>
    )
}

export default Header2;