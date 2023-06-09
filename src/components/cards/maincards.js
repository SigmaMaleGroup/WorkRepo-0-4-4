import React, { useState, useEffect } from "react";
import Money from "../money";
import rating from '../../icons/raiting.png'
import price from '../../icons/price.png'
import food from '../../icons/food.png'
import comfort from '../../icons/comfort.png'
import heart from '../../icons/heart.png'
import heart2 from '../../icons/heart2.svg'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {addTrip} from  '../redux/favoritesSlice'


function MoneyButton(props) {
    const [data, setData] = useState([]); // Assume data is an object
    let navigate = useNavigate();

    useEffect(() => {
        // code to fetch or create your data
        setData(props.coord); // replace this with your actual data
    }, []);

    const pushToMoney = () => {
        navigate('/money', { state: { data } });
    }


    return (
        <div onClick={pushToMoney}>
            <p className="text-[16px] leading-[22px] font-semibold">{props.price}₽ за {props.day} {props.wDay}</p>
            <p className="text-[14px] leading-[16px] font-semibold text-[#959595]">Посмотреть</p>
        </div>
    );
}

function MainCard (props, tourID) {
    // Используем состояние для отслеживания того, отображается ли компонент Money
        const dispatch = useDispatch()

        const [isHeartSelected, setIsHeartSelected] = useState(false);

        const handleButtonClick = () => {
        setIsHeartSelected(!isHeartSelected);
        };    


        let wordDay;
        // Определите, равна ли последняя цифра числа 1.
        if (props.maincardday % 10 == 1 && props.maincardday < 11) {
            wordDay = 'день';
        } else if (props.maincardday % 10 <= 4){
            wordDay = 'дня';
        } else {
            wordDay = 'дней';
        }
      

    return (
            <div className="bg-[#FFFBF3] w-[392px] h-[560px] rounded-[20px] border-[2px] border-[#FAEFDB]">
                <div className="flex flex-col">
                    <div className="h-[286px] ">
                        <img className="h-[286px] w-[384px] m-[2px]  rounded-[15px]" src={props.maincardimg}/>
                    </div>
                    <div className="ml-[20px] mr-[20px]">
                        <h2 className="text-[16px] h-[40px] font-proto font-bold mb-[4x] mt-[6px]">{props.maincardtitle}</h2>
                        <p className="text-[14px] font-medium text-[#959595] mt-[10px] h-[16px]">{props.maincardsity}</p>
                        <p className="text-[14px] font-medium text-[#959595] mt-[12px]">Отель • Парки • Музеи • Выставки • Кафе • Рестораны • Театры • Опера</p>
                        <div className="flex text-[14px] text-[#959595] mt-[8px] h-[62px] justify-between items-end">
                            <div className="justify-center">
                                <img className="ml-[10px]" src={rating} />
                                <p>5 оценок</p>
                            </div>
                            <div>
                                <img className="ml-[43px] mb-[10px]" src={price} />
                                <p>Цена / Качество</p>
                            </div>
                            <div>
                                <img className="ml-[30px] mb-[10px]" src={food} />
                                <p>Вкусная еда</p>
                            </div>
                            <div>
                                <img className="ml-[19px] mb-[10px]" src={comfort} />
                                <p>Комфорт</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start items-center mt-[23px] ml-[2px]">
                        <button className="bg-[#FFCF08] w-[334px] h-[48px] rounded-l-[20px] rounded-r-[4px] font-roboto font-medium">
                            <MoneyButton price={props.maincardprice} day={props.maincardday} wDay={wordDay} coord={props.maincardcoord}/>
                        </button>
                        <button className="items-center ml-[2px] h-[48px] w-[48px] bg-[#FAEFDB] rounded-r-[20px] rounded-l-[4px]"
                            onClick={() => dispatch(addTrip({id: tourID}))}>
                            <img className="ml-[12px]" src={heart} />
                        </button>
                    </div>
                    {/* Если состояние showMoney равно true, тогда отображаем компонент Money */}
                    {/* {showMoney && <Money />} */}
                </div>
            </div>
    )
}

export default MainCard;
export {MoneyButton};