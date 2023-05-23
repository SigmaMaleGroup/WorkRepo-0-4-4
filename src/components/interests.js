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

function Interests () {
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
                                <InterestsCard img={hotvac} buttonname="Пялжный отдых"/>
                                <InterestsCard img={it2} buttonname="Горный отдых"/>
                                <InterestsCard img={it3} buttonname="Культурный отдых"/>
                            </div>
                        </div>
                        <div className="">
                            <div className="ml-[48px] mt-[40px]">
                                <h1 className="font-proto text-[36px] leading-[45px] font-semibold ">Как развлечемся?</h1>
                            </div>
                            <div className="flex mt-[40px] ml-[48px] mr-[48px] flex justify-between">
                                <InterestsCard img={it4} buttonname="Музеи"/>
                                <InterestsCard img={it5} buttonname="Парки"/>
                                <InterestsCard img={it6} buttonname="Театры"/>
                            </div>
                        </div>
                        <div className="">
                            <div className="ml-[48px] mt-[40px]">
                                <h1 className="font-proto text-[36px] leading-[45px] font-semibold ">Где будите кушать?</h1>
                            </div>
                            <div className="flex mt-[40px] ml-[48px] mr-[48px] flex justify-between">
                                <InterestsCard img={it7} buttonname="Кафе"/>
                                <InterestsCard img={it8} buttonname="Рестораны"/>
                                <InterestsCard img={it9} buttonname="Столовая"/>
                            </div>
                        </div>
                        <div className="ml-[48px] mt-[40px]">
                            <button className="w-[362px] h-[70px] bg-[#FFCF08] rounded-[20px] font-roboto text-[30px] font-semibold">Продолжить&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→</button>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Interests;