"use client"
import { OutLineBtnEmail } from '@/components/common/ButtonEmailSettings'
import FormInputFiled from '@/components/common/FormInputFiled'
import React, { useState } from 'react'

const BlacklistEmail = () => {

    const [fontSize,setFontSize] = useState(0)

    const handleFontSizeInc = () => {
        setFontSize((count) => count + 1)
    }

    const handleFontSizeDec = () => {
        if (fontSize > 0) {
            setFontSize((count) => count - 1)
        }
    }

  return (
    <>
        <div className='grid grid-cols-12 gap-2 pb-7 border-b-2 border-[#CFD5E1]'>
            <div className='col-span-12'>
                <h6 className='font-[700]'>Email Blocklist</h6>
            </div>
            <div className='col-span-12'>
                <p className='text-[16px]'>Add the email addresses of customers ypu wish to exclude from receiving Kasplo emails.</p>
            </div>
            <div className='col-span-12'>
                <textarea rows={6} className='text-[#334851] border-[1px] border-[#CFD5E1] rounded-[6px] w-full'></textarea>
            </div>
            <div className='col-span-12'>
                <OutLineBtnEmail text={"Add To Blocklist"} />
            </div>
        </div>
        <div className='grid grid-cols-12 gap-5 md:gap-2 pt-7'>
            <div className='col-span-12'>
                <h6 className='font-[700]'>Remove from Blocklist</h6>
            </div>
            <div className='col-span-12'>
                <p className='text-[16px]'>
                    Type and select the email address of the customers you wish to remove from the email blocklist.
                </p>
            </div>
            <div className='col-span-12 md:col-span-6'>
                <FormInputFiled  placeholder={"Type an Email"}/>
            </div>
            <div className='col-span-12 md:col-span-6'>
                <OutLineBtnEmail text={"Remove from Blocklist"} />
            </div>
        </div>
    </>
  )
}

export default BlacklistEmail