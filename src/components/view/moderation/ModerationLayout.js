"use client"
import React, { useEffect } from 'react'

import FiltersLayoutMdt from './FiltersLayoutMdt'
import ReviewsLayoutMdt from './ReviewsLayoutMdt'
import ContainerBox from '@/components/common/ContainerBox'
import { useReviewsFilter } from '@/context/ReviewsFilterContext'
import { useDispatch } from 'react-redux'
import { moderationActionPost } from '@/lib/redux/features/moderation/moderationAction'

const ModerationLayout = () => {
  const {reviewFilter} = useReviewsFilter()
  const dipatch = useDispatch()

  useEffect(()=>{
    dipatch(moderationActionPost(reviewFilter))
  },[reviewFilter,dipatch])

  return (
    <div className='mb-10'>
        <ContainerBox>
            <FiltersLayoutMdt />
        </ContainerBox>
       <ContainerBox className='mt-8'>
            <ReviewsLayoutMdt />
       </ContainerBox>
    </div>
  )
}

export default ModerationLayout