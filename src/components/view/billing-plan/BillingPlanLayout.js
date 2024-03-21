"use client"
import React, { useEffect } from 'react'
import EditYourPlanBP from './components/EditYourPlanBP'
import { useDispatch } from 'react-redux'
import { billingActionGet, planActionGet } from '@/lib/redux/features/billing/billingAction'
import Cookies from 'js-cookie'
// import PricingPlanBP from './components/PricingPlanBP'

const BillingPlanLayout = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    const user_token  = JSON.parse(Cookies.get("user"))
    if(user_token && user_token.account_id){
        const id = user_token.account_id
        dispatch(planActionGet(id))
    }
    dispatch(billingActionGet())
  },[dispatch])

  return (
    <>
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12 lg:col-span-8'>
                <EditYourPlanBP />
            </div>
            {/* <div className='col-span-12 lg:col-span-4'>
                <PricingPlanBP />
            </div> */}
        </div>
    </>
  )
}

export default BillingPlanLayout