import SwitchGreen from '@/components/common/SwitchGreen'
import React from 'react'
import RRCard1 from './ReviewRequestCards/RRCard1'
import RRCard2 from './ReviewRequestCards/RRCard2'
import RRCard3 from './ReviewRequestCards/RRCard3'
import RRCard4 from './ReviewRequestCards/RRCard4'

const ReviewRequestCards = () => {
  return (
    <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <RRCard1 />
        </div>    
        <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <RRCard2 />
        </div> 
        <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <RRCard3 />
        </div> 
        <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <RRCard4 />
        </div> 
    </div>
  )
}

export default ReviewRequestCards