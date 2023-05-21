import React from "react";
import logo2 from '../image/logo2.png'
import supportIcon from '../icons/comment-dots-regular.svg'
import userIcon from '../icons/iconUser.png'
import burgericon from '../icons/burgericon.svg'
import zalupa from '../icons/zalupa.svg'

function Header () {


    return(
        <div className="h-[72px]  flex items-center font-roboto bg-[#F1E4CF]">
            <div className="flex ">
                <div className="ml-[105px]  flex items-center">
                    <a href="/" ><img src={logo2} className=""/></a>
                    <button className="flex font-suisse text-[16px] items-center ml-[24px]"><img className="h-[18px] mr-[8px]" src={burgericon}/>Меню</button>
                    <button className="flex"><img src={zalupa} className="h-[24px]"/>&nbsp;</button>
                </div>
                <div className="flex items-center font-medium text-[20px] mr-[132px] ml-[1200px]">
                    <div className="flex items-center">
                        <button className="">Помощь</button>
                        <img src={supportIcon} className="h-[21px] flex ml-[12px]"/>
                    </div>
                    <div className="flex items-center ml-[29px]">
                        <button className="flex">Войти</button>
                        <img src={userIcon} className="h-[21px] ml-[12px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;