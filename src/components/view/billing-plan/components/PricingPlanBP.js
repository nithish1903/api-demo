"use client"
import React from 'react'
import Radio from '@mui/material/Radio';
import { SaveChangesES } from '@/components/common/ButtonEmailSettings';
import Image from 'next/image';

const PricingPlanBP = () => {
    const [selectedValue, setSelectedValue] = React.useState('Plan1');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className='px-4 py-4 border-[#CFD5E1] border-2 rounded-[10px]'>
        <div>
            <h6 className='font-bold'>Pricing Plan</h6>
        </div>
        <div className='mt-10 mb-8'>
            <p className='text-[16px] font-[500]'>Selected Plan</p>
            <h6 className='text-[16px] font-[700]'>Plan 1, 500 monthly orders</h6>
        </div>
        <div className='p-4 border-[#CFD5E1] border-2 rounded-[6px] flex items-start gap-3 mb-7'>
            <div>
                <Radio
                    checked={selectedValue === 'Plan1'}
                    onChange={handleChange}
                    value="Plan1"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                    sx={{padding:"0px"}}
                />
            </div>
            <div className='w-full'>
                <div className='flex gap-4 items-center justify-between'>
                    <p className='text-[12px] font-[500]'>Billed Yearly</p>
                    <p className='text-[12px] font-[700] text-[#1BC067]'>Save 30%</p>
                </div>
                <div>
                    <h6 className='font-[700]'>₹6,999.00/<span className='font-[400]'>Month</span></h6>
                </div>
            </div>
        </div>
        <div className='p-4 border-[#CFD5E1] border-2 rounded-[6px] flex items-start gap-3 mb-7'>
            <div>
                <Radio
                    checked={selectedValue === 'Plan2'}
                    onChange={handleChange}
                    value="Plan2"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                    sx={{padding:"0px"}}
                />
            </div>
            <div className='w-full'>
                <div className='flex gap-4 items-center justify-between'>
                    <p className='text-[12px] font-[500]'>Billed Quarterly</p>
                    <p className='text-[12px] font-[700] text-[#1BC067]'>Save 20%</p>
                </div>
                <div>
                    <h6 className='font-[700]'>₹7,999.00/<span className='font-[400]'>Month</span></h6>
                </div>
            </div>
        </div>
        <div className='p-4 border-[#CFD5E1] border-2 rounded-[6px] flex items-start gap-3 mb-7'>
            <div>
                <Radio
                    checked={selectedValue === 'Plan3'}
                    onChange={handleChange}
                    value="Plan3"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                    sx={{padding:"0px"}}
                />
            </div>
            <div className='w-full'>
                <div className=''>
                    <p className='text-[12px] font-[500]'>Billed Monthly</p>
                </div>
                <div>
                    <h6 className='font-[700]'>₹9,999.00/<span className='font-[400]'>Month</span></h6>
                </div>
            </div>
        </div>
        <div className='mb-28'>
            <p className='text-[16px] font-bold text-[#0266E1]'>Have a discount code?</p>
        </div>
        <div>
            <SaveChangesES text={"Checkout"} className={"w-full"}/>
        </div>
        <div className='my-4'>
            <p className='text-[12px]'>Need additional information?<span className='text-[#0266E1] font-[700]'> Have a discount code?</span></p>
        </div>
        <div className='flex items-center justify-between'>
            <div>
                <Image src={"/assets/images/billing/l-1.svg"} alt='lable' width={0} height={0} className='w-[72px] h-auto' />
            </div>
            <div>
                <Image src={"/assets/images/billing/l-2.svg"} alt='lable' width={0} height={0} className='w-[78px] h-auto' />
            </div>
            <div>
                <Image src={"/assets/images/billing/l-3.svg"} alt='lable' width={0} height={0} className='w-[28px] h-auto' />
            </div>
            <div>
                <Image src={"/assets/images/billing/l-4.svg"} alt='lable' width={0} height={0} className='w-[60px] h-auto' />
            </div>
        </div>
    </div>
  )
}

export default PricingPlanBP