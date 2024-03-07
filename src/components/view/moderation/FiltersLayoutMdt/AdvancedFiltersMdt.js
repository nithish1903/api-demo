import React from 'react'
import DateRangeAFMdt from './AdvancedFiltersMdt/DateRangeAFMdt'

const AdvancedFiltersMdt = () => {
  return (
    <div className='grid grid-cols-12 gap-3'>
        <div className='col-span-12'>
          <h6 className='font-[700]'>Advanced Filter</h6>
        </div>
        <div className='col-span-12'>
          <DateRangeAFMdt />
        </div>
        <div className='col-span-12'>
          <div className=''>
            <p className='font-[600] text-[16px]'>Content Type</p>
          </div>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-6 xl:col-span-4 bg-[#0266E1] py-2.5 px-1.5 text-center rounded-[6px] border-2 border-[#0266E1]'>
              <p className='text-[#fff] text-[14px] font-[500]'>Products</p>
            </div>
            <div className='col-span-6 xl:col-span-4 bg-[#fff] py-2.5 px-1.5 text-center rounded-[6px] border-2 border-[#CFD5E1]'>
              <p className='text-[#334851] text-[14px] font-[500]'>Site</p>
            </div>
            <div className='col-span-6 xl:col-span-4 bg-[#fff] py-2.5 px-1.5 text-center rounded-[6px] border-2 border-[#CFD5E1]'>
              <p className='text-[#334851] text-[14px] font-[500]'>Q&A</p>
            </div>
          </div>
          
        </div>
        <div className='col-span-12'>
          <div className=''>
            <p className='font-[600] text-[16px]'>Status</p>
          </div>
          <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-6 xl:col-span-3 bg-[#0266E1] py-2.5 px-1.5 text-center rounded-[6px] border-2 border-[#0266E1]'>
              <p className='text-[#fff] text-[14px] font-[500]'>Pending</p>
            </div>
            <div className='col-span-6 xl:col-span-3 bg-[#fff] py-2.5 px-1.5 text-center rounded-[6px] border-2 border-[#CFD5E1]'>
              <p className='text-[#334851] text-[14px] font-[500]'>Published</p>
            </div>
            <div className='col-span-6 xl:col-span-3 bg-[#fff] py-2.5 px-1.5 text-center rounded-[6px] border-2 border-[#CFD5E1]'>
              <p className='text-[#334851] text-[14px] font-[500]'>Rejected</p>
            </div>
            <div className='col-span-6 xl:col-span-3 bg-[#fff] py-2.5 px-1.5 text-center rounded-[6px] border-2 border-[#CFD5E1]'>
              <p className='text-[#334851] text-[14px] font-[500]'>Escalated</p>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default AdvancedFiltersMdt