import React from "react";

function Register ({handleRegisteredClick, handleUnregisteredClick, handleCloseModal}) {
    return (
        <div className="h-[100px] w-[450px] rounded-[20px] bg-[#FFFBF3] border-[2px] border-[#FAEFDB] absolute flex  font-roboto font-semibold left-[740px] top-[300px]" style={{
            boxShadow: "0 0 200px rgba(0, 0, 0, 0.8)",
          }}>
            <button onClick={handleRegisteredClick}>Я зарегистрированный пользователь</button>
            <div className=" h-[96px] bg-[#FAEFDB] border-[2px] border-[#FAEFDB]"></div>
            <button onClick={handleUnregisteredClick}>Я не зарегистрированный пользователь</button>
        </div>
    )
}

export default Register;