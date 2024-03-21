"use client"
import Label from '@/components/common/Label'
import { SelectOptions } from '@/components/common/SelectOptions'
import { Checkbox } from '@mui/material'
import React, { useState } from 'react'

const EmailPreferences = () => {
    const options = ["A review","B review"]
    const [review,setreview] = useState(options[0])

    
  return (
    <div className='grid grid-cols-12 gap-5 px-5 py-5 bg-[#fff] border-[1px] border-[#CFD5E1] rounded-[10px] '>
         <div className='col-span-12'>
            <h6 className='font-[700]'>Email Preferences</h6>
        </div>
        <div className='col-span-12'>
            <div className='flex items-center'>
                <div>
                    <Checkbox defaultChecked  id="reviewsNotifications" />
                </div>
                <Label className={"text-[16px]"} label={"Reviews Notifications"} htmlFor={"reviewsNotifications"} />
            </div>
        </div>
        <div className='col-span-12'>
            <SelectOptions options={options} value={review} handleChange={(e)=>{setreview(e.target.value)}} placeholder={"Select the review star rating"} />
        </div>
    </div>
  )
}

export default EmailPreferences