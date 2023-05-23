import React, { useState, useRef, useEffect } from "react";
import add from '../../icons/add.png'
import more from '../../icons/more.png'
import PlanRow from "./planrow";
import plan1 from '../../image/plan1.png'
import plan2 from '../../image/plan2.png'
import plan3 from '../../image/plan3.png'
import More3 from "../more/more3";


function PlanDay() {
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
        <div className="min-h-[171px] font-proto">
            <div className="h-[72px] flex justify-between items-end pb-[12px]">
                <h1 className="text-[20px] font-semibold">1 день</h1>
                <div className="relative">
                    <button className="h-[20px] mr-[25px]" onClick={() => setShowMore(!showMore)}><img src={add} /></button>
                    <button className="h-[20px]"><img src={more} /></button>
                    {showMore && <div ref={moreRef}><More3 /></div>}
                </div>
            </div>
            <div>
                <PlanRow img={plan1} time="1ч" type="Архитектура" name='Квест по Нижегородскому кремлю "Тайны красных стен"' adress="Нижний Новгород, пр-кт Мира, 80" />
                <PlanRow img={plan2} time="2,5ч" type="Набережная" name='Чекаловская лестница' adress="Нижний Новгород, Нижневолжская наб." />
                <PlanRow img={plan3} time="1ч" type="Музей" timestart='Начало в 10:00' name='Музей физики и занимательных наук "Кварки"' adress="Нижний Новгород, ул. Радионова, 165 к.13" />
            </div>
            <div className=" w-[600px] bg-[#FAEFDB] border-[2px] border-[#FAEFDB]"></div>
        </div>
    )

}

export default PlanDay;