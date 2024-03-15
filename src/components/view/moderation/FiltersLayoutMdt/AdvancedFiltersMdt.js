import React from 'react'
import DateRangeAFMdt from './AdvancedFiltersMdt/DateRangeAFMdt'
import { useReviewsFilter } from '@/context/ReviewsFilterContext'

const AdvancedFiltersMdt = () => {
  const { reviewFilter,handleContent_type,handleStatus }  = useReviewsFilter()

  const productTypes = [
    {
      name:"product_reviews",
      para:"Products"
    },
    {
      name:"site_reviews",
      para:"Site"
    },
    {
      name:"product_question_answers",
      para:"Q&A"
    },
  ]

  const statusTypes = [
    {
      name:"Pending",
      value:"pending",
    },
    {
      name:"Published",
      value:"approved",
    },
    {
      name:"Rejected",
      value:"rejected",
    },
    // {
    //   name:"Escalated",
    //   value:"trash",
    // },
  ]

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
            {
              productTypes.map((prdTpy,p)=>{
                return  <div key={p} onClick={()=>{handleContent_type(prdTpy.name)}} className={`col-span-6 xl:col-span-4 cursor-pointer ${prdTpy.name===reviewFilter.content_type?"bg-[#0266E1] border-[#0266E1]":"bg-[#fff] border-[#CFD5E1]"}  py-2.5 px-1.5 text-center rounded-[6px] border-2 `}>
                <p className={`text-[14px] font-[500] ${prdTpy.name===reviewFilter.content_type?"text-[#fff]":"text-[#334851]"}`}>{prdTpy.para}</p>
              </div>
              })
            }
          </div>
        </div>
        <div className='col-span-12'>
          <div className=''>
            <p className='font-[600] text-[16px]'>Status</p>
          </div>
          <div className='grid grid-cols-12 gap-2'>
            {
              statusTypes.map((statusType,s)=>{
                return <div onClick={()=>{handleStatus(statusType.value)}} key={s} className={`col-span-6 xl:col-span-3 cursor-pointer ${statusType.value===reviewFilter.status?"bg-[#0266E1] border-[#0266E1]":"border-[#CFD5E1] bg-[#fff]"} py-2.5 px-1.5 text-center rounded-[6px] border-2`}>
                <p className={`${statusType.value===reviewFilter.status?"text-[#fff]":"text-[#334851]"} text-[14px] font-[500]`}>{statusType.name}</p>
              </div>
              })
            }
          </div>
        </div>
    </div>
  )
}

export default AdvancedFiltersMdt