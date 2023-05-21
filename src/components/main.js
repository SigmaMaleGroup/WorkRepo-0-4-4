import React, {useState} from "react";
import mainbg from '../image/bgmain.png'
import MainCard from "./cards/maincards";
import hotel from '../icons/hotel.png'
import restoraunt from '../icons/resotaunt.png'
import museum from '../icons/museum.png'
import excursion from '../icons/excursion.png'
import avia from '../icons/avia.png'
import train from '../icons/train.png'
import directions from '../icons/directions.png'
import Datepicker from "react-tailwindcss-datepicker";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import users from '../icons/users.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Main (props) {

    const [value, setValue] = useState({ 
        startDate: new Date(), 
        endDate: new Date().setMonth(11) 
        });
        

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
    }

    const [selectedOption, setSelectedOption] = useState("Количество людей");

    const handleSelect = (option) => {
        setSelectedOption(option);
    }


    return(
        <div className="bg-cover bg-center min-h-[2000px] bg-[#F1E4CF] flex justify-center font-suisse">
            <div className="bg-[#FFFBF3] w-[1320px] h-[1480px] rounded-[48px]">
                <div className="flex justify-center flex-col">
                    <div className=" h-[48px] w-[1106px] mt-[48px] ml-[106px] flex text-[16px] font-semibold">
                        <button className="bg-[#FAEFDB] rounded-[12px] mr-[12px] items-center h-[48px] w-[115px] flex"> <img src={hotel} className="mr-[8px] ml-[16px]" /> Отели</button>
                        <button className="bg-[#FAEFDB] rounded-[12px] mr-[12px] items-center h-[48px] w-[153px] flex"><img src={restoraunt} className="mr-[8px] ml-[16px]" />Рестораны</button>
                        <button className="bg-[#FAEFDB] rounded-[12px] mr-[12px] items-center h-[48px] w-[116px] flex"><img src={museum} className="mr-[8px] ml-[16px]" />Музеи</button>
                        <button className="bg-[#FAEFDB] rounded-[12px] mr-[12px] items-center h-[48px] w-[152px] flex"><img src={excursion} className="mr-[8px] ml-[16px]" />Экскурсии</button>
                        <button className="bg-[#FAEFDB] rounded-[12px] mr-[12px] items-center h-[48px] w-[164px] flex"><img src={avia} className="mr-[8px] ml-[16px]" />Авиабилеты</button>
                        <button className="bg-[#FAEFDB] rounded-[12px] mr-[12px] items-center h-[48px] w-[160px] flex"><img src={train} className="mr-[8px] ml-[16px]" />Ж/Д билеты</button>
                        <button className="bg-[#FAEFDB]  rounded-[12px] items-center h-[48px] w-[174px] flex border-[2px] border-[#FFCF08]"><img src={directions} className="mr-[8px] ml-[16px]" />Направления</button>
                    </div>
                    <div className="flex justify-center mt-[16px]" >
                        <div className="w-[1224px] h-[72px] bg-white rounded-[20px] flex items-center">
                            <input className="ml-[24px] w-[576px]" placeholder="Куда поедите?"/>
                            <div className="h-[40px] bg-[#FAEFDB] w-[2px] rounded-[2px] ml-[25px]"></div>
                            <div className="w-[206px]">
                                <Datepicker className="font-semibold" value={value} onChange={handleValueChange} placeholder="ДД.ММ - ДД.ММ" displayFormat={"DD/MM"}/>
                            </div>
                            <div className="h-[40px] bg-[#FAEFDB] w-[2px] rounded-[2px]"></div>
                            <Menu as="div" className="relative flex inline-block text-lef ml-[10px] w-[285px] justify-start">
                                <div>
                                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50">
                                    <img src={users} /> {selectedOption}</Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (<a href="#" onClick={() => handleSelect("1 человек")} className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>1 человек</a>)}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (<a href="#" onClick={() => handleSelect("2 человека")} className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>2 человека</a>)}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (<a href="#" onClick={() => handleSelect("3 человека")} className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>3 человека</a>)}
                                            </Menu.Item>
                                            {/* <form method="POST" action="#">
                                            <Menu.Item>
                                                    {({ active }) => (<button type="submit" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block w-full px-4 py-2 text-left text-sm')}>Sign out</button>)}
                                            </Menu.Item>
                                            </form> */}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            <div>
                                <button className="h-[48px] w-[83px] rounded-[12px] bg-[#FFCF08] font-semibold">Найти</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[40px] ml-[20px]">
                        <MainCard onShowMoney={props.onShowMoney} />
                    </div>
                    {/* <MainCard onShowMoney={props.onShowMoney} /> прокидываем функцию дальше */}
                </div>
            </div>
        </div>
    )
}

export default Main;