import React, { useState } from "react";
import mainmap from '../image/mapmain.png'
import MapCard1 from "./mapcards/mapcard1";
import MapCard2 from "./mapcards/mapcard2";
import MapCard3 from "./mapcards/mapcard3";
import MapCard4 from "./mapcards/mapcard4";
import '../App.css'
import flag from '../icons/flag.png'
import zone1 from '../image/zone1.svg'

function Nav () {
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
            case '0':
                return <MapCard1 number={0}/>
            case '1':
                return <MapCard2 number={1}/>
            case '2':
                return <MapCard3 number={2}/>
            case '3':
                return <MapCard4 number={3}/>
            default:
                return null;
        }
    }

    return (
        <div className="relative bg-cover bg-center h-[810px] flex flex-col items-center justify-center" onClick={onBackgroundClick}>
            <h1 className="selfcenter mb-[39px] font-proto text-[36px] font-semibold">Карта интересов</h1>
            <div className="h-[479px] w-[1224px] rounded-[75px] relative flex justify-center items-center ">
                <div className={`absolute h-[479px] w-[1224px] bg-black mx-[50px] my-[44px] rounded-[50px] bg-cover bg-center`} style={{ backgroundImage: `url(${mainmap})`, filter: isDarken ? 'brightness(70%)' : 'brightness(100%)' }}/>
                <div className="h-[637.52px] w-[1620px] mx-[50px] my-[44px] rounded-[50px] justify-center items-center flex relative">
                    <button className="relative top-[-50px] right-[320px] text-black" onClick={() => handleButtonClick('0')}><img src={flag} /></button>
                    <button className="relative left-[-120px]" onClick={() => handleButtonClick('1')}><img src={flag} /></button>
                    <button className="relative left-[10px]" onClick={() => handleButtonClick('2')}><img src={flag} /></button>
                    <button className="relative top-[-50px] right-[-200px]" onClick={() => handleButtonClick('3')}><img src={flag} /></button>

                    {renderSelectedCard()}
                </div>
            </div>
        </div>
    );
}

export default Nav;