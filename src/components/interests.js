import React from "react";
import Header from "./header";
import Footer from "./footer";
import mainbg from "../image/bgmain.png"
import InterestsCard from "./cards/interestscard";
import hotvac from '../image/hotvac.png'
import it2 from '../image/it2.png'
import it3 from '../image/it3.png'
import it4 from '../image/it4.png'
import it5 from '../image/it5.png'
import it6 from '../image/it6.png'
import it7 from '../image/it7.png'
import it8 from '../image/it8.png'
import it9 from '../image/it9.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from 'react-router-dom';

function Interests(props) {

    const location = useLocation();
    const initialButtonsArray = location.state ? location.state.clickedButtonsArray : [];

    const [selectedButton1, setSelectedButton1] = useState(null);
    const [selectedButton2, setSelectedButton2] = useState(null);
    const [selectedButton3, setSelectedButton3] = useState(null);
    const [clickedButtonsArray, setClickedButtonsArray] = useState(initialButtonsArray);

    const [tempButton1, setTempButton1] = useState(null);
    const [tempButton2, setTempButton2] = useState(null);
    const [tempButton3, setTempButton3] = useState(null);

    const handleButtonClick1 = (buttonName, buttonIndex) => {
        setSelectedButton1(buttonIndex);
        setTempButton1({ group: 0, button: buttonIndex, name: buttonName });
    }
    
    const handleButtonClick2 = (buttonName, buttonIndex) => {
        setSelectedButton2(buttonIndex);
        setTempButton2({ group: 1, button: buttonIndex, name: buttonName });
    }
    
    const handleButtonClick3 = (buttonName, buttonIndex) => {
        setSelectedButton3(buttonIndex);
        setTempButton3({ group: 2, button: buttonIndex, name: buttonName });
    }
    

    const onContinueClick = () => {
        setClickedButtonsArray(oldArray => {
            let newArr = [...oldArray];
            if (tempButton1) newArr.push(tempButton1);
            if (tempButton2) newArr.push(tempButton2);
            if (tempButton3) newArr.push(tempButton3);
            console.log(newArr);
            return newArr;
        });
    }
    

    return (
        <div>
            <Header />
            <div className="bg-[#F1E4CF] h-[1334px] flex flex-col justify-center items-center">
                <div className=" h-[1334px] w-[1306px] bg-[#FFFBF3] rounded-[48px]">
                    <div className="">
                        <div className="ml-[48px] mt-[48px]">
                            <h1 className="font-proto text-[36px] leading-[45px] font-semibold ">Что вас интересует?</h1>
                        </div>
                        <div className="flex mt-[40px] ml-[48px] mr-[48px] flex justify-between">
                            <InterestsCard img={hotvac} buttonname="Пялжный отдых" buttonIndex={1} onButtonClick={handleButtonClick1} selected={selectedButton1 === 1} />
                            <InterestsCard img={it2} buttonname="Горный отдых" buttonIndex={2} onButtonClick={handleButtonClick1} selected={selectedButton1 === 2} />
                            <InterestsCard img={it3} buttonname="Культурный отдых" buttonIndex={3} onButtonClick={handleButtonClick1} selected={selectedButton1 === 3} />
                        </div>
                    </div>
                    <div className="">
                        <div className="ml-[48px] mt-[40px]">
                            <h1 className="font-proto text-[36px] leading-[45px] font-semibold ">Как развлечемся?</h1>
                        </div>
                        <div className="flex mt-[40px] ml-[48px] mr-[48px] flex justify-between">
                            <InterestsCard img={it4} buttonname="Музеи" buttonIndex={1} onButtonClick={handleButtonClick2} selected={selectedButton2 === 1} />
                            <InterestsCard img={it5} buttonname="Парки" buttonIndex={2} onButtonClick={handleButtonClick2} selected={selectedButton2 === 2} />
                            <InterestsCard img={it6} buttonname="Театры" buttonIndex={3} onButtonClick={handleButtonClick2} selected={selectedButton2 === 3} />
                        </div>
                    </div>
                    <div className="">
                        <div className="ml-[48px] mt-[40px]">
                            <h1 className="font-proto text-[36px] leading-[45px] font-semibold ">Где будите кушать?</h1>
                        </div>
                        <div className="flex mt-[40px] ml-[48px] mr-[48px] flex justify-between">
                            <InterestsCard img={it7} buttonname="Кафе" buttonIndex={1} onButtonClick={handleButtonClick3} selected={selectedButton3 === 1} />
                            <InterestsCard img={it8} buttonname="Рестораны" buttonIndex={2} onButtonClick={handleButtonClick3} selected={selectedButton3 === 2} />
                            <InterestsCard img={it9} buttonname="Столовая" buttonIndex={3} onButtonClick={handleButtonClick3} selected={selectedButton3 === 3} />
                        </div>
                    </div>
                    <div className="ml-[48px] mt-[40px]">
                        <button className="w-[362px] h-[70px] bg-[#FFCF08] rounded-[20px] font-roboto text-[30px] font-semibold" onClick={onContinueClick}><Link to="/mainpage">Продолжить&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→</Link></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Interests;
