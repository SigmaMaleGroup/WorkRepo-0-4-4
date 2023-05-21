import React from "react";
import Header from "./header";
import Footer from "./footer";
import mainbg from "../image/bgmain.png"
import InterestsCard from "./cards/interestscard";
import hotvac from '../image/hotvac.png'

function Interests () {
    return (
        <div>
            <Header />
                <div className="bg-cover bg-center h-[3000px]" style={{ backgroundImage: `url(${mainbg})` }} >
                    <div className="w-[1714px]">
                        <div className="ml-[103px] mt-[43px]">
                            <h1 className="font-proto text-[36px] leading-[45px] font-semibold font-">Что вас интересует?</h1>
                        </div>
                        <div className="flex">
                            <InterestsCard img={hotvac} buttonname="Горячий отдых"/>
                            <InterestsCard img={hotvac} buttonname="Горячий отдых"/>
                            <InterestsCard img={hotvac} buttonname="Горячий отдых"/>
                        </div>
                    </div>
                    <div className="w-[1714px]">
                        <div className="ml-[103px] mt-[43px]">
                            <h1 className="font-proto text-[36px] leading-[45px] font-semibold font-">Как развлечемся?</h1>
                        </div>
                        <div className="flex">
                            <InterestsCard img={hotvac} buttonname="Горячий отдых"/>
                            <InterestsCard img={hotvac} buttonname="Горячий отдых"/>
                            <InterestsCard img={hotvac} buttonname="Горячий отдых"/>
                        </div>
                    </div>
                    <div className="w-[1714px]">
                        <div className="ml-[103px] mt-[43px]">
                            <h1 className="font-proto text-[36px] leading-[45px] font-semibold font-">Где будите кушать?</h1>
                        </div>
                        <div className="flex">
                            <InterestsCard img={hotvac} buttonname="Горячий отдых"/>
                            <InterestsCard img={hotvac} buttonname="Горячий отдых"/>
                            <InterestsCard img={hotvac} buttonname="Горячий отдых"/>
                        </div>
                    </div>
                    <div className="ml-[103px] mt-[96px]">
                        <button className="w-[400px] h-[100px] bg-[#FFCF08] rounded-[50px] font-roboto text-[30px] font-semibold">Продолжить&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→</button>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Interests;