import React from "react";

function InterestsCard (props) {
    return (
        <div className="h-[372px] w-[515px] ml-[103px] mt-[52px]">
            <div>
                <img src={props.img}/>
            </div>
            <div>
                <button className="bg-[#FFCF08] w-[515px] h-[70px] rounded-[20px] mt-[30px] font-roboto font-semibold text-[26px] ">{props.buttonname}</button>
            </div>
        </div>
    )
}

export default InterestsCard;