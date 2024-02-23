import React from 'react';
import { useHeader } from '@/context/HeaderContext';
import { HiArrowLongLeft } from "react-icons/hi2";

const LayoutHeader = () => {
  const { pageTitle, goBack,reviewTitle } = useHeader();

  return (
    <div className=''>
        <h1 className='text-[42px] font-[700] '>{pageTitle}</h1>
        <p>{reviewTitle}</p>
        <button onClick={goBack} className='pry-clr text-[18px] font-[400] flex items-center'>
        <div className='mr-3.5'>
          <HiArrowLongLeft className='w-[40px] h-[40px]' />
        </div>
        Go Back</button>
    </div>
  );
};

export default LayoutHeader;
