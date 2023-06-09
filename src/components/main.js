import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
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
            var city_id = tours[randomIndex]?.city || '';
            const city_data = await getCity(db, city_id);
            var randomCity = city_data[0];
            var randomCoords = city_data[1];
            var randomTitle = tours[randomIndex]?.title || '';
            var randomPrice = tours[randomIndex]?.price || '';
            var randomDays = tours[randomIndex]?.days || '';
            var img_id = tours[randomIndex]?.image + '.jpeg'
            var img_def = '62a1e09237e5f4efd4a758d2' + '.jpeg';
            const storage = getStorage();
            const imageRef = ref(storage, `${img_def}`);
            try{
                imageRef = ref(storage, `${img_id}`);
            }
            catch(err){
                console.log(err)
            }
            const imgUrl = await getDownloadURL(imageRef);
            const tourID = tours[randomIndex]?.id;
            console.log(tours[randomIndex]?.id)
            indeces.push([randomTitle, randomCity, randomPrice, randomDays, imgUrl, randomCoords, tourID])
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
        const toursCol = collection(db, 'packages');
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

    // закрытие картоек

    return(
        <div>
            <Header />
            <Banner />
            <div className="bg-cover bg-center min-h-[2000px] bg-[#F1E4CF] flex flex-col justify-center items-center font-suisse">
                <div className=" flex bg-[#FFFBF3] w-[1320px] justify-center items-center h-[1480px] rounded-[48px]">
                    <div className="flex flex-col justify-center items-center ">
                        <div className=" h-[48px] w-[1106px] mt-[0px] flex text-[16px] font-semibold">
                            <button className="bg-[#FAEFDB] rounded-[12px] mr-[12px] items-center h-[48px] w-[115px] flex"> <img src={hotel} className="mr-[8px] ml-[16px]" /> Отели</button>
                            <button className="bg-[#FAEFDB] rounded-[12px] mr-[12px] items-center h-[48px] w-[153px] flex"><img src={restoraunt} className="mr-[8px] ml-[16px]" />Рестораны</button>
                            <button className="bg-[#FAEFDB] rounded-[12px] mr-[12px] items-center h-[48px] w-[116px] flex"><img src={museum} className="mr-[8px] ml-[16px]" />Музеи</button>
                            <button className="bg-[#FAEFDB] rounded-[12px] mr-[12px] items-center h-[48px] w-[152px] flex"><img src={excursion} className="mr-[8px] ml-[16px]" />Экскурсии</button>
                            <button className="bg-[#FAEFDB] rounded-[12px] mr-[12px] items-center h-[48px] w-[164px] flex"><img src={avia} className="mr-[8px] ml-[16px]" />Авиабилеты</button>
                            <button className="bg-[#FAEFDB] rounded-[12px] mr-[12px] items-center h-[48px] w-[160px] flex"><img src={train} className="mr-[8px] ml-[16px]" />Ж/Д билеты</button>
                            <button className="bg-[#FAEFDB]  rounded-[12px] items-center h-[48px] w-[174px] flex border-[2px] border-[#FFCF08]"><img src={directions} className="mr-[8px] ml-[16px]" />Направления</button>
                        </div>
                        <div className="flex justify-center mt-[16px]" >
                            <div className="w-[1224px] h-[72px] bg-white rounded-[20px] flex justify-center items-center">
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
                                        tourID={tour[index][6]}
                                    />
                                ))
                            ) : (
                                <div class="text-center  flex justify-center items-between h-[1152px] w-[100%]">
                                    <div role="status">
                                        <svg aria-hidden="true" class="inline w-[50px] h-[50px] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* <MainCard onShowMoney={props.onShowMoney} /> прокидываем функцию дальше */}
                    </div>
                </div>
                <div className="flex h-[653px] w-[1320px] bg-[#FFFBF3] items-center justify-center mt-[40px] rounded-[48px]">
                    <Nav />
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