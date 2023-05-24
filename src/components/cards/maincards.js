import React, { useState } from "react";
import Money from "../money";
import mainimgts from '../../image/mainimgts.png'
import rating from '../../icons/raiting.png'
import price from '../../icons/price.png'
import food from '../../icons/food.png'
import comfort from '../../icons/comfort.png'
import heart from '../../icons/heart.png'
import { Link } from "react-router-dom";

function MainCard ({onShowMoney}) {
    // Используем состояние для отслеживания того, отображается ли компонент Money

    return (
        <div className="bg-[#FFFBF3] w-[392px] h-[560px] rounded-[20px] border-[2px] border-[#FAEFDB]">
            <div className="flex flex-col">
                <div className="h-[286px]">
                    <img className="h-[286px] w-[384px] m-[2px]" src={mainimgts}/>
                </div>
                <div className="ml-[20px] mr-[20px]">
                    <h2 className="text-[16px] font-proto font-bold mb-[4x] mt-[16px]">Солнечный тур по Санкт-петербургу</h2>
                    <p className="text-[14px] font-medium text-[#959595]">Санкт-петербург</p>
                    <p className="text-[14px] font-medium text-[#959595] mt-[12px]">Отель • Парки • Музеи • Выставки • Кафе • Рестораны • Театры • Опера</p>
                    <div className="flex text-[14px] text-[#959595] mt-[10px] h-[72px] justify-between items-end">
                        <div className="justify-center">
                            <img className="ml-[10px]" src={rating} />
                            <p>5 оценок</p>
                        </div>
                        <div>
                            <img className="ml-[43px] mb-[10px]" src={price} />
                            <p>Цена / Качество</p>
                        </div>
                        <div>
                            <img className="ml-[30px] mb-[10px]" src={food} />
                            <p>Вкусная еда</p>
                        </div>
                        <div>
                            <img className="ml-[19px] mb-[10px]" src={comfort} />
                            <p>Комфорт</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-center mt-[23px] ml-[2px]">
                    <button className="bg-[#FFCF08] w-[334px] h-[48px] rounded-l-[20px] rounded-r-[4px] font-roboto font-medium" onClick={onShowMoney}>
                        <Link to="/money">
                            <p className="text-[16px] leading-[22px] font-semibold">25 000₽ за 5 дней</p>
                            <p className="text-[14px] leading-[16px] font-semibold text-[#959595]">Посмотреть</p>
                        </Link>
                    </button>
                    <button className="items-center ml-[2px] h-[48px] w-[48px] bg-[#FAEFDB] rounded-r-[20px] rounded-l-[4px]"><img className="ml-[12px]" src={heart} /></button>
                </div>

                {/* Если состояние showMoney равно true, тогда отображаем компонент Money */}
                {/* {showMoney && <Money />} */}
            </div>
        </div>
    )
}

export default MainCard;