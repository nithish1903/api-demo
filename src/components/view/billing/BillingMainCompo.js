import React from 'react'
import ActivePlansBilling from './activePlansCompo/ActivePlansBilling'
import PaymentmethodsBilling from './PaymentmethodsBilling'
import InvoicesTableBilling from './InvoicesTableBilling'

const BillingMainCompo = () => {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-12'>
            <ActivePlansBilling />
        </div>
        <div className='col-span-12 mt-10'>
            <PaymentmethodsBilling />
        </div>
        <div className='col-span-12 mt-10'>
            <InvoicesTableBilling />
        </div>
    </div>
  )
}

export default BillingMainCompo