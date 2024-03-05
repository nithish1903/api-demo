import Image from 'next/image'
import React from 'react'

const PaymentmethodsBilling = () => {
  return (
    <>
        <h6 className='text-[20px] font-[700] my-5'>Payment methods</h6>
        <div className='grid grid-cols-12 gap-5 lg:gap-10 items-stretch'>
            <div className='col-span-12 md:col-span-6 xl:col-span-5'>
                <div className='flex items-start'>
                    <div className='mr-2 md:mr-8'>
                        <Image src={"/assets/images/billing/card.svg"} width={0} height={0} alt='payment card' className='min-w-[205px] sm:min-w-[245px] h-auto'/>
                    </div>
                    <p className='px-4 text-[#0266E1] text-[16px]'>Edit</p>
                </div>
            </div>
            <div className='col-span-12 md:col-span-6  xl:col-span-7'>
               <div className='px-5 py-5 border-2 border-[#CFD5E1] rounded-[6px] grid grid-cols-12'>
                    <div className='col-span-12 flex items-start justify-between'>
                        <h6 className='text-[18px]'>Billing Address</h6>
                        <p className='px-4 text-[#0266E1] text-[16px]'>Edit</p>
                    </div>
                    <div className='col-span-12 lg:col-span-6  flex items-start mt-7'>
                        <p className='text-[14px]'>
                            1st Floor, Axis Pedegal, 555, 9th Cross Rd, near Sony Center, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078
                        </p>
                    </div>
                    
               </div>
            </div>
        </div>
    </>
  )
}

export default PaymentmethodsBilling