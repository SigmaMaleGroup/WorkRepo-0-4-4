import React from "react";
import edit from '../../icons/edit.png'
import share from '../../icons/share.png'
import trash from '../../icons/trash.png'

function More1 () {
    return(
        <div className="absolute w-[312px] bottom-[-150px] left-[50px] h-[184px] text-[16px] font-semibold bg-white rounded-[20px] flex flex-col justify-center items-start">
            <button className="h-[56px] flex items-center ml-[24px]"><img className="mr-[16px]" src={edit}/>Изменить название</button>
            <button className="h-[56px] flex items-center ml-[24px]"><img className="mr-[16px]" src={share}/>Поделиться планом</button>
            <button className="h-[56px] flex items-center ml-[24px] text-[#E76D00]"><img className="mr-[16px]" src={trash}/>Удалить план</button>
        </div>
    )
}

export default More1;