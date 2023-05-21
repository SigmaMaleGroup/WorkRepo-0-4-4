import React, { useState } from "react";
import Money from "../money";
import mainimgts from '../../image/mainimgts.png'

function MainCard (props) {
    // Используем состояние для отслеживания того, отображается ли компонент Money
    const [showMoney, setShowMoney] = useState(false);

    return (
        <div className="bg-white w-[392px] h-[560px] rounded-[20px]">
            <div className="flex flex-col">
                <div>
                    <img src={mainimgts}/>
                </div>
                <div className="ml-[20px] mt-[16px]">
                    <h2 className="text-[16px] font-proto font-bold mb-[4x]">Солнечный тур по Санкт-петербургу</h2>
                    <p className="text-[14px] font-medium text-[#959595]">Санкт-петербург</p>
                    <p className="text-[14px] font-medium text-[#959595] mt-[12px]">Отель • Парки • Музеи • Выставки • Кафе • Рестораны • Театры • Опера</p>
                    <div></div>
                </div>
                <div className="flex justify-center mt-[36px]">
                    <button className="bg-[#FFCF08] w-[495px] h-[70px] rounded-[20px] font-roboto text-[26px] font-medium" onClick={props.onShowMoney}>Узнать больше</button>
                </div>

                {/* Если состояние showMoney равно true, тогда отображаем компонент Money */}
                {/* {showMoney && <Money />} */}
            </div>
        </div>
    )
}

export default MainCard;