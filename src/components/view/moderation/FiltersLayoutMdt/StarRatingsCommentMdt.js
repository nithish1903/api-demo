import React from 'react'

import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";

import { Checkbox } from '@mui/material';
import Label from '@/components/common/Label';


const StarRatingsCommentMdt = () => {
  return (
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-12'>
                <h6 className='font-[700]'>Star Ratings</h6>
            </div>
            <div className='col-span-12'>
                <div className='flex items-start justify-between mb-1'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <Checkbox sx={{padding:"0px"}}/>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                        </div>
                    </div>
                    <div className='inline-block bg-[#0266E1] px-1.5 py-1 rounded-[20px]'>
                        <p className='text-[12px] font-[700] text-[#fff]'>1309</p>
                    </div>
                </div>
                <div className='flex items-start justify-between mb-1'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <Checkbox sx={{padding:"0px"}}/>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                        </div>
                    </div>
                    <div className='inline-block bg-[#0266E1] px-1.5 py-1 rounded-[20px]'>
                        <p className='text-[12px] font-[700] text-[#fff]'>149</p>
                    </div>
                </div>
                <div className='flex items-start justify-between mb-1'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <Checkbox sx={{padding:"0px"}}/>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                        </div>
                    </div>
                    <div className='inline-block bg-[#0266E1] px-1.5 py-1 rounded-[20px]'>
                        <p className='text-[12px] font-[700] text-[#fff]'>59</p>
                    </div>
                </div>
                <div className='flex items-start justify-between mb-1'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <Checkbox sx={{padding:"0px"}}/>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                        </div>
                    </div>
                    <div className='inline-block bg-[#0266E1] px-1.5 py-1 rounded-[20px]'>
                        <p className='text-[12px] font-[700] text-[#fff]'>39</p>
                    </div>
                </div>
                <div className='flex items-start justify-between mb-1'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <Checkbox sx={{padding:"0px"}}/>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                            <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                        </div>
                    </div>
                    <div className='inline-block bg-[#0266E1] px-1.5 py-1 rounded-[20px]'>
                        <p className='text-[12px] font-[700] text-[#fff]'>13</p>
                    </div>
                </div>

            </div>
            <div className='col-span-12'>
                <h6 className='text-[16px] font-[700]'>Media</h6>
            </div>
            <div className='col-span-6'>
                <div className='flex items-center gap-2'>
                    <Checkbox id='Photos' sx={{padding:"0px"}} />
                    <Label label={"Photos"} htmlFor={"#Photos"}  />
                </div>
            </div>
            <div className='col-span-6'>
                <div className='flex items-center gap-2'>
                    <Checkbox id='Videos' sx={{padding:"0px"}}/>
                    <Label label={"Videos"} htmlFor={"#Videos"}  />
                </div>
            </div>
            <div className='col-span-12'>
                <h6 className='text-[16px] font-[700]'>Comments</h6>
            </div>
            <div className='col-span-6'>
                <div className='flex items-center gap-2'>
                    <Checkbox id='WithResponse' sx={{padding:"0px"}}/>
                    <Label label={"With Response"} htmlFor={"#WithResponse"}  />
                </div>
            </div>
            <div className='col-span-6'>
                <div className='flex items-center gap-2'>
                    <Checkbox id='WithoutResponse' sx={{padding:"0px"}}/>
                    <Label label={"Without Response"} htmlFor={"#WithoutResponse"}  />
                </div>
            </div>
        </div>
  )
}

export default StarRatingsCommentMdt