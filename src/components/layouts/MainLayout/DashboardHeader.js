import Image from 'next/image'
import React from 'react'

import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";



const DashboardHeader = () => {
  return (
    <div className='grid grid-cols-12 gap-5 md:gap-0'>
        <div className='col-span-12 md:col-span-6'>
            <div className='w-[240px] lg:w-[450px] relative'>
                <input type='text' className='px-5 lg:px-10 py-5 w-full rounded-full' placeholder='Search'/>
                <div className=' absolute top-[50%] translate-y-[-50%] right-[40px]'>
                    <Image src='/assets/images/header/search.svg' width={19} height={19} className='' />
                </div>
            </div>
        </div>
        <div className='col-span-12 md:col-span-6 flex justify-end pr-8'>
            <div className='flex items-center gap-3 md:gap-4 lg:gap-10'>
                <div className='w-[42px] h-[42px] md:w-[50px] md:h-[50px] rounded-full bg-[#0266E1] flex items-center justify-center'>
                    <MdOutlineNotificationsActive className='w-[16px] md:w-[24px] h-[16px] md:h-[24px] text-[#fff]'/>
                </div>
                <div className='w-[42px] md:w-[50px] h-[42px] md:h-[50px] rounded-full'>
                    <Image src='/assets/images/header/AnilPic.svg' width={50} height={50} className='' />
                </div>
                <div className='block md:hidden'>
                    <IoIosArrowDown className='text-[#334851] w-[20px] h-auto' />
                </div>
                <div className='hidden md:block'>
                    <div className='flex items-center'>
                        <p className='text-[14px] font-[700] mr-5'>Anil Jadhav</p>
                        <div>
                            <IoIosArrowDown className='text-[#334851] w-[20px] h-auto' />
                        </div>
                    </div>
                    <p className='text-[12px] font-[300]'>Owner</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardHeader