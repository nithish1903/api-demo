"use client"

import Link from 'next/link'
import React from 'react'

const RRCard4 = () => {
  return (
    <div className='px-[15px] py-[30px] rounded-[10px] border-b-4 border-[#2370B9] bg-[#fff] '>
        <div className='pb-5 md:pl-[15px] border-b-2 border-[#334851]'>
            <h2 className='text-[36px]'>28.9K</h2>
            <p className='font-[600] text-[14px]'>Average Star Rating</p>
        </div>
        <div className='pt-[16px] px-[4px] md:px-[15px]'>
            <div>
                <Link href={""} className='text-[14px] font-[700] text-[#0266E1]'>Go To Analytics</Link>
            </div>
        </div>
    </div>
  )
}

export default RRCard4