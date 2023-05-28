import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from './redux/createslice';
import MainCard from "./cards/maincards";
import mainimgts from '../image/mainimgts.png'
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
import users from '../icons/users.png'
import Nav from "./nav";
import mag from '../image/mag.png'
import mag1 from '../image/mag1.png'
import mag2 from '../image/mag2.png'
import mag3 from '../image/mag3.png'
import mag4 from '../image/mag4.png'
import mag5 from '../image/mag5.png'
import mag6 from '../image/mag6.png'
import mag7 from '../image/mag7.png'
import QR from '../image/QR.png'
import phones from '../image/phones.png'
import { Link } from "react-router-dom";
import Header from "./header";
import Banner from "./banner";
import Footer from "./footer";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Main ({ app, onShowMainPage}) {
    const [tour, setTour] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          const db = getFirestore(app);
          const tours = await getTours(db);
          var indeces = []
          for (var i = 0; i < 6; i++){
            var randomIndex = Math.floor(Math.random() * tours.length);
            var city_id = tours[randomIndex]?.dictionary_data?.city || '';
            const city_data = await getCity(db, city_id);
            var randomCity = city_data[0];
            var randomCoords = city_data[1];
            var randomTitle = tours[randomIndex]?.dictionary_data?.title || '';
            var randomPrice = tours[randomIndex]?.dictionary_data?.price || '';
            var randomDays = tours[randomIndex]?.dictionary_data?.days || '';
            var img_id = '62a1aa9ab076bd79ea7a45a3.jpeg';
            const storage = getStorage();
            const imageRef = ref(storage, `images/${img_id}`);
            const imgUrl = await getDownloadURL(imageRef);

            indeces.push([randomTitle, randomCity, randomPrice, randomDays, imgUrl, randomCoords])
          }
    
          setTour(indeces);
        };
    
        fetchData();
      }, []);
    
      async function getCity(db, id) {
        const citiesRef = collection(db, "cities");
        const q = query(citiesRef, where("_id.$oid", "==", id));
        const querySnapshot = await getDocs(q);
        
        let city = null;
        let city_coord = [];
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          city = data?.dictionary_data?.title
          city_coord = data?.dictionary_data?.geo_data?.coordinates
          console.log(city_coord)
        }
        
        return [city, city_coord];
      }

    async function getTours(db) {
        const toursCol = collection(db, 'tours');
        const tourSnapshot = await getDocs(toursCol);
        const tourList = tourSnapshot.docs.map(doc => doc.data());
        return tourList;
      }


    const [buttonsPressed, setButtonsPressed] = useState([]);

    const onButtonClick = (buttonIndex) => {
        setButtonsPressed(prevButtonsPressed => [...prevButtonsPressed, buttonIndex]);
    }

    const onContinueClick = () => {
        console.log(buttonsPressed);
    }


    // какая страница
    const dispatch = useDispatch();

    const handlePageChange = (newPage) => {
        console.log('Setting new page:', newPage);
        localStorage.setItem('currentPage', newPage);
        dispatch(changePage(newPage));
      };


    // ебань для выбора даты
    const [value, setValue] = useState({
        startDate: new Date(), 
        endDate: new Date().setMonth(11)
        });


    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
    }

    // селектор сколько людей
    const [selectedOption, setSelectedOption] = useState("Количество людей");

    const handleSelect = (option) => {
        setSelectedOption(option);
    }


    return(
        <div>
            <Header />
            <Banner />
            <div className="bg-cover bg-center min-h-[2000px] bg-[#F1E4CF] flex flex-col justify-center items-center font-suisse">
                <div className=" flex bg-[#FFFBF3] w-[1320px] h-[1480px] rounded-[48px]">
                    <div className="flex justify-center flex-col">
                        <div className=" h-[48px] w-[1106px] mt-[0px] ml-[106px] flex text-[16px] font-semibold">
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
                                    <button className="h-[48px] w-[83px] rounded-[12px] bg-[#FFCF08] font-semibold"><Link to="/mainpage">Найти</Link></button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[40px] h-[1152px] flex flex-wrap ml-[48px] mr-[48px] justify-between content-between">
                        {tour.length > 0 ? (
                                Array.from({ length: 6 }, (_, index) => (
                                    <MainCard 
                                        maincardtitle={tour[index][0]} 
                                        maincardsity={tour[index][1]} 
                                        maincardprice={tour[index][2]} 
                                        maincardday={tour[index][3]}
                                        maincardimg={tour[index][4]}
                                        maincardcoord={tour[index][5]}
                                    />
                                ))
                            ) : (
                                <div>Loading...</div>
                            )}
                        </div>
                        {/* <MainCard onShowMoney={props.onShowMoney} /> прокидываем функцию дальше */}
                    </div>
                </div>
                <div className="flex h-[653px] w-[1320px] bg-[#FFFBF3] items-center justify-center mt-[40px] rounded-[48px]">
                    <Nav onButtonClick={onButtonClick} onContinueClick={onContinueClick} />
                </div>
                <div className="h-[1240px] w-[1320px] bg-[#FFFBF3] mt-[40px] rounded-[48px] flex flex-col items-center">
                    <div className="mt-[24px]">
                        <img className="mt-[32px] mb-[12px]" src={mag} />
                    </div>
                    <div className="h-[1034px] w-[1224px] mt-[24px]">
                        <div className="flex items-center justify-center">
                            <div className=" flex flex-col items-center h-[392px] w-[288px] mr-[24px] text-center">
                                <img className="mt-[16px]" src={mag1} />
                                <p className="mt-[24px] text-[14px] text-[#007470] font-semibold">Cпецпроект</p>
                                <h1 className="text-[20px] font-semibold">Путешествие по полуострову влюбленных</h1>
                            </div>
                            <div className=" flex flex-col items-center h-[522px] w-[496px] text-center">
                                <img className="" src={mag2}/>
                                <p className="mt-[24px] text-[14px] text-[#007470] font-semibold">Природа</p>
                                <h1 className="text-[20px] font-semibold">Авторский маршрут "Японцы в Москве"</h1>
                            </div>
                            <div className="flex flex-col items-center h-[392px] w-[288px] ml-[24px] text-center">
                                <img className="mt-[16px]" src={mag3}/>
                                <p className="mt-[24px] text-[14px] text-[#007470] font-semibold">Природа</p>
                                <h1 className="text-[20px] font-semibold">Путешествуем по Липецкой области</h1>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-[48px] gap-[24px]">
                            <div className="flex flex-col items-center h-[392px] w-[288px] text-center">
                                <img className="mt-[16px]" src={mag4}/>
                                <p className="mt-[24px] text-[14px] text-[#007470] font-semibold">Природа</p>
                                <h1 className="text-[20px] font-semibold">Путешествие по полуострову влюбленных</h1>
                            </div>
                            <div className="flex flex-col items-center h-[392px] w-[288px] text-center">
                                <img className="mt-[16px]" src={mag5}/>
                                <p className="mt-[24px] text-[14px] text-[#007470] font-semibold">Природа</p>
                                <h1 className="text-[20px] font-semibold">Путешествуем по Липецкой области</h1>
                            </div>
                            <div className="flex flex-col items-center h-[392px] w-[288px] text-center">
                                <img className="mt-[16px]" src={mag6}/>
                                <p className="mt-[24px] text-[14px] text-[#007470] font-semibold">Природа</p>
                                <h1 className="text-[20px] font-semibold">День во Владикавказе: горы, трамваи и полеты</h1>
                            </div>
                            <div className="flex flex-col items-center h-[392px] w-[288px] text-center">
                                <img className="mt-[16px]" src={mag7}/>
                                <p className="mt-[24px] text-[14px] text-[#007470] font-semibold">Природа</p>
                                <h1 className="text-[20px] font-semibold">Круиз через Беломорканал</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1224px] h-[72px] flex items-start justify-center">
                        <button className="h-[48px] w-[392px] bg-[#F1E4CF] rounded-[12px] text-[16px] font-semibold">Показать все</button>
                    </div>
                </div>
                <div className="w-[1320px] h-[845px] bg-[#FFFBF3] mt-[40px] rounded-[48px] flex items-center justify-center">
                    <div className="h-[652px] w-[499px] mr-[127px]">
                        <img src={phones}/>
                    </div>
                    <div className="h-[626px] w-[413px]">
                        <h1 className="text-[32px] font-semibold">RUSSPASS<br/>Ваш личный помощник в путешествиях по России</h1>
                        <p className="text-[16px] font-semibold text-[#959595]">Сним вы сможите спланировать поездку, найти интерестные места, купить авиа- и ж/д билеты, забронировать гостиницу и столик в ресторане</p>
                        <img className="mt-[32px]" src={QR}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main;