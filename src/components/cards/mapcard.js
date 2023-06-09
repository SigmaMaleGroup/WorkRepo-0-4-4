import React from "react";
import mapcardimg from '../../image/mapcardimg.png'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";


function InterestsButton(props) {
    const [data, setData] = useState([]); // Assume data is an object
    let navigate = useNavigate();

    useEffect(() => {
        // code to fetch or create your data
        setData(props.number); // replace this with your actual data
    }, []);

    const onContinueClick = () => {
        navigate('/interests', { state: { data } });
    }

    return (
        <button onClick={onContinueClick} className="w-[384px] h-[48px] rounded-[20px] bg-[#FFCF08] text-[16px] font-semibold">Продолжить →</button>
    );
}

function MapCard ({number, mpcrimg, mpcrheader, mpcrpar}) {
    return (
        <div className="map-card">
            <div className="h-[560px] w-[392px] bg-white rounded-[20px] drop-shadow-md">
                <div className="flex flex-col jusify-center items-center">
                    <div className="m-[4px] flex">
                        <img src={mpcrimg} />
                    </div>
                    <div className="mx-[20px] h-[214px] flex flex-col items-start font-proto">
                        <h1 className=" text-[24px] font-semibold">{mpcrheader}</h1>
                        <p className="text-[14px] font-semibold text-[#1d1d1d80]">{mpcrpar}</p>
                    </div>
                    <div className=" flex jusify-end items-end mb-[4px]">
                        <InterestsButton number={number}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MapCard;
