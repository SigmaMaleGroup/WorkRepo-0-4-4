import React, { useState } from "react";
import mainmap from '../image/mapmain.png'
import MapCard1 from "./mapcards/mapcard1";
import MapCard2 from "./mapcards/mapcard2";
import MapCard3 from "./mapcards/mapcard3";
import MapCard4 from "./mapcards/mapcard4";
import '../App.css'

function Nav ({ onButtonClick: onInterestsButtonClick }) {
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [isDarken, setDarken] = useState(false);

    const handleButtonClick = (cardId) => {
        setSelectedCardId(cardId);
        setDarken(true);
    }

    const onBackgroundClick = (event) => {
        if (event.target !== event.currentTarget) return;
        setSelectedCardId(null);
        setDarken(false);
    }

    const renderSelectedCard = () => {
        switch (selectedCardId) {
            case '1':
                return <MapCard1 onButtonClick={onInterestsButtonClick} />;
            case '2':
                return <MapCard2 onButtonClick={onInterestsButtonClick} />;
            case '3':
                return <MapCard3 onButtonClick={onInterestsButtonClick} />;
            case '4':
                return <MapCard4 onButtonClick={onInterestsButtonClick} />;
            default:
                return null;
        }
    }

    return (
        <div className="relative bg-cover bg-center h-[810px] flex flex-col items-center justify-center" onClick={onBackgroundClick}>
            <h1 className="self-start mb-[39px] ml-[94px] font-proto text-[36px] font-semibold">Куда отправимся?</h1>
            <div className="h-[726px] w-[1720px] bg-[#DBEFF8] rounded-[75px] relative">
                <div className={`absolute h-[637.52px] w-[1620px] bg-black mx-[50px] my-[44px] rounded-[50px] bg-cover bg-center`} style={{ backgroundImage: `url(${mainmap})`, filter: isDarken ? 'brightness(70%)' : 'brightness(100%)' }}/>
                <div className="h-[637.52px] w-[1620px] mx-[50px] my-[44px] rounded-[50px] justify-center items-center flex relative">
                    <button className="mr-[200px] text-black" onClick={() => handleButtonClick('1')}>Европейская часть</button>
                    <button className="mr-[200px] text-black" onClick={() => handleButtonClick('2')}>Центральная часть</button>
                    <button className="mr-[200px] text-black" onClick={() => handleButtonClick('3')}>Якутия</button>
                    <button className="mr-[100px] text-black" onClick={() => handleButtonClick('4')}>Приморье</button>
                    {renderSelectedCard()}
                </div>
            </div>
        </div>
    );
}

export default Nav;