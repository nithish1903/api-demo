import { userPageHeader } from '@/context/PageHeaderContext';
import React from 'react';
import { HiArrowLongLeft } from "react-icons/hi2";
import ProfilePicMenu from './ProfilePicMenu';

const PageHeaderLayout = () => {
  const { pageTitle, goBack,reviewTitle } = userPageHeader();
 

  return (
    <div className='flex justify-between'>
        <div>
          <h1 className='text-[26px] md:text-[32px] lg:text-[42px] font-[700] '>{pageTitle}</h1>
          <p>{reviewTitle}</p>
          <button onClick={goBack} className='pry-clr text-[16px] md:text-[18px] font-[400] flex items-center'>
            <div className='mr-3.5'>
              <HiArrowLongLeft className='w-[40px] h-[40px]' />
            </div>
            Go Back
          </button>
        </div>
        <div className='pr-8'>
            <ProfilePicMenu />
        </div>
    </div>
  );
};

export default PageHeaderLayout;
