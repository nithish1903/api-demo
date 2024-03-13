"use client"

import { formatNumberKM } from '@/lib/others/formatNumberKM'
import React  from 'react'

// import SwitchGreen from '@/components/common/SwitchGreen'

const RRCard1 = ({dashboardData}) => {
    // const [openSwith,setOpenSwitch] = useState(false)
  return (
    <div className='px-[15px] py-[30px] rounded-[10px] border-b-4 border-[#8270E7] bg-[#fff] '>
        <div className='pb-5 md:pl-[15px] border-b-2 border-[#334851]'>
            <h2 className='text-[36px]'>{formatNumberKM(dashboardData.product_reviews_count)}</h2>
            <p className='font-[600] text-[14px]'>Review Request Sent</p>
        </div>
        <div className='pt-[16px] px-[4px] md:px-[15px] flex justify-between'>
            <div>
                <p className='text-[14px]'>Review Request</p>
            </div>
            {/* <div className='flex items-center '>
                <div className='mr-2.5'>
                    <SwitchGreen value={openSwith} onChange={()=>{setOpenSwitch(!openSwith)}} />
                </div>
                <p className='text-[14px]'>ON</p>
            </div> */}
        </div>
    </div>
  )
}

export default RRCard1