import React, { useState, useRef, useEffect } from "react";
import more2 from '../../icons/more2.png'
import More2 from "../more/more2";

function PlanRow(props) {
    const [showMore, setShowMore] = useState(false);
    const moreRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (moreRef.current && !moreRef.current.contains(event.target)) {
                setShowMore(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="h-[98px] w-[600px] flex font-proto relative">
            <div className="w-[576px] flex items-center">
                <div>
                    <img src={props.img} />
                </div>
                <div className="ml-[16px]">
                    <p className="text-[14px] font-semibold text-[#959595]">{props.time}&nbsp;&nbsp;{props.type}&nbsp;&nbsp;{props.timestart}</p>
                    <p className="text-[16px] font-semibold ">{props.name}</p>
                    <p className="text-[16px] font-semibold text-[#959595]">{props.adress}</p>
                </div>
            </div>
            <div>
                <button onClick={() => setShowMore(!showMore)}><img src={more2} /></button>
                {showMore && <div ref={moreRef}><More2 /></div>}
            </div>
        </div>
    )
}

export default PlanRow;