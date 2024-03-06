import React from 'react'
import EditYourPlanBP from './components/EditYourPlanBP'
import PricingPlanBP from './components/PricingPlanBP'

const BillingPlanLayout = () => {
  return (
    <>
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12 lg:col-span-8'>
                <EditYourPlanBP />
            </div>
            <div className='col-span-12 lg:col-span-4'>
                <PricingPlanBP />
            </div>
        </div>
    </>
  )
}

export default BillingPlanLayout