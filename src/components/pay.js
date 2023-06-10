import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal'; // Библиотека для модальных окон, замените на вашу

const Pay = (props) => {

  return (
    <div className='absolute h-[158px] bottom-[-900px] left-[600px] w-[800px] rounded-[50px] bg-white border-[2px] border-[#FAEFDB] font-roboto font-semibold '>
        <div className='ml-[48px]'>
          <div className=' mt-[18px] mb-[20px] '>
            <h1 className='text-[32px]  '>Оплата</h1>
          </div>
          <div className=' flex flex items-center w-[711px]'>
            <div className='flex justify-between items-center'>
              <h1>Итого к оплате: &nbsp;</h1>
              <h1>{props.price}</h1>
            </div>
            <div className='ml-[100px]'>
              <button className='h-[50px] w-[224px] bg-[#FFCF08] rounded-[20px] text-[22px]   '>Оплатить</button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Pay;
