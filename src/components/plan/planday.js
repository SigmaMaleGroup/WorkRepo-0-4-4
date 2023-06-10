import React, { useState, useRef, useEffect } from "react";
import add from '../../icons/add.png'
import more from '../../icons/more.png'
import PlanRow from "./planrow";
import plan1 from '../../image/plan1.png'
import plan2 from '../../image/plan2.png'
import plan3 from '../../image/plan3.png'
import More3 from "../more/more3";
import More4 from "../more/more4";
import removeDay from '../redux/tripSlice'


function PlanDay({index, day, handleAddDay, dispatch}) {
    const [showMore, setShowMore] = useState(false);
    const [showMore4, setShowMore4] = useState(false);
    const moreRef = useRef();
    const more4Ref = useRef();
    console.log(day)

    useEffect(() => {
        function handleClickOutside(event) {
            if (moreRef.current && !moreRef.current.contains(event.target)) {
                setShowMore(false);
            }
            if (more4Ref.current && !more4Ref.current.contains(event.target)) {
                setShowMore4(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleRemoweDay = () => {
        dispatch(removeDay({ payload: index }));
      }


    return (
        <div className="min-h-[171px] font-proto">
            <div className="h-[72px] flex justify-between items-end pb-[12px]">
                <h1 className="text-[20px] font-semibold"> {index + 1}-й день</h1>
                <div className="relative">
                    <button className="h-[20px] mr-[25px]" onClick={() => setShowMore(!showMore)}><img src={add} /></button>
                    <button className="h-[20px]" onClick={() => setShowMore4(!showMore4)}><img src={more} /></button>
                    {showMore && <div ref={moreRef}><More3 handleAddDay={handleAddDay} /></div>}
                    {showMore4 && <div ref={more4Ref}><More4 handleRemoweDay={handleRemoweDay} /></div>}
                </div>
            </div>
            <div>
            {/* ваш код для отображения дня */}
            {day.activities.map((activity, activityIndex) => (
                <PlanRow key={activityIndex} activity={activity} />
            ))}
            </div>
            <div className=" w-[600px] bg-[#FAEFDB] border-[2px] border-[#FAEFDB]"></div>
        </div>
    )
}

export default PlanDay;
