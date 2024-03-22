import React from 'react'

import { SaveChangesES } from '@/components/common/ButtonEmailSettings'

import { AiOutlineCheck } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { ErrorBasicSnackbar } from '@/components/common/Snackbars';
import { errorClearRedirct } from '@/lib/cookies/cookiesNext';

const ChoosePlanBilling = () => {

    const {allPlans,activePlan , isLoading,isSuccess,isError,errorMessage}  = useSelector((state)=>{
        return state.billings
    })
  
    const is_allPlans = isSuccess && allPlans 

    const id = isSuccess && activePlan && Object.keys(activePlan).length>0 && activePlan.data && activePlan.data.id

    if(isError){
        errorClearRedirct(errorMessage)
        if( errorMessage && errorMessage.response && errorMessage.response.status && errorMessage.response.status!==401){
            return <ErrorBasicSnackbar isError={isError} errorMessage={errorMessage} handleCallBack={()=>{dispatch(moderationActionPost(reviewFilter))}}  />
        }
        // <ErrorPageHnadleBasic handleCallBack={()=>{ dispatch(moderationActionPost(reviewFilter)) }} errorMessage={errorMessage}/>
        //  <ErrorBasicSnackbar isError={isError} errorMessage={errorMessage} handleCallBack={()=>{dispatch(dashboardActionPost({}))}}  />
    }


  return (
    <>
        <div className='grid grid-cols-12 gap-4 items-stretch'>
            {
                is_allPlans && is_allPlans.map((plan,p)=>{
                    return (
                        <div className='col-span-12 md:col-span-4' key={p}>
                            <div className=''>
                                <div className={`${plan.id==1 && "bg-[#F7E8E0]"} ${plan.id==2 && "bg-[#E9F4F2]"} ${plan.id==3 && "bg-[#E8EDF6]"} px-4 py-7 rounded-t-[20px]`}>
                                    <div>
                                        <h5 className='font-[800]'>{plan.plan_name}</h5>
                                        <p className='text-[12px] mt-3.5'>{plan.description}</p>
                                    </div>
                                    <div className='my-8'>
                                        <div className='flex items-center'>
                                            <h4 className='text-[18px]'>{plan.price} {plan.currency} / </h4>
                                            <p> Month</p>
                                        </div>
                                        <p className='text-[12px]'>Up to {plan.days} days</p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <SaveChangesES text={`
                                        ${id==1? (plan.id==1 && "Active" || plan.id==2&&"Upgrade" || plan.id==3&&"Upgrade") : ""}
                                        ${id==2? (plan.id==2 && "Active" || plan.id==1&&"Downgrade" || plan.id==3&&"Upgrade") : ""} 
                                        ${id==3? (plan.id==3 && "Active" || plan.id==1&&"Downgrade" || plan.id==2&&"Downgrade") : ""}`} className={"w-full"} />
                                    </div>
                                </div>
                                <div className=' pl-4 pr-1.5 py-5 bg-[#0266E1] rounded-b-[20px]'>
                                    <p className='text-[12px] font-bold text-[#fff]'>Features</p>
                                    <ul className='mt-4'>
                                        {plan.features && Object.entries(plan.features).map(([key, value]) => {
                                           return value && (
                                                <li key={key} className='text-[12px] text-[#fff] flex items-center'>
                                                    <span><AiOutlineCheck className=' w-[12px] h-auto mr-2'/></span>
                                                    <span>{key}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default ChoosePlanBilling