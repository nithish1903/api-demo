
import React from 'react'
import ChoosePlanComparisonBP from './ChoosePlanComparisonBP'

const EditYourPlanBP = () => {
  return (
    <>
      <div>
        <h5 className='text-[700]'>Edit Your Plan</h5>
        <p className='mt-2'>Manage how reviews are displayed & sorted in the widget.</p>
      </div>
      <div className='mt-8'>
        <ChoosePlanComparisonBP />
      </div>
    </>
  )
}

export default EditYourPlanBP