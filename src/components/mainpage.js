import React, {useState, useEffect} from "react";
import Header from "./header";
import Footer from "./footer";
import Datepicker from "react-tailwindcss-datepicker";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import users from '../icons/users.png'
import mapimg from '../image/mapimg.png'
import MainCard from "./cards/maincards";
import { useLocation } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import { initializeApp } from "firebase/app";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function MainPage () {
    const location = useLocation();
    const i1 = location.state?.selectedButton1;
    const i2 = location.state?.selectedButton2;
    const i3 = location.state?.selectedButton3;
    const r = location.state?.region_index;
    const firebaseConfig = {
        apiKey: "AIzaSyCPvQYAYMgiBeARPSWh3R59Zpxcm_X7bqk",
        authDomain: "russpassds.firebaseapp.com",
        databaseURL: "https://russpassds-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "russpassds",
        storageBucket: "russpassds.appspot.com",
        messagingSenderId: "978797123770",
        appId: "1:978797123770:web:6d8d8a0caf4f598f718a83",
        measurementId: "G-WQ192CXM64"
      };
    
    const app = initializeApp(firebaseConfig);
    
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

    const [tour, setTour] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          const db = getFirestore(app);
          const tours = await getTours(db, r, i1, i2, i3);
          var indeces = []
          for (var i = 0; i < tours.length; i++){
            var city_id = tours[i]?.city || '';
            const city_data = await getCity(db, city_id);
            var City = city_data[0];
            var Coords = city_data[1];
            var Title = tours[i]?.title || '';
            var Route = tours[i]?.route || [];
            var Price = tours[i]?.price || '';
            var Days = tours[i]?.days || '';
            var img_id = tours[i]?.image + '.jpeg'
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
            const tourID = tours[i]?.id;

            indeces.push([Title, City, Price, Days, imgUrl, Coords, tourID, Route])
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

      async function getTours(db, r, i1, i2, i3) {
        console.log(r, i1, i2, i3);
        const toursCol = collection(db, 'packages');
        const q = query(
            toursCol,
            where('region', '==', r),
            where('style', '==', i1),
            where('place', '==', i2),
            where('food', '==', i3)
        );
        const tourSnapshot = await getDocs(q);
        const tourList = tourSnapshot.docs.map(doc => doc.data());
        console.log(tourList)
        return tourList;
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
                        <div className="flex flex-wrap items-start justify-between w-[805px] h-[2380px]">
                        {tour.length > 0 ? (
                                Array.from({ length: tour.length }, (_, index) => (
                                    <MainCard 
                                        maincardtitle={tour[index][0]} 
                                        maincardsity={tour[index][1]} 
                                        maincardprice={tour[index][2]} 
                                        maincardday={tour[index][3]}
                                        maincardimg={tour[index][4]}
                                        maincardcoord={tour[index][5]}
                                        maincardid={tour[index][6]}
                                        maincardroute={tour[index][7]}
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
                        <button className=" mt-[25px] text-[17px] font-semibold h-[50px] w-[400px] bg-[#FFCF08] rounded-[12.5px]">Посмотреть еще</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainPage;