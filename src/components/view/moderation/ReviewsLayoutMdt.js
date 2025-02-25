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
import { errorClearRedirct } from '@/lib/cookies/cookiesNext';
import { ErrorPageHnadleBasic } from '@/components/common/ErrorHnadle';

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
          currentPage:moderationData.pagination.page,
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
        if( errorMessage && errorMessage.response && errorMessage.response.status && errorMessage.response.status!==401){
            return <ErrorPageHnadleBasic handleCallBack={()=>{ dispatch(moderationActionPost(reviewFilter)) }} errorMessage={errorMessage}/>
        }
        //  <ErrorBasicSnackbar isError={isError} errorMessage={errorMessage} handleCallBack={()=>{dispatch(dashboardActionPost({}))}}  />
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
                <SelectReact className={"w-[265px]"} options={options} value={sortReview} handleChange={(e)=>{
                  SetSortReview(e)
                  handlePage(Number(1))
                }} placeholder={"Select the review star rating"} />
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
                      <h5>No {reviewFilter.content_type==="product_reviews" && "Product Reviews"} {reviewFilter.content_type==="site_reviews" && "Site Reviews"} {reviewFilter.content_type==="product_question_answers" && "Product Question & Answers"}</h5>
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