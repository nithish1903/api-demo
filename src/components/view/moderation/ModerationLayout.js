import React from 'react'

import FiltersLayoutMdt from './FiltersLayoutMdt'
import ReviewsLayoutMdt from './ReviewsLayoutMdt'
import ContainerBox from '@/components/common/ContainerBox'

const ModerationLayout = () => {
  return (
    <div className=''>
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