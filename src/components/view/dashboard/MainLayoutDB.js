"use client"

import React from "react";
import { Box } from "@mui/material";


import { useDispatch, useSelector } from "react-redux";
import { dashboardActionPost } from "@/lib/redux/features/dashboard/dashboardAction";

// import ReviewsBoxDB from "@/components/view/dashboard/ReviewsBoxDB";
import AllTimeDB from "@/components/view/dashboard/AllTimeDB";
import ReviewRequestCards from "@/components/view/dashboard/ReviewRequestCards";
import { LoadingSkeletonBasic } from "@/components/common/LoadingSkeleton";
import { errorClearRedirct } from "@/lib/cookies/cookiesNext";
import { ErrorPageHnadleBasic } from "@/components/common/ErrorHnadle";

export default function MainLayoutDB() {

    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(dashboardActionPost({}))
    },[dispatch])

  const {
    dashboardData,
    isLoading,
    isSuccess,
    isError,
    errorMessage
  } = useSelector((state)=>{
    return state.dashboard
  })

  const {
    userData , 
    isLoading: userLoading,
    errorMessage: userErrorMessage,
    isError: userIsError,
    isSuccess: userIsSuccess
  } = useSelector((state)=>{
    return state.user
  })

  const user_response = userIsSuccess && userData &&  Object.keys(userData).length>0  

  const countReview = (data)=>{
    let str = ""
    let arr = []
    if(data.new_product_reviews_count===0 && data.new_site_reviews_count===0 && data.new_product_qa_count===0){
      arr.push("0")
    }
    if(data.new_product_reviews_count>0){
      arr.push(`${data.new_product_reviews_count} new product reviews`)
    }
    if(data.new_site_reviews_count>0){
      arr.push(`${data.new_site_reviews_count} new site reviews`)
    }
    if(data.new_product_qa_count>0){
      arr.push(`${data.new_product_qa_count} new questions`)
    }
    if(arr.length>0){
      str = arr.join(', ')
    }else{
      str = arr.join('')
    }
    return str
  }

  if(isError){
    errorClearRedirct(errorMessage)
    if( errorMessage && errorMessage.response && errorMessage.response.status && errorMessage.response.status!==401){
      return <ErrorPageHnadleBasic handleCallBack={()=>{
        dispatch(dashboardActionPost({}))
      }} errorMessage={errorMessage}/>
    }
    //  <ErrorBasicSnackbar isError={isError} errorMessage={errorMessage} handleCallBack={()=>{dispatch(dashboardActionPost({}))}}  />
  }
  return (
    <Box>
      <>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <div className="">
                <h5>Your Overview</h5>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex justify-end">
                <div className="inline-block">
                  <AllTimeDB />
                </div>
               </div>
            </div>
          </div>
          {
            isLoading ? (
              <div className="w-full h-auto md:h-[80vh] grid grid-cols-12 gap-4 py-14">
                  {
                     [...Array(3)].map((e,i)=>{
                      return <div className='col-span-12 md:col-span-6 lg:col-span-4' key={i}><LoadingSkeletonBasic /></div>
                    })
                  }
              </div>
            ) : (
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12 mt-10">
                  <ReviewRequestCards dashboardData={dashboardData}/>
                </div>
                <div className="col-span-12  lg:col-span-7">
                  {/* <ReviewsBoxDB /> */}
                </div>
                <div className="col-span-12 lg:col-span-5">
                  <div style={{ boxShadow:'0px 0px 10px 5px #F8F8F8 inset'}} className="h-[633px] p-7 mt-6 bg-slate-300 rounded-[10px]">
                    <div>
                      <h4 className="font-[600] text-[28px]">Hi { user_response && userData.name ? userData.name : ""},</h4>
                        <p className="text-[18px] font-[600]">You have {dashboardData && Object.keys(dashboardData).length>0 ? countReview(dashboardData) : "Null"} to be approved.</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
      </>
    </Box>
  );
}