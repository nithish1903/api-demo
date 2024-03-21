import React from 'react'
import Skeleton from '@mui/material/Skeleton';

export const LoadingSkeletonBasic = ({className}) => {
  return (
    <div className={`w-[280px] ${className?className:""} flex flex-col gap-4 px-3 py-3 border-2 border-[#e1e1e1] rounded-[10px] mx-auto bg-white`}>
      <div className='flex items-center gap-4'>
      <Skeleton variant="circular" width={60} height={60} />
        <div className='flex flex-col gap-3'>
            <Skeleton variant="rounded" width={110} height={30} />
            <Skeleton variant="rounded" width={40} height={20} />
        </div>
      </div>
      <Skeleton variant="rectangular" width={250} height={40} />
      <Skeleton variant="rounded" width={210} height={40} />
    </div>
  )
}


export const LoadingSkeletonReview = ({className}) => {
  return (
    <div className={`w-[100%] ${className?className:""}  flex flex-col gap-4 px-3 py-3 border-2 border-[#e1e1e1] rounded-[10px] mx-auto bg-white`}>
      <div className='flex items-center gap-4 w-[100%]'>
          <Skeleton variant="circular" width={60} height={60} />
          <div className='flex flex-col gap-3 w-[100%]'>
              <Skeleton variant="rounded" sx={{minWidth:"90%"}} height={30} />
              <Skeleton variant="rounded" sx={{minWidth:"90%"}} height={20} />
          </div>
      </div>
      <Skeleton variant="rectangular" sx={{minWidth:"90%"}} height={40} />
      <Skeleton variant="rectangular" width={200} height={20} />
      <Skeleton variant="rounded" sx={{minWidth:"90%"}} height={10} />
    </div>
  )
}