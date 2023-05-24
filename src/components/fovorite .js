import React from "react";
import Header from './header';
import Footer from "./footer";

function Favorite () {
    return (
        <div>
            <Header />
            <div className="h-[1252px] bg-[#F1E4CF] flex justify-center items-center">
                <div className="h-[1252px] w-[1224px] bg-white">
                    <div className="w-[301px] h-[102px] bg-black"> 
                        <div>
                            <h1>Избранное</h1>
                        </div>
                        <div className="bg-balck">
                            
                        </div>
                    </div>
                    <div className="w-[1224px] [h-974px] bg-balck">

                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Favorite;