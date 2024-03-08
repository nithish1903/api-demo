"use client"
import Label from '@/components/common/Label';
import { SelectReact } from '@/components/common/ReactSelect';
import { Checkbox } from '@mui/material';
import React, { useState } from 'react'
import { IoIosRefresh } from "react-icons/io";
import ReviewsCommentsMdt from './ReviewsLayoutMdt/ReviewsCommentsMdt';

const options = [
  { value: 'Date (newest first)', label: 'Date (newest first)' },
  { value: 'With Images/Videos', label: 'With Images/Videos' },
  { value: 'Star Rating (Highest first)', label: 'Star Rating (Highest first)' },
  { value: 'Star Rating (Highest first)', label: 'Star Rating (Highest first)' },
  { value: 'Star Rating (Lowest first)', label: 'Star Rating (Lowest first)' },
]

const optionsExportCSV = [
  { value: 'Filtered Reviews', label: 'Filtered Reviews' },
  { value: 'All Reviews', label: 'All Reviews' },
]

const ReviewsLayoutMdt = () => {
    const [review,setreview] = useState(null)
    const [exportCSV,setExportCSV] = useState(null)

  return (
    <div>
        <div>
          <h5>Reviews (3162)</h5>
        </div>
        <div className='grid grid-cols-12 gap-4 my-6'>
          <div className='col-span-12 lg:col-span-4 flex items-center gap-3'>
            <div className='flex items-center gap-2'>
                <Checkbox id='SelectAll' sx={{padding:"0px"}}/>
                <Label className={"text-[16px]"} label={"Select All"} htmlFor={"#SelectAll"}  />
            </div>
            <div className=''>
                <button className=' p-1.5 rounded-[8px] flex items-center gap-2 border-2 border-[#CFD5E1]'>
                  <span><IoIosRefresh /></span>
                  <span>Refresh</span>
                </button>
            </div>
          </div>
          <div className='col-span-12 lg:col-span-8 grid grid-cols-12 gap-3'>
            <div className=' hidden xl:block xl:col-span-2'></div>
            <div className='col-span-12 md:col-span-8 xl:col-span-6 flex flex-col md:flex-row md:items-center gap-2'>
                <Label label={"Sort by:"} className={"w-[50px]"}/>
                <SelectReact className={"w-auto md:w-full"} options={options} value={review} handleChange={(e)=>{setreview(e)}} placeholder={"Select the review star rating"} />
            </div>
            <div className='col-span-12 md:col-span-4 flex items-center gap-2'>
                <SelectReact className={"w-[180px]"} options={optionsExportCSV} value={exportCSV} handleChange={(e)=>{setExportCSV(e)}} placeholder={"Export to CSV"} />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-5'>
          {
            [...Array(6)].map((e)=>{
              return <div className='col-span-12' key={e}><ReviewsCommentsMdt /></div>
            })
          }
        </div>
    </div>
  )
}

export default ReviewsLayoutMdt