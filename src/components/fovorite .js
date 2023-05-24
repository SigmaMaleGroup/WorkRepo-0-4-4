import React from "react";
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
    return (
        <div>
            <Header />
            <div className="h-[1252px] bg-[#F1E4CF] flex justify-center items-center">
                <div className="h-[1252px] w-[1224px]">
                    <div className="w-[301px] h-[102px]"> 
                        <div className="font-proto">
                            <h1 className="text-[32px] font-semibold">Избранное</h1>
                        </div>
                        <div className="flex mt-[24px] w-[301px] h-[44px] justify-between items-center text-[16px] font-semibold">
                            <p>Места</p>
                            <p className="text-[#959595]">Поездки</p>
                            <p className="text-[#959595]">Рекомендации</p>
                        </div>
                        <div className="h-[2px] w-[51px] bg-[#FFCF08]"></div>
                    </div>
                    <div className="mt-[40px] w-[1224px] h-[974px] flex flex-wrap justify-between items-between">
                        <FavoriteCadrd header="Все места" paragraf="100 мест" fvbutton="Посмотреть все" fvimgmane={fvimg1}/>
                        <FavoriteCadrd header="Оренбург" paragraf="2 дня, 3 места" fvbutton="Спанировать поездку" fvimgmane={fvimg2}/>
                        <FavoriteCadrd header="Алтай" paragraf="2 дня, 3 места" fvbutton="Спанировать поездку" fvimgmane={fvimg3}/>
                        <FavoriteCadrd header="Казань" paragraf="2 дня, 3 места" fvbutton="Спанировать поездку" fvimgmane={fvimg4}/>
                        <FavoriteCadrd header="Тюмень" paragraf="2 дня, 3 места" fvbutton="Спанировать поездку" fvimgmane={fvimg5}/>
                        <FavoriteCadrd header="Воронеж" paragraf="2 дня, 3 места" fvbutton="Спанировать поездку" fvimgmane={fvimg6}/>
                    </div>
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