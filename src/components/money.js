import React, { useState, useRef, useEffect, Component} from "react";
import Header2 from "./header2";
import Footer2 from "./footer2";
import arrow from '../icons/arrow.png'
import more from '../icons/more.png'
import more3 from '../icons/more3.png'
import add from '../icons/add.png'
import PlanDay from "./plan/planday";
import More1 from "./more/more1";
import planmap from '../image/planmap.png'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addDay, removeDay } from './redux/tripSlice'
import { useSelector } from 'react-redux'

class YandexMap extends Component {
    map = null;
  
    componentDidMount() {
      this.initMap();
    }
  
    initMap = () => {
      const {ymaps} = window;
      ymaps.ready().then(() => {
        this.map = new ymaps.Map("map", {
          center: this.props.data, // Coordinates for Moscow, change to your desired location
          zoom: 7
        });
      });
    }
  
    render() {
      return (
        <div id="map" style={{width: '600px', height: '600px', borderRadius: '30px', overflow: 'hidden'}}/>
      );
    }
  }
  

function Plan() {
    const [showMore, setShowMore] = useState(false);
    const moreRef = useRef();
    const location = useLocation();
    const data = location.state?.data;
    const dispatch = useDispatch()
    const days = useSelector((state) => state.trip.days)
    console.log(data)

    const handleAddDay = () => {
        dispatch(addDay())
      }

    const handleRemoweDay = () => {
        dispatch(removeDay())
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (moreRef.current && !moreRef.current.contains(event.target)) {
                setShowMore(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <Header2 />
            <div className="min-h-[1364px] bg-[#FFFBF3] flex justify-center font-proto">
                <div className="flex w-[1440px]">
                    <div className="mt-[60px] mr-[24px]">
                        <div className="h-[104px] ml-[30px] w-[678px] ">
                            <div className="flex items-center justify-between h-[48px]">
                                <button><img src={arrow} /></button>
                                <h1 className="right-[115px] relative text-[32px] font-semibold">Нижний Новгород</h1>
                                <div className="relative">
                                    <button className="mt-[11px]" onClick={() => setShowMore(!showMore)}><img src={more} /></button>
                                    {showMore && <div ref={moreRef}><More1 handleAddDay={handleAddDay} /></div>}
                                </div>
                            </div>
                                <div className="h-[56px] flex items-end text-[16px] font-semibold ml-[78px]">
                                    <button className="mr-[24px] underline decoration-[#FFCF08] decoration-[2px]">План</button>
                                    <button className="mr-[24px] text-[#959595]">Маршрут</button>
                                    <button className="mr-[24px] text-[#959595]">Билеты и брони</button>
                                </div>
                            </div>
                            <div className="min-h-[730px] w-[600px] ml-[108px]">
                                {days.map((day, index) => (
                                    <PlanDay key={index} day={day} handleAddDay={handleAddDay} handleRemoweDay={handleRemoweDay} />
                                ))}
                            </div>
                            <div className="h-[371px] w-[608px] mt-[39px] ml-[120px]">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-[24px] font-semibold ">Сб, 26.07</h1>
                                    </div>
                                    <div className="flex">
                                        <button><img src={add} /></button>
                                        <button className="ml-[14px]"><img src={more3} /></button>
                                    </div>
                                </div>
                                <div className="flex justify-center min-h-[88px]">
                                    <button className="text-[16px] font-semibold">
                                        <span className="text-[#959595]">Добавьте места из</span>&nbsp;<span className="text-teal-600">Избранного</span>
                                    </button>
                                </div>
                                <div className=" w-[600px] bg-[#FAEFDB] border-[2px] border-[#FAEFDB]"></div>
                                <div className="flex w-[608px] justify-center items-center min-h-[112px] text-[16px] font-semibold">
                                    <button className="flex "><img className="mr-[12px]" src={add} />Добавить день</button>
                                </div>
                                <div className=" w-[600px] bg-[#FAEFDB] border-[2px] border-[#FAEFDB]"></div>
                                <div className="font-semibold min-h-[109px]">
                                    <h1 className="mt-[32px] text-[24px]">Избранное</h1>
                                    <div className="w-[608px] flex justify-center items-end">
                                        <button className="flex "><img className="mr-[12px]" src={add} />Добавить день</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[600px] w-[600px] mt-[44px]">
                            <YandexMap data={data}/>
                        </div>
                    </div>
                </div>
                <Footer2 />
            </div>
    )
}

export default Plan;
export { YandexMap };