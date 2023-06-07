import React from "react";
import edit from '../../icons/edit.png'
import calendar from '../../icons/calendar.png'
import trash from '../../icons/trash.png'

function More4 ({handleRemoweDay}) {
    return(
        <div className="absolute w-[312px] bottom-[-25px]  z-10  left-[100px] h-[64px] text-[16px] font-semibold bg-white rounded-[20px] flex flex-col justify-center items-start">
            <button className="h-[56px] flex items-center ml-[24px] text-[#E76D00]" onClick={handleRemoweDay}><img className="mr-[16px]" src={trash}/>Удалить День</button>
        </div>
    )
}

export default More4;