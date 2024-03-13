"use client"

import React from "react";
import { Box } from "@mui/material";


import { useDispatch, useSelector } from "react-redux";
import { dashboardActionPost } from "@/lib/redux/features/dashboard/dashboardAction";

// import ReviewsBoxDB from "@/components/view/dashboard/ReviewsBoxDB";
import AllTimeDB from "@/components/view/dashboard/AllTimeDB";
import ReviewRequestCards from "@/components/view/dashboard/ReviewRequestCards";
import { LoadingSkeletonBasic } from "@/components/common/LoadingSkeleton";

export default function MainLayoutDB() {

    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(dashboardActionPost({}))
    },[dispatch])

  const {dashboardData,isLoading,isSuccess,isError,errorMessage} = useSelector((state)=>{
    return state.dashboard
  })

  // console.log(dashboardData,isLoading,isSuccess,isError,errorMessage)

  if(isError){

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
              <div className="w-full h-[80vh] grid grid-cols-12 gap-4 py-14">
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
                {/* <div className="col-span-12  lg:col-span-7">
                  <ReviewsBoxDB />
                </div> */}
                <div className="col-span-12 lg:col-span-5">
                  <div style={{ boxShadow:'0px 0px 10px 5px #F8F8F8 inset'}} className="h-[633px] p-7 mt-6 bg-slate-300 rounded-[10px]">
                    <div>
                      <h4 className="font-[600] text-[28px]">Hi Ankit Bopche,</h4>
                      <p className="text-[18px] font-[600]">You Have {dashboardData.new_product_reviews_count} uncompleted optimization actions.</p>
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