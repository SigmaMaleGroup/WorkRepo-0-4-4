import React, { useReducer } from "react";
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
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Interests(props) {
    const location = useLocation();
    const region_index = location.state?.data;
    let navigate = useNavigate();
    console.log(region_index);

    const [selectedButton1, setSelectedButton1] = useState(-1);
    const [selectedButton2, setSelectedButton2] = useState(-1);
    const [selectedButton3, setSelectedButton3] = useState(-1);
    

    const handleButtonClick1 = (buttonName, buttonIndex) => {
        setSelectedButton1(buttonIndex);
    }
    
    const handleButtonClick2 = (buttonName, buttonIndex) => {
        setSelectedButton2(buttonIndex);
    }
    
    const handleButtonClick3 = (buttonName, buttonIndex) => {
        setSelectedButton3(buttonIndex);
    }

    const onContinueClick = () => {
        if (selectedButton1 !== -1 && selectedButton2 !== -1 && selectedButton3 !== -1) {
          navigate('/mainpage', { state: { selectedButton1, selectedButton2, selectedButton3, region_index}});
        }
    };
    

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
                            <InterestsCard img={hotvac} buttonname="Активный отдых" buttonIndex={0} onButtonClick={handleButtonClick1} selected={selectedButton1 === 0} />
                            <InterestsCard img={it2} buttonname="Горный отдых" buttonIndex={1} onButtonClick={handleButtonClick1} selected={selectedButton1 === 1} />
                            <InterestsCard img={it3} buttonname="Культурный отдых" buttonIndex={2} onButtonClick={handleButtonClick1} selected={selectedButton1 === 2} />
                        </div>
                    </div>
                    <div className="">
                        <div className="ml-[48px] mt-[40px]">
                            <h1 className="font-proto text-[36px] leading-[45px] font-semibold ">Как развлечемся?</h1>
                        </div>
                        <div className="flex mt-[40px] ml-[48px] mr-[48px] flex justify-between">
                            <InterestsCard img={it4} buttonname="Музеи" buttonIndex={0} onButtonClick={handleButtonClick2} selected={selectedButton2 === 0} />
                            <InterestsCard img={it5} buttonname="Парки" buttonIndex={1} onButtonClick={handleButtonClick2} selected={selectedButton2 === 1} />
                            <InterestsCard img={it6} buttonname="Театры" buttonIndex={2} onButtonClick={handleButtonClick2} selected={selectedButton2 === 2} />
                        </div>
                    </div>
                    <div className="">
                        <div className="ml-[48px] mt-[40px]">
                            <h1 className="font-proto text-[36px] leading-[45px] font-semibold ">Где будите кушать?</h1>
                        </div>
                        <div className="flex mt-[40px] ml-[48px] mr-[48px] flex justify-between">
                            <InterestsCard img={it7} buttonname="Кафе" buttonIndex={0} onButtonClick={handleButtonClick3} selected={selectedButton3 === 0} />
                            <InterestsCard img={it8} buttonname="Рестораны" buttonIndex={1} onButtonClick={handleButtonClick3} selected={selectedButton3 === 1} />
                            <InterestsCard img={it9} buttonname="Столовая" buttonIndex={2} onButtonClick={handleButtonClick3} selected={selectedButton3 === 2} />
                        </div>
                    </div>
                    <div className="ml-[48px] mt-[40px]">
                        <button className="w-[362px] h-[70px] bg-[#FFCF08] rounded-[20px] font-roboto text-[30px] font-semibold" onClick={onContinueClick}>
                            Продолжить&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Interests;