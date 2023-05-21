import React from "react";
import mainbg from '../image/bgmain.png'
import MainCard from "./cards/maincards";

function Main () {
    return(
        <div className="bg-cover bg-center min-h-[2000px]" style={{ backgroundImage: `url(${mainbg})` }}>
            <div>
                <div className="ml-[5.36vw] mt-[7.7vh]">
                    <h1 className="text-[36px] font-roboto">Выбор пользователей</h1>
                </div>
            </div>
            <div className="flex ml-[5.36vw] mt-[2.5vh]">
                <MainCard />
            </div>
        </div>
    )
}

export default Main;