"use client"
// import SwitchGreen from '@/components/common/SwitchGreen'
import { formatNumberKM } from '@/lib/others/formatNumberKM'
import React from 'react'

const RRCard3 = ({dashboardData}) => {
    // const [openSwith,setOpenSwitch] = useState(false)
  return (
    <div className='px-[15px] py-[30px] rounded-[10px] border-b-4 border-[#ED7851] bg-[#fff] '>
        <div className='pb-5 md:pl-[15px] border-b-2 border-[#334851]'>
            <h2 className='text-[36px]'>{formatNumberKM(dashboardData.product_qa_count)}</h2>
            <p className='font-[600] text-[14px]'>Reviews Published</p>
        </div>
        <div className='pt-[16px] px-[4px] md:px-[15px] flex justify-between'>
            <div>
                <p className='text-[14px]'>Review Widget</p>
            </div>
            {/* <div className='flex items-center '>
                <div className='mr-2.5'>
                    <SwitchGreen value={openSwith} onChange={()=>{setOpenSwitch(!openSwith)}}/>
                </div>
                <p className='text-[14px]'>Active</p>
            </div> */}
        </div>
    </div>
  )
}

export default RRCard3