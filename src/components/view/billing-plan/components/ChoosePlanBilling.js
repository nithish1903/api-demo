import React from 'react'

import { SaveChangesES } from '@/components/common/ButtonEmailSettings'

import { AiOutlineCheck } from "react-icons/ai";

const ChoosePlanBilling = () => {

    const plans = [
        {
            plane:1,
            name:"Plan 1",
            para:"Maximize reviews impact with tools to drive SEO & brand awareness.",
            price:"₹9,999",
            order:"Up to 500 orders / month",
            link:"",
            pointHead:"Plans include",
            points:[
                "Beautiful on-site display",
                "Powerful tools to share content",
                "Chat & email support"
            ],
            bg:"bg-[#F7E8E0]"
        },
        {
            plane:2,
            name:"Plan 2",
            para:"Optimize display to collect shopper data & drive on-site conversion.",
            price:"₹11,999",
            order:"Up to 500 orders / month",
            link:"",
            pointHead:"Everything in growth",
            points:[
                "Seller ratings for shoppers trust",
                "Robust insights & metrics",
                "Onboarding supports"
            ],
            bg:"bg-[#E9F4F2]"
        },
        {
            plane:3,
            name:"Plan 3",
            para:"Optimize display to collect shopper data & drive on-site conversion.",
            price:"₹13,999",
            order:"Up to 500 orders / month",
            link:"",
            pointHead:"Everything in growth",
            points:[
                "Seller ratings for shoppers trust",
                "Robust insights & metrics",
                "Onboarding supports"
            ],
            bg:"bg-[#E8EDF6]"
        },
    ]

  return (
    <>
        <div className='grid grid-cols-12 gap-4'>
            {
                plans.map((plan,p)=>{
                    return (
                        <div className='col-span-12 md:col-span-4' key={p}>
                            <div className=''>
                                <div className={`${plan.bg} px-4 py-7 rounded-t-[20px]`}>
                                    <div>
                                        <h5 className='font-[800]'>{plan.name}</h5>
                                        <p className='text-[12px] mt-3.5'>{plan.para}</p>
                                    </div>
                                    <div className='my-8'>
                                        <div className='flex items-center'>
                                            <h4 className='text-[24px]'>{plan.price}/</h4>
                                            <p>Month</p>
                                        </div>
                                        <p className='text-[12px]'>{plan.order}</p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <SaveChangesES text={"Check Now"} className={"w-full"} />
                                    </div>
                                </div>
                                <div className=' pl-4 pr-1.5 py-5 bg-[#0266E1] rounded-b-[20px]'>
                                    <p className='text-[12px] font-bold text-[#fff]'>{plan.pointHead}</p>
                                    <ul className='mt-4'>
                                        {
                                            plan.points.map((point,t)=>{
                                                return <li key={t} className='text-[12px] text-[#fff] flex items-center'>
                                                <span><AiOutlineCheck className=' w-[12px] h-auto mr-2'/></span>
                                                <span>{point}</span>
                                            </li>
                                            })
                                        }
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