import React from "react";
import favorite from '../../icons/favorite.png'
import note from '../../icons/note.png'
import calendar from '../../icons/calendar.png'

function More3 ({handleAddDay}) {
    return(
        <div className="absolute w-[312px] top-[0px] left-[80px] h-[184px]  z-10  text-[16px] font-semibold bg-white rounded-[20px] flex flex-col justify-center items-start">
            <button className="h-[56px] flex items-center ml-[24px]"><img className="mr-[16px]" src={favorite}/>Добавить из Избранного</button>
            <button className="h-[56px] flex items-center ml-[24px]"><img className="mr-[16px]" src={note}/>Добавить заметку</button>
            <button className="h-[56px] flex items-center ml-[24px]" onClick={handleAddDay}><img className="mr-[16px]" src={calendar}/>Добавить день</button>
        </div>
    )
}

export default More3;