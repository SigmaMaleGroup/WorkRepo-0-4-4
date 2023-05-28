import React, { useState, useEffect } from "react";

function InterestsCard (props) {
    const [selected, setSelected] = useState(false);
    
    const onButtonClick = () => {
        props.onButtonClick(props.buttonname, props.buttonIndex);
    }

    useEffect(() => {
        setSelected(props.selected);
    }, [props.selected]);
    
    return (
        <div className="h-[263px] w-[362px] flex flex-col">
            <div>
                <img src={props.img}/>
            </div>
            <div className="flex mt-[23px]">
                <button 
                    className={`w-[362px] h-[48px] rounded-[20px] font-roboto font-semibold text-[16px] ${selected ? "bg-white border-[5px] border-[#FFCF08]" : "bg-[#FFCF08]"}`}
                    onClick={onButtonClick}
                >
                    {props.buttonname}
                </button>
            </div>
        </div>
    )
}

export default InterestsCard;
