import React from "react";
import logo2 from '../image/logo2.png'
import burgericon from '../icons/burgericon.svg'
import zalupa from '../icons/zalupa.svg'
import coins from '../icons/coins.svg'
import rus from '../icons/rus.png'
import support from '../icons/support.png'
import favorite from '../icons/favorite.png'
import profile from '../icons/profile.png'
function Header () {


    return(
        <div className="h-[72px]  flex items-center font-roboto bg-[#F1E4CF]">
            <div className="flex justify-between">
                <div className="ml-[105px]  flex items-center ">
                    <a href="/" className="w-[60px] h-[40px]" ><img src={logo2} className=" w-[40px] h-[40px]"/></a>
                    <button className="flex font-proto font-semibold text-[16px] items-center ml-[24px] mr-[16px]"><img className="h-[18px] mr-[8px]" src={burgericon}/>Меню</button>
                    <button className="flex ml-[28px] m-[12px]"><img src={zalupa} className="h-[24px]"/>&nbsp;</button>
                    <button className="mx-[13px] ml-[16px] mr-[42px] flex items-center font-proto font-semibold text-[16px]">Бонусы <img src={coins}  className="h-[24px] ml-[8px]"/> </button>
                </div>
                <div className="flex items-center font-medium text-[20px] ml-[600px] ">
                    <button className="flex items-center font-proto font-semibold text-[16px] mx-[13px] mr-[16px] ml-[48px]"> <img src={rus} className="rounded-[10px] h-[24px] mr-[8px]" /> РУС / RUB</button>
                    <button className="flex items-center font-proto font-semibold text-[16px] mx-[13px] ml-[48px] mr-[16px]"><img src={support}  className="mr-[8px]"/>Поддержка</button>
                    <button className="flex items-center font-proto font-semibold text-[16px] mx-[13px] ml-[48px] mr-[16px]"><img src={favorite}  className="mr-[8px]"/>Избранное</button>
                    <button className="flex items-center font-proto font-semibold text-[16px] mx-[13px] ml-[48px] mr-[16px]"><img src={profile}  className="mr-[8px]"/>Профиль</button>
                </div>
            </div>
        </div>
    )
}

export default Header;