"use client"
import { SaveChangesES } from '@/components/common/ButtonEmailSettings'
import FormInputFiled from '@/components/common/FormInputFiled'
import Label from '@/components/common/Label'
import { SelectOptions } from '@/components/common/SelectOptions'
import React, { useState } from 'react'

const GeneralSettingsLayout = () => {
    const options = ["A review","B review"]
    const [review,setreview] = useState(options[0])

  return (
    <div>
        <div className='mb-10'>
            <h5 className='font-[700]'>General Settings</h5>
        </div>
        <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-12 grid grid-cols-12 gap-0 md:gap-6 items-center'>
                <div className='col-span-12 md:col-span-3'>
                    <Label htmlFor={""} label={"Company Name:"} className={"text-[16px]"} />
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <FormInputFiled placeholder={"Fashion Studio"} classInput={"w-full"}/>
                </div>
            </div>
            <div className='col-span-12 grid grid-cols-12 gap-0 md:gap-6 items-center'>
                <div className='col-span-12 md:col-span-3'>
                    <Label htmlFor={""} label={"Your Store Industry:"} className={"text-[16px]"} />
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <SelectOptions className={"w-full lg:px-6"} options={options} value={review} handleChange={(e)=>{setreview(e.target.value)}} placeholder={"Select the review star rating"} />
                </div>
            </div>
            <div className='col-span-12 grid grid-cols-12 md:gap-6 items-center'>
                <div className='col-span-12 md:col-span-3'>
                    <Label htmlFor={""} label={"Your Account ID:"} className={"text-[16px]"} />
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <FormInputFiled placeholder={"Fashion Studio"} classInput={"w-full"}/>
                </div>
            </div>
            <div className='col-span-12 grid grid-cols-12 md:gap-6 items-center'>
                <div className='col-span-12 md:col-span-3'>
                    <Label htmlFor={""} label={"Your Store Name:"} className={"text-[16px]"} />
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <FormInputFiled placeholder={"Fashion Studio"} classInput={"w-full"}/>
                </div>
            </div>
            <div className='col-span-12 grid grid-cols-12 md:gap-6 items-center'>
                <div className='col-span-12 md:col-span-3'>
                    <Label htmlFor={""} label={"Your Website:"} className={"text-[16px]"} />
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <FormInputFiled placeholder={"Fashion Studio"} classInput={"w-full"}/>
                </div>
            </div>
            <div className='col-span-12 grid grid-cols-12 md:gap-6 items-center'>
                <div className='col-span-12 md:col-span-3'>
                    <Label htmlFor={""} label={"Language:"} className={"text-[16px]"} />
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <SelectOptions className={"w-full lg:px-6"} options={options} value={review} handleChange={(e)=>{setreview(e.target.value)}} placeholder={"Select the review star rating"} />
                </div>
            </div>
        </div>
        <div className='mt-10 mb-6'>
            <h5 className='font-[700]'>API Credentials</h5>
        </div>
        <div className='grid grid-cols-12 gap-5 pb-14 border-b-2 border-[#CFD5E1]'>
            <div className='col-span-12 grid grid-cols-12 md:gap-6 items-center'>
                <div className='col-span-12 md:col-span-3'>
                    <Label htmlFor={""} label={"App Key:"} className={"text-[16px]"} />
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <FormInputFiled placeholder={"Fashion Studio"} classInput={"w-full"}/>
                </div>
            </div>
            <div className='col-span-12 grid grid-cols-12 md:gap-6 items-center'>
                <div className='col-span-12 md:col-span-3'>
                    <Label htmlFor={""} label={"Secret Key:"} className={"text-[16px]"} />
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <SaveChangesES className={"w-full"} text={"GET SECRET KEY"}/>
                </div>
            </div>
        </div>
        <div className='pt-10'>
            <SaveChangesES text={"Save Changes"} />
        </div>
    </div>
  )
}

export default GeneralSettingsLayout