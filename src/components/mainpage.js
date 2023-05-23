import React, {useState} from "react";
import Header from "./header";
import Footer from "./footer";
import Datepicker from "react-tailwindcss-datepicker";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import users from '../icons/users.png'
import location from '../icons/location.png'
import mapimg from '../image/mapimg.png'
import MainCard from "./cards/maincards";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function MainPage () {


    
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

    return (
        <div className="bg-[#F1E4CF]">
            <Header />
            <div className="h-[2601px] flex justify-center font-proto">
                <div>
                    <div className="h-[590px] w-[392px] bg-[#FFFBF3] rounded-[50px]">
                        <h1 className="pt-[48px] ml-[48px] text-[32px] font-semibold">Фильтры</h1>
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex flex-col h-[82px] w-[301px] flex items-start">
                                <label className="ml-[20px] font-semibold text-[#777777]">Город</label>
                                <div className="flex justify-center items-center shadow-mp w-[301px] h-[60px] bg-white rounded-[20px]">
                                    <input className="w-[262px] h-[24px]" placeholder="Найти"/>
                                </div>
                            </div>
                            <div className="flex flex-col mt-[24px] h-[82px] w-[301px] flex items-start">
                                <label className="ml-[20px] font-semibold text-[#777777]">Даты</label>
                                <div className="flex justify-center items-center shadow-mp w-[301px] h-[60px] bg-white rounded-[20px]">
                                    <Datepicker className="font-semibold" value={value} onChange={handleValueChange} placeholder="ДД.ММ - ДД.ММ" displayFormat={"DD/MM"}/>
                                </div>
                            </div>
                            <div className=" mt-[24px] h-[60px] w-[301px]  flex items-end">
                                <div className="flex justify-center items-center shadow-mp w-[301px] h-[60px] bg-white rounded-[20px]">
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
                                </div>
                            </div>
                            <div className="mt-[24px] h-[72px] w-[301px] ">
                                <div className="h-[72px] w-[260px] bg-white">
            
                                </div>
                            </div>
                            <button className="mt-[48px] w-[301px] h-[50px] bg-[#FFCF08] rounded-[12.5px] text-[22px] font-semibold">Найти</button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-[24px] h-[217px] w-[392px] bg-[#FFFBF3] rounded-[50px]">
                        <button className=" flex flex-col items-center justify-center">
                            <img src={mapimg} />
                            <h1 className="w-[300px] flex items-center text-[22px] font-semibold">Посмотреть на карте<img className="ml-[13px] h-[20px]" src={location}/></h1>
                        </button>
                    </div>
                </div>
                <div className="ml-[24px] h-[2601px] w-[904px] bg-[#FFFBF3] rounded-[50px]">
                    <h1 className="text-[32px] font-semibold h-[123px] pt-[48px] ml-[48px]">Направления по запросу: Москва</h1>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-wrap justify-between w-[805px] h-[2380px]">
                            <MainCard />
                            <MainCard />
                            <MainCard />
                            <MainCard />
                            <MainCard />
                            <MainCard />
                            <MainCard />
                            <MainCard />
                        </div>
                        <button className=" mt-[25px] text-[17px] font-semibold h-[50px] w-[400px] bg-[#FFCF08] rounded-[12.5px]">Посмотреть еще</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainPage;