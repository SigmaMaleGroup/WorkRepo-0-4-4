import React, { useState, useEffect } from "react";
import Header from './header';
import Footer from "./footer";
import FavoriteCadrd from "./cards/favoritecard";
import fvimg1 from '../image/fvimg1.png'
import fvimg2 from '../image/fvimg2.png'
import fvimg3 from '../image/fvimg3.png'
import fvimg4 from '../image/fvimg4.png'
import fvimg5 from '../image/fvimg5.png'
import fvimg6 from '../image/fvimg6.png'
import { useSelector } from "react-redux";
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { initializeApp } from "firebase/app";

function Favorite (props) {
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    }

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
    const db = getFirestore(app);


    const favoriteTripIds = useSelector(state => state.favorites.tripIds);

    const [favoriteTrips, setFavoriteTrips] = useState([]);

    useEffect(() => {
        console.log('useEffect was called'); 
    // Здесь нужно написать функцию, которая запрашивает данные для каждого из избранных туров.
    // Важно, что эта функция должна быть асинхронной, чтобы мы могли дождаться результатов всех запросов.
    const fetchFavoriteTrips = async () => {
        const trips = await Promise.all((favoriteTripIds || []).map(async id => {
        const db = getFirestore(app);
        const tour = await getTourById(db, id);
        console.log("Tour: ", tour);
        const city_data = await getCity(db, tour.dictionary_data.city);
        console.log("City Data: ", city_data);
        var randomCity = city_data[0];
        var randomCoords = city_data[1];
        var randomTitle = tour.dictionary_data.title || '';
        var randomPrice = tour.dictionary_data.price || '';
        var randomDays = tour.dictionary_data.days || '';
        var img_id = tour.dictionary_data.image_detailed_page_main?.source?.id || '62a1e09237e5f4efd4a758d2' + '.jpeg';
        const storage = getStorage();
        const imageRef = ref(storage, `${img_id}`);
        const imgUrl = await getDownloadURL(imageRef);
        return {title: randomTitle, city: randomCity, price: randomPrice, days: randomDays, imgUrl: imgUrl, coords: randomCoords};
        }));
        setFavoriteTrips(trips);
        console.log(favoriteTrips);
        console.log("Favorite Trip Ids: ", favoriteTripIds); 
    };

    async function getTourById(db, id) {
        const toursRef = collection(db, "tours");
        const q = query(toursRef, where("_id.$oid", "==", id));
        const querySnapshot = await getDocs(q);
      
        let tour = null;
      
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          tour = doc.data();
        }
      
        return tour;
      }

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
    fetchFavoriteTrips();
    }, [favoriteTripIds]);


    return (
        <div>
        <Header />
        <div className="min-h-[1252px] bg-[#F1E4CF] flex justify-center items-center">
            <div className="min-h-[1252px] w-[1224px]">
                <div className="w-[301px] h-[102px]"> 
                    <div className="font-proto">
                        <h1 className="text-[32px] font-semibold">Избранное</h1>
                    </div>
                    <div className="flex mt-[24px] w-[301px] h-[44px] justify-between items-center text-[16px] font-semibold">
                        <div>
                            <button style={{color: activeButton === 1 ? "black" : "#1d1d1d80"}} onClick={() => handleButtonClick(1)}>Места</button>
                            <div style={{display: activeButton === 1 ? "block" : "none"}} className="h-[2px] w-[51px] bg-[#FFCF08]"></div>
                        </div>
                        <div>
                            <button style={{color: activeButton === 2 ? "black" : "#1d1d1d80"}} onClick={() => handleButtonClick(2)}>Поездки</button>
                            <div style={{display: activeButton === 2 ? "block" : "none"}} className="h-[2px] w-[68px] bg-[#FFCF08]"></div>
                        </div>
                        <div>
                            <button style={{color: activeButton === 3 ? "black" : "#1d1d1d80"}} onClick={() => handleButtonClick(3)}>Рекомендации</button>
                            <div style={{display: activeButton === 3 ? "block" : "none"}} className="h-[2px] w-[120px] bg-[#FFCF08]"></div>
                        </div>
                    </div>
                </div>
                {activeButton === 1 && (
                    <div className="mt-[40px] w-[1224px] h-[974px] flex flex-wrap justify-between items-between">
                        <FavoriteCadrd header="Все места" paragraf="100 мест" fvbutton="Посмотреть все" fvimgmane={fvimg1}/>
                        <FavoriteCadrd header="Оренбург" paragraf="2 дня, 3 места" fvbutton="Спанировать поездку" fvimgmane={fvimg2}/>
                        <FavoriteCadrd header="Алтай" paragraf="2 дня, 3 места" fvbutton="Спанировать поездку" fvimgmane={fvimg3}/>
                        <FavoriteCadrd header="Казань" paragraf="2 дня, 3 места" fvbutton="Спанировать поездку" fvimgmane={fvimg4}/>
                        <FavoriteCadrd header="Тюмень" paragraf="2 дня, 3 места" fvbutton="Спанировать поездку" fvimgmane={fvimg5}/>
                        <FavoriteCadrd header="Воронеж" paragraf="2 дня, 3 места" fvbutton="Спанировать поездку" fvimgmane={fvimg6}/>
                    </div>
                )}
                {activeButton === 2 && (
                    <div className="mt-[40px] w-[1224px] h-[974px] flex flex-wrap justify-between items-between">
                        {favoriteTrips.map(trip => 
                        <FavoriteCadrd 
                            key={trip.id}
                            header={trip.title} 
                            paragraf={trip.city} 
                            fvbutton="Отрыть план" 
                            fvimgmane={trip.imgUrl}
                        />
                        )}
                    </div>
                )}

                {activeButton === 3 && (
                    <div className="mt-[40px] w-[1224px] h-[974px] flex flex-wrap justify-between items-between">
                        <FavoriteCadrd header="ббВсе места" paragraf="100 мест" fvbutton="Посмотреть" fvimgmane={fvimg1}/>
                        <FavoriteCadrd header="ббОренбург" paragraf="2 дня, 3 места" fvbutton="Посмотреть" fvimgmane={fvimg2}/>
                        <FavoriteCadrd header="Алтай" paragraf="2 дня, 3 места" fvbutton="Посмотреть" fvimgmane={fvimg3}/>
                        <FavoriteCadrd header="Казань" paragraf="2 дня, 3 места" fvbutton="Посмотреть" fvimgmane={fvimg4}/>
                        <FavoriteCadrd header="Тюмень" paragraf="2 дня, 3 места" fvbutton="Посмотреть" fvimgmane={fvimg5}/>
                        <FavoriteCadrd header="Воронеж" paragraf="2 дня, 3 места" fvbutton="Посмотреть" fvimgmane={fvimg6}/>
                    </div>
                )}
                <div className="h-[88px] w-[1224px] flex justify-center">
                    <button className="mt-[40px] h-[48px] w-[392px] bg-[#f5dfb880] rounded-[12px] border-[2px] border-[#f5dfb8] font-semibold">Показать еще</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Favorite;