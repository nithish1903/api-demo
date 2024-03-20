"use client"

import React, { useEffect } from 'react'
import ActivePlansBilling from './activePlansCompo/ActivePlansBilling'
// import PaymentmethodsBilling from './PaymentmethodsBilling'
import InvoicesTableBilling from './InvoicesTableBilling'
import { useDispatch } from 'react-redux'
import { billingActionGet, planActionGet } from '@/lib/redux/features/billing/billingAction'
import Cookies from 'js-cookie'


const BillingMainCompo = () => {
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
    <div className='grid grid-cols-12'>
        <div className='col-span-12'>
            <ActivePlansBilling />
        </div>
        {/* <div className='col-span-12 mt-10'>
            <PaymentmethodsBilling />
        </div> */}
        <div className='col-span-12 mt-10'>
            <InvoicesTableBilling />
        </div>
    </div>
  )
}

export default BillingMainCompo