import React from "react";

function InterestsCard (props) {
    return (
        <div className="h-[263px] w-[362px] flex flex-col">
            <div>
                <img src={props.img}/>
            </div>
            <div className="flex mt-[23px]">
                <button className="bg-[#FFCF08] w-[362px] h-[48px] rounded-[20px] font-roboto font-semibold text-[16px] ">{props.buttonname}</button>
            </div>
        </div>
    )
}

export default InterestsCard;