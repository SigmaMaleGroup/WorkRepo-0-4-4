import React from "react";
import cross from '../icons/cross.png'
import bgbanner from '../image/bgbanner.png'

function Banner () {
    return (
        <div className="h-[252px]  bg-[#F1E4CF] flex justify-center items-center">
            <div className="h-[184px] w-[1224px] bg-black rounded-[30px] flex flex-col items-end bg-cover bg-center mb-[44px]" style={{ backgroundImage: `url(${bgbanner})` }}>
                <button className="mt-[20px] mr-[20px]"> <img src={cross} /> </button>
            </div>
        </div>
    )
}

export default Banner;