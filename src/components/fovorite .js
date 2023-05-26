import React, { useState } from "react";
import Header from './header';
import Footer from "./footer";
import FavoriteCadrd from "./cards/favoritecard";
import fvimg1 from '../image/fvimg1.png'
import fvimg2 from '../image/fvimg2.png'
import fvimg3 from '../image/fvimg3.png'
import fvimg4 from '../image/fvimg4.png'
import fvimg5 from '../image/fvimg5.png'
import fvimg6 from '../image/fvimg6.png'

function Favorite (props) {
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    }

    return (
        <div>
        <Header />
        <div className="min-h-[1252px] bg-[#F1E4CF] flex justify-center items-center">
            <div className="min-h-[1252px] w-[1224px]">
                <div className="w-[301px] h-[102px]"> 
                    <div className="font-proto">
                        <h1 className="text-[32px] font-semibold">Избранное</h1>
                    </div>
                    <div className="flex mt-[24px] w-[301px] h-[44px] justify-between items-center text-[16px] font-semibold">
                        <div>
                            <button style={{color: activeButton === 1 ? "black" : "#1d1d1d80"}} onClick={() => handleButtonClick(1)}>Места</button>
                            <div style={{display: activeButton === 1 ? "block" : "none"}} className="h-[2px] w-[51px] bg-[#FFCF08]"></div>
                        </div>
                        <div>
                            <button style={{color: activeButton === 2 ? "black" : "#1d1d1d80"}} onClick={() => handleButtonClick(2)}>Поездки</button>
                            <div style={{display: activeButton === 2 ? "block" : "none"}} className="h-[2px] w-[68px] bg-[#FFCF08]"></div>
                        </div>
                        <div>
                            <button style={{color: activeButton === 3 ? "black" : "#1d1d1d80"}} onClick={() => handleButtonClick(3)}>Рекомендации</button>
                            <div style={{display: activeButton === 3 ? "block" : "none"}} className="h-[2px] w-[120px] bg-[#FFCF08]"></div>
                        </div>
                    </div>
                </div>
                {activeButton === 1 && (
                    <div className="mt-[40px] w-[1224px] h-[974px] flex flex-wrap justify-between items-between">
                        <FavoriteCadrd header="Все места" paragraf="100 мест" fvbutton="Посмотреть все" fvimgmane={fvimg1}/>
                        <FavoriteCadrd header="Оренбург" paragraf="2 дня, 3 места" fvbutton="Спанировать поездку" fvimgmane={fvimg2}/>
                        <FavoriteCadrd header="Алтай" paragraf="2 дня, 3 места" fvbutton="Спанировать поездку" fvimgmane={fvimg3}/>
                        <FavoriteCadrd header="Казань" paragraf="2 дня, 3 места" fvbutton="Спанировать поездку" fvimgmane={fvimg4}/>
                        <FavoriteCadrd header="Тюмень" paragraf="2 дня, 3 места" fvbutton="Спанировать поездку" fvimgmane={fvimg5}/>
                        <FavoriteCadrd header="Воронеж" paragraf="2 дня, 3 места" fvbutton="Спанировать поездку" fvimgmane={fvimg6}/>
                    </div>
                )}
                {activeButton === 2 && (
                    <div className="mt-[40px] w-[1224px] h-[974px] flex flex-wrap justify-between items-between">
                        <FavoriteCadrd header="Все места" paragraf="100 мест" fvbutton="Отрыть план" fvimgmane={fvimg1}/>
                        <FavoriteCadrd header="аааОренбург" paragraf="2 дня, 3 места" fvbutton="Отрыть план" fvimgmane={fvimg2}/>
                        <FavoriteCadrd header="ааАлтай" paragraf="2 дня, 3 места" fvbutton="Отрыть план" fvimgmane={fvimg3}/>
                        <FavoriteCadrd header="Казань" paragraf="2 дня, 3 места" fvbutton="Отрыть план" fvimgmane={fvimg4}/>
                        <FavoriteCadrd header="Тюмень" paragraf="2 дня, 3 места" fvbutton="Отрыть план" fvimgmane={fvimg5}/>
                        <FavoriteCadrd header="Воронеж" paragraf="2 дня, 3 места" fvbutton="Отрыть план" fvimgmane={fvimg6}/>
                    </div>
                )}
                {activeButton === 3 && (
                    <div className="mt-[40px] w-[1224px] h-[974px] flex flex-wrap justify-between items-between">
                        <FavoriteCadrd header="ббВсе места" paragraf="100 мест" fvbutton="Посмотреть" fvimgmane={fvimg1}/>
                        <FavoriteCadrd header="ббОренбург" paragraf="2 дня, 3 места" fvbutton="Посмотреть" fvimgmane={fvimg2}/>
                        <FavoriteCadrd header="Алтай" paragraf="2 дня, 3 места" fvbutton="Посмотреть" fvimgmane={fvimg3}/>
                        <FavoriteCadrd header="Казань" paragraf="2 дня, 3 места" fvbutton="Посмотреть" fvimgmane={fvimg4}/>
                        <FavoriteCadrd header="Тюмень" paragraf="2 дня, 3 места" fvbutton="Посмотреть" fvimgmane={fvimg5}/>
                        <FavoriteCadrd header="Воронеж" paragraf="2 дня, 3 места" fvbutton="Посмотреть" fvimgmane={fvimg6}/>
                    </div>
                )}
                <div className="h-[88px] w-[1224px] flex justify-center">
                    <button className="mt-[40px] h-[48px] w-[392px] bg-[#f5dfb880] rounded-[12px] border-[2px] border-[#f5dfb8] font-semibold">Показать еще</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Favorite;