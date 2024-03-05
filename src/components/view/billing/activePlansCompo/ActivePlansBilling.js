import Image from 'next/image'
import React from 'react'
import { HiOutlineBookOpen } from "react-icons/hi";
import { BsCreditCardFill } from "react-icons/bs";
import SwitchGreen from '@/components/common/SwitchGreen';
import { HiDotsHorizontal } from "react-icons/hi";
import "./table.css"

const ActivePlansBilling = () => {
    const thead = ["Plan","Subscription","Current Usage Fee","Paid By","Due On","Total","Action"]

  return (
    <div className=''>
        <div className='mb-7'>
            <h6 className='font-[700]'>Active plans</h6>
        </div>
        <div className=''>
            <table className='w-full'>
                <thead className='py-2.5'>
                    {
                        thead.map((heading,h)=>{
                            return <th key={h} scope="col" className='text-left'>{heading}</th>
                        })
                    }
                </thead>
                <tbody>
                    <tr className=' box-border  border-2 border-[#CFD5E1] rounded-[6px]'>
                        <td data-label="Plan" className='py-4 pl-4 '>
                            <div className='flex items-center gap-4'>
                                <div className='w-[50px] h-[50px] flex justify-center items-center bg-[#F3F6F9] rounded-[6px]'>
                                    <HiOutlineBookOpen className='w-[20px] h-[20px] text-[#0266E1]' /> 
                                </div>
                                <div>
                                    <h6 className='text-[16px] font-[700]'>Reviews</h6>
                                    <p className='text-[14px]'>Growth 500</p>
                                </div>
                            </div>
                        </td>
                        <td data-label="Subscription" className='py-4'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <BsCreditCardFill className='text-[#D9D9D9] w-[12px] h-auto' />
                                </div>
                                <p className='text-[16px]'>₹199/Monthly</p>
                            </div>
                        </td>
                        <td data-label="Current Usage Fee" className='py-4'>
                            <div className='flex gap-4'>
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <BsCreditCardFill className='text-[#D9D9D9] w-[12px] h-auto' />
                                        </div>
                                        <p className='text-[16px] font-bold m-0'>₹0.00</p>
                                    </div>
                                    <p className='text-[14px]'>Review Booster</p>
                                </div>
                                <div>
                                    <SwitchGreen  />
                                    <p className='text-[14px]'>OFF</p>
                                </div>
                            </div>
                        </td>
                        <td data-label="Paid By" className='py-4'>
                            <p className='text-[16px]'>Credit Card</p>
                        </td>
                        <td data-label="Due On" className='py-4'>
                            <p className='text-[16px]'>Feb 29, 2024</p>
                        </td>
                        <td data-label="Total" className='py-4'>
                            <p className='text-[16px] font-bold'>₹2388.00</p>
                        </td>
                        <td data-label="Action" className='py-4 pr-4'>
                            <HiDotsHorizontal className='text-[#334851] w-[20px] h-auto'/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ActivePlansBilling