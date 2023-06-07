import React from "react";
import edit from '../../icons/edit.png'
import calendar from '../../icons/calendar.png'
import trash from '../../icons/trash.png'
import favorite from '../../icons/favorite.png'

function More2 () {
    return(
        <div className="absolute w-[312px] bottom-[-25px]  z-10  left-[620px] h-[184px] text-[16px] font-semibold bg-white rounded-[20px] flex flex-col justify-center items-start">
            <button className="h-[56px] flex items-center ml-[24px]"><img className="mr-[16px]" src={calendar}/>Переместить в другой день</button>
            <button className="h-[56px] flex items-center ml-[24px]"><img className="mr-[16px]" src={favorite}/>Добавить из избранного</button>
            <button className="h-[56px] flex items-center ml-[24px] text-[#E76D00]"><img className="mr-[16px]" src={trash}/>Удалить</button>
        </div>
    )
}

export default More2;