"use client"

import { formatNumberKM } from '@/lib/others/formatNumberKM'
import Link from 'next/link'
import React from 'react'

const RRCard2 = ({dashboardData}) => {
  return (
    <div className='px-[15px] py-[30px] rounded-[10px] border-b-4 border-[#56C0A9] bg-[#fff] '>
        <div className='pb-5 md:pl-[15px] border-b-2 border-[#334851]'>
            <h2 className='text-[36px]'>{formatNumberKM(dashboardData.site_reviews_count)}</h2>
            <p className='font-[600] text-[14px]'>Reviews Collected</p>
        </div>
        <div className='pt-[16px] px-[4px] md:px-[15px]'>
            <div>
                <Link href={""} className='text-[14px] font-[700] text-[#0266E1]'>See Reviews</Link>
            </div>
        </div>
    </div>
  )
}

export default RRCard2