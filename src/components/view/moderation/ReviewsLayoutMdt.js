"use client"
import Label from '@/components/common/Label';
import { SelectReact } from '@/components/common/ReactSelect';
// import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react'
// import { IoIosRefresh } from "react-icons/io";
import ReviewsCommentsMdt from './ReviewsLayoutMdt/ReviewsCommentsMdt';
import { useReviewsFilter } from '@/context/ReviewsFilterContext';
import { Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingSkeletonReview } from '@/components/common/LoadingSkeleton';
import ReviewsCommentsQAMdt from './ReviewsLayoutMdt/ReviewsCommentsQAMdt';
import { moderationActionPost } from '@/lib/redux/features/moderation/moderationAction';

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
    const dispatch = useDispatch()

    const {moderationData,isLoading,isSuccess,isError,errorMessage} = useSelector((state)=>{
      return state.moderation
    })
    const presentData  = (isSuccess && moderationData && Object.keys(moderationData).length>0 && moderationData.data && Object.keys(moderationData.data).length>0)

    const {reviewFilter, handleSort ,handlePage}  = useReviewsFilter()

    const [sortReview,SetSortReview] = useState( options[0] )
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
      handlePage(Number(page))
    };

    if(isError){
      errorClearRedirct(errorMessage)
      if( errorMessage && errorMessage.response && errorMessage.response.status && errorMessage.response.status===500){
        let msg_err = errorMessage.response.data && errorMessage.response.data.message
        return <div className="w-[100%] h-[85vh] flex items-center justify-center">
         <div className="flex justify-center items-center flex-col">
          <p>{msg_err&&msg_err}</p>
          <SaveChangesES text={"Re-try Again"} onClick={()=>{ dispatch(moderationActionPost(reviewFilter) ) }} />
         </div>
        </div>
      }
    }

  return (
    <div>
        <div>
          <h5>Reviews ({presentData && moderationData.pagination && Object.keys(moderationData.pagination).length>0 && moderationData.pagination.total ? moderationData.pagination.total : "0"})</h5>
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
              <div className="w-full grid grid-cols-12 gap-4 py-14">
                  {
                    [...Array(3)].map((e,i)=>{
                      return <div className='col-span-12' key={i}><LoadingSkeletonReview className={"md:w-[90%]"}/></div>
                    })
                  }
              </div>
          ) : (
            <div className='grid grid-cols-12 gap-5'>
              {presentData && moderationData.data.results && moderationData.data.results.length !==0 ? (
                <>
                {
                  presentData && (reviewFilter.content_type === "product_reviews" || reviewFilter.content_type === "site_reviews"  ) && moderationData.data.results.map((result,r)=>{
                    return <div className='col-span-12' key={r}><ReviewsCommentsMdt {...result}/></div>
                  })
                }
                 {
                  presentData && (reviewFilter.content_type === "product_question_answers" ) && moderationData.data.results.map((result,r)=>{
                    return <div className='col-span-12' key={r}><ReviewsCommentsQAMdt {...result}/></div>
                  })
                }
                <div className='col-span-12 flex justify-center'>
                  {
                    isSuccess&& moderationData&& Object.keys(moderationData).length>0 && Object.keys(moderationData.data).length>0 && moderationData.data.results.length>0 && moderationData.pagination && Object.keys(moderationData.pagination).length>0 && (
                      <Pagination 
                        count={Math.ceil(pagination.total / pagination.perPage)?Math.ceil(pagination.total / pagination.perPage):0}
                        page={pagination.currentPage}
                        variant="outlined"
                        shape="rounded"
                        onChange={handlePageChange} 
                      />
                    )
                  }
                </div>
                </>
              ) :  (
                <>
                  <div className='col-span-12'>
                    <div className='bg-[#D4E6FD] flex justify-center items-center rounded-[10px] w-[90%] mx-auto py-10'>
                      <h5>No Comments</h5>
                    </div>
                  </div>
                </>
              ) }
            </div>
          )
        }
    </div>
  )
}

export default ReviewsLayoutMdt