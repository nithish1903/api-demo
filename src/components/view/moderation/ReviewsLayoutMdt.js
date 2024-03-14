"use client"
import Label from '@/components/common/Label';
import { SelectReact } from '@/components/common/ReactSelect';
// import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react'
// import { IoIosRefresh } from "react-icons/io";
import ReviewsCommentsMdt from './ReviewsLayoutMdt/ReviewsCommentsMdt';
import { useReviewsFilter } from '@/context/ReviewsFilterContext';
import { Pagination } from '@mui/material';
import { useSelector } from 'react-redux';
import { LoadingSkeletonReview } from '@/components/common/LoadingSkeleton';

const options = [
  { value: 'newest', label: 'Date (newest first)' },
  { value: 'oldest', label: 'Date (oldest)' },
  // { value: 'With Images/Videos', label: 'With Images/Videos' },
  { value: 'highestRating', label: 'Star Rating (Highest first)' },
  { value: 'lowestRating', label: 'Star Rating (Lowest first)' },
]

// const optionsExportCSV = [
//   { value: 'Filtered Reviews', label: 'Filtered Reviews' },
//   { value: 'All Reviews', label: 'All Reviews' },
// ]

const ReviewsLayoutMdt = () => {
    // const [exportCSV,setExportCSV] = useState(null)
    const {moderationData,isLoading,isSuccess,isError,errorMessage} = useSelector((state)=>{
      return state.moderation
    })
    const presentData  = (isSuccess && moderationData && Object.keys(moderationData).length>0 && moderationData.data && Object.keys(moderationData.data).length>0)

    const { reviewFilter,handleSort }  = useReviewsFilter()

    const [sortReview,SetSortReview] = useState( options[1] )
    const [pagination, setPagination] = useState({
      total: 0,
      perPage: 10,
      currentPage: 1
    });

    useEffect(()=>{
      if(isSuccess&&moderationData&& Object.keys(moderationData).length>0 && moderationData.pagination){
        setPagination(prevPagination => ({
          ...prevPagination,
          total: moderationData.pagination.total,
          perPage: moderationData.pagination.per_page
        }));
      }
    },[moderationData,isSuccess])

    useEffect(()=>{
      if(sortReview&&Object.keys(sortReview).length>0&&sortReview.value){
        handleSort(sortReview.value)
      }
    },[sortReview])

    const handlePageChange = (event, page) => {
      setPagination(prevPagination => ({
        ...prevPagination,
        currentPage: page
      }));
    };

  return (
    <div>
        <div>
          <h5>Reviews ({presentData ? moderationData.data.results.length : "Null"})</h5>
        </div>
        <div className='grid grid-cols-12 gap-4 my-6'>
          <div className='col-span-12 lg:col-span-4 flex items-center gap-3'>
            {/* <div className='flex items-center gap-2'>
                <Checkbox id='SelectAll' sx={{padding:"0px"}}/>
                <Label className={"text-[16px]"} label={"Select All"} htmlFor={"#SelectAll"}  />
            </div>
            <div className=''>
                <button className=' p-1.5 rounded-[8px] flex items-center gap-2 border-2 border-[#CFD5E1]'>
                  <span><IoIosRefresh /></span>
                  <span>Refresh</span>
                </button>
            </div> */}
          </div>
          <div className='col-span-12 lg:col-span-8 grid grid-cols-12 gap-3'>
            <div className='col-span-12 md:col-span-12 xl:col-span-12 flex flex-col md:flex-row md:items-center gap-2 justify-end'>
                <Label label={"Sort by:"} className={"inline-block"}/>
                <SelectReact className={"w-[265px]"} options={options} value={sortReview} handleChange={(e)=>{SetSortReview(e)}} placeholder={"Select the review star rating"} />
            </div>
            {/* <div className='col-span-12 md:col-span-4 flex items-center gap-2'>
                <SelectReact className={"w-[180px]"} options={optionsExportCSV} value={exportCSV} handleChange={(e)=>{setExportCSV(e)}} placeholder={"Export to CSV"} />
            </div> */}
          </div>
        </div>
        {
          isLoading ? (
              <div className="w-full h-auto md:h-[80vh] grid grid-cols-12 gap-4 py-14">
                  {
                    [...Array(3)].map((e,i)=>{
                      return <div className='col-span-12' key={i}><LoadingSkeletonReview className={"md:w-[90%]"}/></div>
                    })
                  }
              </div>
          ) : (
            <div className='grid grid-cols-12 gap-5'>
                {
                  presentData && moderationData.data.results.map((result,r)=>{
                    return <div className='col-span-12' key={r}><ReviewsCommentsMdt {...result}/></div>
                  })
                }
                <div className='col-span-12 flex justify-center'>
                  {
                    isSuccess&& moderationData&& Object.keys(moderationData).length>0 && moderationData.pagination && (
                      <Pagination 
                        count={Math.ceil(pagination.total / pagination.perPage)}
                        page={pagination.currentPage}
                        variant="outlined"
                        shape="rounded"
                        onChange={handlePageChange} 
                      />
                    )
                  }
                  
                </div>
            </div>
          )
        }
    </div>
  )
}

export default ReviewsLayoutMdt